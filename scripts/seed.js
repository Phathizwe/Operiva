// src/scripts/seed.js
// This script is designed to be run locally by the user to seed their Firebase Firestore database.
// It requires the Firebase Admin SDK to be set up.

import admin from 'firebase-admin';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

// Get the current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// --- 1. INITIALIZE FIREBASE ADMIN SDK ---
// IMPORTANT: Replace this with the path to your downloaded service account key file.
// You can get this from Firebase Console -> Project Settings -> Service Accounts -> Generate new private key.
const serviceAccountPath = join(__dirname, '..', 'config', 'operiva-firebase-adminsdk-fbsvc-9f9eccba15.json');
// Read and parse the service account file
const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, 'utf8'));

// Initialize the app
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

// --- 2. SEED DATA DEFINITIONS ---

// --- LIBRARIES (Updated with research-backed descriptions) ---
const libraries = [
  { id: 'cash', outcome: 'Cash', title: 'Cash Acceleration', description: 'Strategic financial management tools for cash flow forecasting, cost control, and securing funding readiness to overcome the financial illiteracy gap.', artifactCount: 10, trackCount: 3 },
  { id: 'compliance', outcome: 'Compliance', title: 'Compliance & Governance', description: 'Frameworks for POPIA, CIPC, and SARS compliance, plus proactive risk mitigation strategies to avoid costly fines and legal disputes.', artifactCount: 12, trackCount: 4 },
  { id: 'customers', outcome: 'Customers', title: 'Customers & Growth', description: 'Agile marketing playbooks, sales scripts, and digital strategy guides to attract, convert, and retain profitable customers in a competitive market.', artifactCount: 15, trackCount: 3 },
  { id: 'control', outcome: 'Control', title: 'Operations & Control', description: 'Resilience kits for load shedding, SOP templates, and supply chain management tools to navigate logistical bottlenecks and maintain business continuity.', artifactCount: 10, trackCount: 2 },
  { id: 'human-capital', outcome: 'Human Capital', title: 'Human Capital & Leadership', description: 'Tools and guides for owner-manager development, talent retention, and building organizational capabilities, addressing the "owner-manager bottleneck".', artifactCount: 8, trackCount: 2 },
  { id: 'strategy', outcome: 'Strategy', title: 'Business Strategy & Planning', description: 'Strategic frameworks and planning tools to design, validate, and evolve your business model, ensuring long-term viability and competitive positioning.', artifactCount: 5, trackCount: 2 },
];

