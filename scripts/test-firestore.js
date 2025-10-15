// Simple script to test Firestore connection
import admin from 'firebase-admin';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

// Get the current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load the service account key
const serviceAccountPath = join(__dirname, '..', 'config', 'operiva-firebase-adminsdk-fbsvc-9f9eccba15.json');
const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, 'utf8'));

// Initialize Firebase Admin
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// Simple test function
async function testFirestore() {
  try {
    console.log('Testing Firestore connection...');
    
    // Try to get a document that may not exist (this is just to test connection)
    const testDoc = await db.collection('test').doc('test-doc').get();
    
    console.log('Successfully connected to Firestore!');
    console.log('Document exists:', testDoc.exists);
    
    // Try to write a simple document
    await db.collection('test').doc('test-doc').set({
      timestamp: new Date(),
      message: 'Test connection successful'
    });
    
    console.log('Successfully wrote to Firestore!');
    
  } catch (error) {
    console.error('Error connecting to Firestore:', error);
  }
}

testFirestore().then(() => process.exit(0));