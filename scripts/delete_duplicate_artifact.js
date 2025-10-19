// scripts/delete_duplicate_artifact.js
// Delete the duplicate "3-Month Cash Flow Forecast Template" (a3) from Firestore

import admin from 'firebase-admin';
import { readFileSync } from 'fs';

// Read service account
const serviceAccount = JSON.parse(
  readFileSync('./config/operiva-firebase-adminsdk-fbsvc-9f9eccba15.json', 'utf8')
);

// Initialize Firebase Admin
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

async function deleteDuplicateArtifact() {
  try {
    console.log('Deleting duplicate artifact a3...');
    
    // Delete the artifact document
    await db.collection('artifacts').doc('a3').delete();
    
    console.log('✅ Successfully deleted artifact a3 (3-Month Cash Flow Forecast Template)');
    console.log('The complete artifact a6 (Cash Flow Forecasting Tool) remains in the database.');
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Error deleting artifact:', error);
    process.exit(1);
  }
}

deleteDuplicateArtifact();