// --- ARTIFACTS (Expanded with research-backed content) ---
const artifacts = [
  // CASH ACCELERATION (Focus: Financial Management, Funding Readiness)
  { id: 'a1', title: 'VAT-Aware Invoice Template Pack', description: 'Professional, compliant invoice and quote templates for South African businesses.', outcome: 'Cash', type: 'Template', version: 'v1.2', lastUpdated: new Date(), downloadUrl: 'https://operiva.com/downloads/a1.docx', fileType: 'DOCX', isPremium: false },
  { id: 'a2', title: 'Debtor Dunning Email Scripts', description: 'A set of 5 email scripts for escalating late payments from 7 to 60 days overdue.', outcome: 'Cash', type: 'SOP', version: 'v2.0', lastUpdated: new Date(), downloadUrl: 'https://operiva.com/downloads/a2.gdoc', fileType: 'GDoc', isPremium: true },
  { id: 'a3', title: '3-Month Cash Flow Forecast Template', description: 'An advanced Excel template for dynamic budgeting and strategic cash flow forecasting.', outcome: 'Cash', type: 'Calculator', version: 'v1.0', lastUpdated: new Date(), downloadUrl: 'https://operiva.com/downloads/a3.xlsx', fileType: 'XLSX', isPremium: true },
  { id: 'a4', title: 'Funding Readiness Checklist', description: 'A step-by-step checklist to prepare credible financial records and meet DFI/Bank requirements for capital access.', outcome: 'Cash', type: 'Checklist', version: 'v1.0', lastUpdated: new Date(), downloadUrl: 'https://operiva.com/downloads/a4.pdf', fileType: 'PDF', isPremium: false },
  { id: 'a5', title: 'Cost Control Audit Template', description: 'A guide and template for rigorous cost control to protect profit margins against rising input costs.', outcome: 'Cash', type: 'Guide', version: 'v1.0', lastUpdated: new Date(), downloadUrl: 'https://operiva.com/downloads/a5.pdf', fileType: 'PDF', isPremium: true },

  // COMPLIANCE & GOVERNANCE (Focus: POPIA, SARS, Risk Mitigation)
  { id: 'c1', title: 'POPIA Compliance Policy Bundle', description: 'Essential policies (Privacy, Data Access, Breach Notification) to ensure compliance with the Protection of Personal Information Act.', outcome: 'Compliance', type: 'Template', version: 'v1.0', lastUpdated: new Date(), downloadUrl: 'https://operiva.com/downloads/c1.docx', fileType: 'DOCX', isPremium: true },
  { id: 'c2', title: 'SARS Tax Filing Calendar', description: 'A comprehensive calendar of all provisional tax, VAT, and PAYE deadlines for SMMEs.', outcome: 'Compliance', type: 'Checklist', version: 'v2.0', lastUpdated: new Date(), downloadUrl: 'https://operiva.com/downloads/c2.pdf', fileType: 'PDF', isPremium: false },
  { id: 'c3', title: 'Basic Risk Assessment Matrix', description: 'A simple matrix to proactively identify and mitigate operational risks (e.g., fire, theft, under-insurance).', outcome: 'Compliance', type: 'Calculator', version: 'v1.0', lastUpdated: new Date(), downloadUrl: 'https://operiva.com/downloads/c3.xlsx', fileType: 'XLSX', isPremium: false },
  { id: 'c4', title: 'CIPC Annual Return Checklist', description: 'A step-by-step guide to ensure timely and accurate submission of CIPC annual returns.', outcome: 'Compliance', type: 'Checklist', version: 'v1.0', lastUpdated: new Date(), downloadUrl: 'https://operiva.com/downloads/c4.pdf', fileType: 'PDF', isPremium: false },
  { id: 'c5', title: 'Labour Law Basic Compliance Guide', description: 'A guide to the Basic Conditions of Employment Act (BCEA) for micro-enterprises.', outcome: 'Compliance', type: 'Guide', version: 'v1.0', lastUpdated: new Date(), downloadUrl: 'https://operiva.com/downloads/c5.pdf', fileType: 'PDF', isPremium: true },

  // CUSTOMERS & GROWTH (Focus: Agile Marketing, Digital Strategy)
  { id: 'g1', title: 'Digital Marketing Strategy Playbook', description: 'A step-by-step guide to developing an integrated digital strategy (SEO, Social, Email) to drive revenue.', outcome: 'Customers', type: 'Guide', version: 'v1.0', lastUpdated: new Date(), downloadUrl: 'https://operiva.com/downloads/g1.pdf', fileType: 'PDF', isPremium: true },
  { id: 'g2', title: 'SEO Keyword Research Template', description: 'A spreadsheet template to identify high-intent keywords and improve search engine ranking.', outcome: 'Customers', type: 'Calculator', version: 'v1.0', lastUpdated: new Date(), downloadUrl: 'https://operiva.com/downloads/g2.xlsx', fileType: 'XLSX', isPremium: false },
  { id: 'g3', title: 'Social Media Content Calendar', description: 'A 3-month calendar template for planning and scheduling content across key platforms.', outcome: 'Customers', type: 'Template', version: 'v1.0', lastUpdated: new Date(), downloadUrl: 'https://operiva.com/downloads/g3.xlsx', fileType: 'XLSX', isPremium: false },
  { id: 'g4', title: 'Sales Pitch Deck Template', description: 'A professional, editable template for creating a compelling sales presentation.', outcome: 'Customers', type: 'Template', version: 'v1.0', lastUpdated: new Date(), downloadUrl: 'https://operiva.com/downloads/g4.pptx', fileType: 'DOCX', isPremium: true },
  { id: 'g5', title: 'Customer Retention Survey', description: 'A template for surveying customers to build loyalty and reduce churn.', outcome: 'Customers', type: 'Template', version: 'v1.0', lastUpdated: new Date(), downloadUrl: 'https://operiva.com/downloads/g5.docx', fileType: 'DOCX', isPremium: false },

  // OPERATIONS & CONTROL (Focus: Load Shedding Resilience, Supply Chain)
  { id: 'o1', title: 'Load Shedding Business Continuity Plan', description: 'A checklist and guide to minimize disruption from power outages (e.g., data backup, communication protocols).', outcome: 'Control', type: 'Checklist', version: 'v1.0', lastUpdated: new Date(), downloadUrl: 'https://operiva.com/downloads/o1.pdf', fileType: 'PDF', isPremium: false },
  { id: 'o2', title: 'Inventory Management SOP', description: 'A standard operating procedure for effective inventory control, minimizing waste and stock-outs.', outcome: 'Control', type: 'SOP', version: 'v1.0', lastUpdated: new Date(), downloadUrl: 'https://operiva.com/downloads/o2.pdf', fileType: 'PDF', isPremium: true },
  { id: 'o3', title: 'Supplier Scorecard Template', description: 'An Excel template to evaluate and manage supplier performance, mitigating supply chain bottlenecks.', outcome: 'Control', type: 'Calculator', version: 'v1.0', lastUpdated: new Date(), downloadUrl: 'https://operiva.com/downloads/o3.xlsx', fileType: 'XLSX', isPremium: true },
  { id: 'o4', title: 'Digital Tool Integration Guide', description: 'A guide to strategically adopting digital tools (CRM, Accounting) to improve efficiency and data-driven decision-making.', outcome: 'Control', type: 'Guide', version: 'v1.0', lastUpdated: new Date(), downloadUrl: 'https://operiva.com/downloads/o4.pdf', fileType: 'PDF', isPremium: true },
  { id: 'o5', title: 'Quality Control Checklist', description: 'A simple checklist for maintaining consistent product/service quality.', outcome: 'Control', type: 'Checklist', version: 'v1.0', lastUpdated: new Date(), downloadUrl: 'https://operiva.com/downloads/o5.pdf', fileType: 'PDF', isPremium: false },

  // HUMAN CAPITAL & LEADERSHIP (Focus: Owner-Manager Bottleneck, Talent)
  { id: 'h1', title: 'Owner-Manager Skills Self-Assessment', description: 'A maturity model for the owner-manager to identify gaps in strategic planning, financial literacy, and leadership.', outcome: 'Human Capital', type: 'Checklist', version: 'v1.0', lastUpdated: new Date(), downloadUrl: 'https://operiva.com/downloads/h1.pdf', fileType: 'PDF', isPremium: false },
  { id: 'h2', title: 'Employee Onboarding Checklist', description: 'A template to standardize the process of attracting and retaining competent talent.', outcome: 'Human Capital', type: 'Checklist', version: 'v1.0', lastUpdated: new Date(), downloadUrl: 'https://operiva.com/downloads/h2.docx', fileType: 'DOCX', isPremium: false },
  { id: 'h3', title: 'Basic Performance Review Template', description: 'A simple template for conducting effective performance reviews and development planning.', outcome: 'Human Capital', type: 'Template', version: 'v1.0', lastUpdated: new Date(), downloadUrl: 'https://operiva.com/downloads/h3.docx', fileType: 'DOCX', isPremium: true },
  { id: 'h4', title: 'Delegation and Time Management Guide', description: 'A guide for owner-managers to free up time from day-to-day tasks for strategic activities.', outcome: 'Human Capital', type: 'Guide', version: 'v1.0', lastUpdated: new Date(), downloadUrl: 'https://operiva.com/downloads/h4.pdf', fileType: 'PDF', isPremium: true },
  { id: 'h5', title: 'Succession Planning Framework', description: 'A framework for micro-enterprises to plan for the long-term viability beyond the current owner-manager.', outcome: 'Human Capital', type: 'Guide', version: 'v1.0', lastUpdated: new Date(), downloadUrl: 'https://operiva.com/downloads/h5.pdf', fileType: 'PDF', isPremium: true },

  // BUSINESS STRATEGY & PLANNING (Focus: Strategic Frameworks, Business Model Design)
  { id: 's1', title: 'Business Model Canvas (SA Edition)', description: 'The flagship strategic planning tool adapted for South African SMMEs, with local examples and a step-by-step guide to design and validate your business model.', outcome: 'Strategy', type: 'Template', version: 'v1.0', lastUpdated: new Date(), downloadUrl: 'https://operiva.com/downloads/s1.pdf', fileType: 'PDF', isPremium: false },
  { id: 's2', title: 'SWOT Analysis Template', description: 'A structured template to assess your Strengths, Weaknesses, Opportunities, and Threats in the current market environment.', outcome: 'Strategy', type: 'Template', version: 'v1.0', lastUpdated: new Date(), downloadUrl: 'https://operiva.com/downloads/s2.docx', fileType: 'DOCX', isPremium: false },
  { id: 's3', title: 'Annual Strategic Planning Guide', description: 'A comprehensive guide to facilitate your annual strategic planning session, with worksheets and facilitation tips.', outcome: 'Strategy', type: 'Guide', version: 'v1.0', lastUpdated: new Date(), downloadUrl: 'https://operiva.com/downloads/s3.pdf', fileType: 'PDF', isPremium: true },
  { id: 's4', title: 'Competitive Analysis Framework', description: 'A template to map your competitors and identify your unique competitive advantage.', outcome: 'Strategy', type: 'Template', version: 'v1.0', lastUpdated: new Date(), downloadUrl: 'https://operiva.com/downloads/s4.xlsx', fileType: 'XLSX', isPremium: true },
  { id: 's5', title: 'Market Entry Playbook', description: 'A step-by-step playbook for entering a new market segment or geographic area.', outcome: 'Strategy', type: 'Guide', version: 'v1.0', lastUpdated: new Date(), downloadUrl: 'https://operiva.com/downloads/s5.pdf', fileType: 'PDF', isPremium: true },
];

