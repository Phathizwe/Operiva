// src/scripts/seed.js
// This script is designed to be run locally by the user to seed their Firebase Firestore database.
// It requires the Firebase Admin SDK to be set up.

const admin = require('firebase-admin');

// --- 1. INITIALIZE FIREBASE ADMIN SDK ---
// IMPORTANT: Replace this with the path to your downloaded service account key file.
// You can get this from Firebase Console -> Project Settings -> Service Accounts -> Generate new private key.
const serviceAccount = require('../path/to/your/serviceAccountKey.json'); 

// Initialize the app
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

// --- 2. SEED DATA DEFINITIONS ---
const libraries = [
  { id: 'cash', outcome: 'Cash', title: 'Cash Acceleration', description: 'Ready-to-use templates for invoicing, collections, debtor management, and cash flow optimization.', artifactCount: 4, trackCount: 2 },
  { id: 'compliance', outcome: 'Compliance', title: 'Compliance & Governance', description: 'Step-by-step packs for CIPC, SARS, POPIA, and COIDA, plus policy bundles and filing calendars.', artifactCount: 0, trackCount: 0 },
  { id: 'customers', outcome: 'Customers', title: 'Customers & Growth', description: 'Go-to-market playbooks, campaign briefs, content calendars, and proposal decks to win and retain customers.', artifactCount: 0, trackCount: 0 },
  { id: 'control', outcome: 'Control', title: 'Operations & Control', description: 'SOP templates, inventory spreadsheets, reorder point calculators, and supplier scorecards for efficient operations.', artifactCount: 0, trackCount: 0 },
  { id: 'capital', outcome: 'Capital', title: 'Capital Readiness', description: 'Pitch deck and data room templates, KPI dashboards, and funding application checklists to secure investment.', artifactCount: 0, trackCount: 0 },
];

const artifacts = [
  { id: 'a1', title: 'VAT-Aware Invoice Template Pack', description: 'Professional, compliant invoice and quote templates for South African businesses.', outcome: 'Cash', type: 'Template', version: 'v1.2', lastUpdated: new Date(), downloadUrl: 'https://operiva.com/downloads/a1.docx', fileType: 'DOCX', isPremium: false },
  { id: 'a2', title: 'Debtor Dunning Email Scripts', description: 'A set of 5 email scripts for escalating late payments from 7 to 60 days overdue.', outcome: 'Cash', type: 'SOP', version: 'v2.0', lastUpdated: new Date(), downloadUrl: 'https://operiva.com/downloads/a2.gdoc', fileType: 'GDoc', isPremium: true },
  { id: 'a3', title: 'Collections SOP', description: 'A step-by-step operating procedure for managing the entire collections process in-house.', outcome: 'Cash', type: 'SOP', version: 'v1.0', lastUpdated: new Date(), downloadUrl: 'https://operiva.com/downloads/a3.pdf', fileType: 'PDF', isPremium: true },
  { id: 'a4', title: 'Early-Payment Discount Calculator', description: 'Excel sheet to calculate the optimal discount rate to incentivize early payment.', outcome: 'Cash', type: 'Calculator', version: 'v1.0', lastUpdated: new Date(), downloadUrl: 'https://operiva.com/downloads/a4.xlsx', fileType: 'XLSX', isPremium: false },
];

const tracks = [
  { id: 't1', title: 'Reduce DSO in 30 Days', description: 'A 7-step guided track to improve your Days Sales Outstanding metric.', outcome: 'Cash', durationMinutes: 90, artifactIds: ['a1', 'a2', 'a4'], isPremium: true },
  { id: 't2', title: 'Collections Kickstart', description: 'A quick 60-minute track to implement a basic collections process.', outcome: 'Cash', durationMinutes: 60, artifactIds: ['a3'], isPremium: false },
];

// --- 3. SEEDING FUNCTION ---
async function seedDatabase() {
  console.log('Starting Firestore Seeding...');

  try {
    // Clear existing data (optional, but good for testing)
    // await clearCollection('libraries');
    // await clearCollection('artifacts');
    // await clearCollection('tracks');

    // Seed Libraries
    const libraryPromises = libraries.map(lib => db.collection('libraries').doc(lib.id).set(lib));
    await Promise.all(libraryPromises);
    console.log(`Successfully seeded ${libraries.length} libraries.`);

    // Seed Artifacts
    const artifactPromises = artifacts.map(art => db.collection('artifacts').doc(art.id).set(art));
    await Promise.all(artifactPromises);
    console.log(`Successfully seeded ${artifacts.length} artifacts.`);

    // Seed Tracks
    const trackPromises = tracks.map(track => db.collection('tracks').doc(track.id).set(track));
    await Promise.all(trackPromises);
    console.log(`Successfully seeded ${tracks.length} tracks.`);

    console.log('Firestore Seeding Complete!');
  } catch (error) {
    console.error('Error during seeding:', error);
    process.exit(1);
  }
}

// Helper function to clear a collection (optional)
// async function clearCollection(collectionPath) {
//   const collectionRef = db.collection(collectionPath);
//   const snapshot = await collectionRef.get();
//   const deletePromises = [];
//   snapshot.forEach(doc => {
//     deletePromises.push(doc.ref.delete());
//   });
//   await Promise.all(deletePromises);
//   console.log(`Cleared collection: ${collectionPath}`);
// }

seedDatabase().then(() => process.exit(0));
