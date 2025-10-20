// src/services/payment.ts
import { auth } from '../config/firebase';

export interface CheckoutData {
  amount: number;
  tier: string;
  userId: string;
  email: string;
}

export const createCheckout = async (data: CheckoutData) => {
  try {
    const response = await fetch('/api/checkout/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: data.amount,
        currency: 'ZAR',
        successUrl: `${window.location.origin}/payment/success`,
        cancelUrl: `${window.location.origin}/payment/cancel`,
        metadata: {
          userId: data.userId,
          tier: data.tier,
          email: data.email,
        },
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to create checkout');
    }

    const checkout = await response.json();
    return checkout;
  } catch (error) {
    console.error('Error creating checkout:', error);
    throw error;
  }
};

export const redirectToCheckout = async (checkoutData: CheckoutData) => {
  try {
    const checkout = await createCheckout(checkoutData);
    
    if (checkout.redirectUrl) {
      window.location.href = checkout.redirectUrl;
    } else {
      throw new Error('No redirect URL received from Yoco');
    }
  } catch (error) {
    console.error('Error redirecting to checkout:', error);
    throw error;
  }
};

export const getYocoPublicKey = async (): Promise<string> => {
  try {
    const response = await fetch('/api/config/public-key');
    const data = await response.json();
    return data.publicKey;
  } catch (error) {
    console.error('Error fetching public key:', error);
    throw error;
  }
};

