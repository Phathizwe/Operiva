// src/config/firebase.ts
import { initializeApp } from "firebase/app";
// Import analytics only when needed
import { getAnalytics, isSupported } from "firebase/analytics";
// Only import the auth module, not the entire package
import { getAuth } from "firebase/auth";
// Only import the firestore module, not the entire package
import { getFirestore } from "firebase/firestore";
// Only import the storage module, not the entire package
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// Note: These are public API keys and are safe to expose in client-side code
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyDoMzNkoExcI56i4-iuceuBZenR5fm_700",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "operiva.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "operiva",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "operiva.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "912828891467",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:912828891467:web:cbe9771fe33f4c9429e8ce",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-72K44QVDXX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services lazily
// Only initialize analytics if it's supported in the current environment
const analytics = async () => {
  if (await isSupported()) {
    return getAnalytics(app);
  }
  return null;
};

// Initialize other services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, analytics, auth, db, storage };

