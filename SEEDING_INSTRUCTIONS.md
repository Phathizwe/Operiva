# Operiva Firestore Seeding Instructions

This guide explains how to use the provided `scripts/seed.js` file to populate your Firebase Firestore database with the initial content metadata (Libraries, Artifacts, and Tracks).

## Prerequisites

1.  **Node.js:** Ensure you have Node.js installed on your local machine (version 16+ recommended).
2.  **Firebase Project:** You must have an active Firebase project for Operiva.
3.  **Service Account Key:** You need to download your Firebase Service Account Key.

## Step 1: Download Service Account Key

1.  Go to your **Firebase Console**.
2.  Navigate to **Project settings** (the gear icon next to "Project Overview").
3.  Go to the **Service accounts** tab.
4.  Click **Generate new private key**. This will download a JSON file (e.g., `operiva-firebase-adminsdk-xxxxx.json`).
5.  **Place this file** inside your local `Operiva` project folder. For security, you should place it outside the public web directory, e.g., in a new folder named `config`.

## Step 2: Install Dependencies

You need the Firebase Admin SDK to run the script.

1.  Open your terminal and navigate to the root of your `Operiva` project.
2.  Install the required package:

    ```bash
    npm install firebase-admin
    ```

## Step 3: Update the Script Path

1.  Open the `scripts/seed.js` file.
2.  **Crucially, update the path** to your Service Account Key file in the script:

    ```javascript
    // scripts/seed.js (Line 7)
    // IMPORTANT: Replace this with the path to your downloaded service account key file.
    const serviceAccount = require('../config/operiva-firebase-adminsdk-xxxxx.json'); 
    // ^^^ Update this path to match where you saved your JSON file.
    ```

## Step 4: Run the Seeding Script

1.  In your terminal, run the script using Node.js:

    ```bash
    node scripts/seed.js
    ```

2.  **Verify:** Check your Firebase Firestore console. You should see three new collections: `libraries`, `artifacts`, and `tracks`, populated with the initial data.

Once you have successfully seeded your database, we can proceed to the next phase: **Implementing Live Firestore Data Fetching in Pages.**
