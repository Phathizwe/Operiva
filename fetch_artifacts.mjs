// Quick script to fetch all artifacts from Firestore
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDoMzNkoExcI56i4-iuceuBZenR5fm_700",
  authDomain: "operiva.firebaseapp.com",
  projectId: "operiva",
  storageBucket: "operiva.firebasestorage.app",
  messagingSenderId: "912828891467",
  appId: "1:912828891467:web:cbe9771fe33f4c9429e8ce"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function fetchArtifacts() {
  try {
    const querySnapshot = await getDocs(collection(db, 'artifacts'));
    const artifacts = [];
    
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      artifacts.push({
        id: doc.id,
        title: data.title,
        outcome: data.outcome,
        type: data.type,
        downloadUrl: data.downloadUrl,
        isPremium: data.isPremium || false
      });
    });
    
    console.log(JSON.stringify(artifacts, null, 2));
    process.exit(0);
  } catch (error) {
    console.error('Error fetching artifacts:', error);
    process.exit(1);
  }
}

fetchArtifacts();