// --- TRACKS (Expanded and linked to new artifacts) ---
const tracks = [
  // CASH ACCELERATION TRACKS
  { id: 't1', title: 'Reduce DSO in 30 Days', description: 'A 7-step guided track to improve your Days Sales Outstanding metric and secure liquidity.', outcome: 'Cash', durationMinutes: 90, artifactIds: ['a1', 'a2', 'a3', 'a4'], isPremium: true },
  { id: 't2', title: 'Funding Readiness Kickstart', description: 'A quick 60-minute track to prepare your financials for a loan application.', outcome: 'Cash', durationMinutes: 60, artifactIds: ['a3', 'a4', 'a5'], isPremium: false },
  { id: 't3', title: 'Strategic Cost Control', description: 'A 4-step track to audit and reduce operational costs to protect margins against inflation.', outcome: 'Cash', durationMinutes: 45, artifactIds: ['a5'], isPremium: true },

  // COMPLIANCE & GOVERNANCE TRACKS
  { id: 't4', title: 'POPIA Quick Compliance', description: 'A 5-step track to implement the essential POPIA policies and avoid data protection fines.', outcome: 'Compliance', durationMinutes: 120, artifactIds: ['c1'], isPremium: true },
  { id: 't5', title: 'SARS Filing Confidence', description: 'A 3-step track to use the Tax Filing Calendar and ensure all provisional tax and VAT deadlines are met.', outcome: 'Compliance', durationMinutes: 45, artifactIds: ['c2'], isPremium: false },
  { id: 't6', title: 'Basic Risk Mitigation', description: 'A 4-step track to identify and mitigate the top 5 risks facing your SMME.', outcome: 'Compliance', durationMinutes: 60, artifactIds: ['c3'], isPremium: false },

  // CUSTOMERS & GROWTH TRACKS
  { id: 't7', title: 'Digital Presence Kickoff', description: 'A 6-step track to define your value proposition and launch your first digital marketing campaign.', outcome: 'Customers', durationMinutes: 180, artifactIds: ['g1', 'g2', 'g3'], isPremium: true },
  { id: 't8', title: 'Sales Pitch Refinement', description: 'A 3-step track to build a compelling sales pitch deck and close more deals.', outcome: 'Customers', durationMinutes: 90, artifactIds: ['g4'], isPremium: true },

  // OPERATIONS & CONTROL TRACKS
  { id: 't9', title: 'Load Shedding Resilience Plan', description: 'A 5-step track to implement a business continuity plan and minimize power outage disruption.', outcome: 'Control', durationMinutes: 75, artifactIds: ['o1'], isPremium: false },
  { id: 't10', title: 'Supply Chain Health Check', description: 'A 4-step track to audit your inventory and supplier management processes.', outcome: 'Control', durationMinutes: 60, artifactIds: ['o2', 'o3'], isPremium: true },

  // HUMAN CAPITAL & LEADERSHIP TRACKS
  { id: 't11', title: 'Owner-Manager Development Plan', description: 'A 7-step track to assess your leadership skills and create a personal development roadmap.', outcome: 'Human Capital', durationMinutes: 120, artifactIds: ['h1', 'h4'], isPremium: false },
  { id: 't12', title: 'Talent Retention Quickstart', description: 'A 3-step track to improve employee onboarding and performance management.', outcome: 'Human Capital', durationMinutes: 60, artifactIds: ['h2', 'h3'], isPremium: true },

  // BUSINESS STRATEGY & PLANNING TRACKS
  { id: 't13', title: 'Business Model Design Sprint', description: 'A 90-minute guided track to complete your Business Model Canvas and validate your core assumptions.', outcome: 'Strategy', durationMinutes: 90, artifactIds: ['s1', 's2'], isPremium: false },
  { id: 't14', title: 'Annual Strategy Refresh', description: 'A comprehensive 3-hour track to conduct your annual strategic planning session using the SWOT and competitive analysis frameworks.', outcome: 'Strategy', durationMinutes: 180, artifactIds: ['s2', 's3', 's4'], isPremium: true },
];

// --- 3. SEEDING FUNCTION ---
async function seedDatabase() {
  console.log('Starting Comprehensive Firestore Seeding...');

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

    console.log('Comprehensive Firestore Seeding Complete!');
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