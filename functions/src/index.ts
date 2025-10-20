import {onRequest} from 'firebase-functions/v2/https';
import * as admin from 'firebase-admin';
import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

admin.initializeApp();

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

// Get Yoco configuration from environment variables
const getYocoConfig = () => {
  return {
    secretKey: process.env.YOCO_SECRET_KEY,
    publicKey: process.env.YOCO_PUBLIC_KEY,
    webhookSecret: process.env.YOCO_WEBHOOK_SECRET,
  };
};

// Create Yoco checkout
app.post('/checkout/create', async (req, res): Promise<any> => {
  try {
    const { amount, currency, successUrl, cancelUrl, metadata } = req.body;
    const config = getYocoConfig();

    if (!config.secretKey) {
      return res.status(500).json({ error: 'Yoco secret key not configured' });
    }

    const response = await fetch('https://payments.yoco.com/api/checkouts', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${config.secretKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: amount * 100, // Convert to cents
        currency: currency || 'ZAR',
        successUrl,
        cancelUrl,
        metadata,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Yoco checkout creation failed:', data);
      return res.status(response.status).json({ error: data });
    }

    return res.json(data);
  } catch (error) {
    console.error('Error creating checkout:', error);
    res.status(500).json({ error: 'Failed to create checkout' });
  }
});

// Get Yoco public key
app.get('/config/public-key', (req, res) => {
  const config = getYocoConfig();
  res.json({ publicKey: config.publicKey });
});

// Yoco webhook handler
app.post('/webhooks/yoco', async (req, res) => {
  try {
    const event = req.body;
    console.log('Received Yoco webhook:', event.type);

    // TODO: Verify webhook signature using webhookSecret
    
    if (event.type === 'payment.succeeded') {
      await handlePaymentSuccess(event);
    } else if (event.type === 'payment.failed') {
      await handlePaymentFailure(event);
    }

    res.status(200).send('OK');
  } catch (error) {
    console.error('Error handling webhook:', error);
    res.status(500).send('Error processing webhook');
  }
});

async function handlePaymentSuccess(event: any) {
  try {
    const { metadata, amount, id } = event;
    const { userId, tier, email } = metadata || {};

    if (!userId || !tier) {
      console.error('Missing required metadata in payment event');
      return;
    }

    // Update user subscription in Firestore
    await admin.firestore().collection('users').doc(userId).update({
      subscription: {
        tier,
        status: 'active',
        amount: amount / 100, // Convert from cents
        paymentId: id,
        startDate: admin.firestore.FieldValue.serverTimestamp(),
        updatedAt: admin.firestore.FieldValue.serverTimestamp(),
      },
    });

    // Create payment record
    await admin.firestore().collection('payments').add({
      userId,
      tier,
      amount: amount / 100,
      paymentId: id,
      status: 'succeeded',
      email,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    console.log(`Payment succeeded for user ${userId}, tier: ${tier}`);
  } catch (error) {
    console.error('Error handling payment success:', error);
    throw error;
  }
}

async function handlePaymentFailure(event: any) {
  try {
    const { metadata, id, failureReason } = event;
    const { userId, email } = metadata || {};

    if (!userId) {
      console.error('Missing userId in payment failure event');
      return;
    }

    // Create failed payment record
    await admin.firestore().collection('payments').add({
      userId,
      paymentId: id,
      status: 'failed',
      failureReason,
      email,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    console.log(`Payment failed for user ${userId}, reason: ${failureReason}`);
  } catch (error) {
    console.error('Error handling payment failure:', error);
    throw error;
  }
}

// Export the Express app as a Firebase Function (v2)
export const api = onRequest(app);

