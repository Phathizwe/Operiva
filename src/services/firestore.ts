// src/services/firestore.ts
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
  limit,
  CollectionReference,
  Query,
} from 'firebase/firestore';
import type { DocumentData } from 'firebase/firestore';
import { db } from '../config/firebase';
import type { Artifact, Track, Library, Outcome } from '../types';

// Helper function to create a typed collection reference
const createCollection = <T = DocumentData>(collectionName: string) => {
  return collection(db, collectionName) as CollectionReference<T>;
};

// Typed collection references
const artifactsCol = createCollection<Artifact>('artifacts');
const tracksCol = createCollection<Track>('tracks');
const librariesCol = createCollection<Library>('libraries');

// --- Libraries Operations ---

/**
 * Fetches all core libraries (Cash, Compliance, Customers, Control, Capital).
 * @returns A promise that resolves to an array of Library objects.
 */
export const getLibraries = async (): Promise<Library[]> => {
  const snapshot = await getDocs(librariesCol);
  return snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
};

// --- Artifacts Operations ---

/**
 * Fetches a single artifact by its ID.
 * @param id The ID of the artifact.
 * @returns A promise that resolves to the Artifact object or null.
 */
export const getArtifact = async (id: string): Promise<Artifact | null> => {
  const docRef = doc(artifactsCol, id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return { ...docSnap.data(), id: docSnap.id };
  }
  return null;
};

/**
 * Fetches a limited number of premium artifacts for the homepage.
 * @param count The number of artifacts to fetch.
 * @returns A promise that resolves to an array of Artifact objects.
 */
export const getFeaturedArtifacts = async (count: number = 4): Promise<Artifact[]> => {
  const q = query(artifactsCol, where('isPremium', '==', true), limit(count));
  const snapshot = await getDocs(q as Query<Artifact>);
  return snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
};

/**
 * Fetches artifacts filtered by a specific outcome.
 * @param outcome The core outcome to filter by.
 * @returns A promise that resolves to an array of Artifact objects.
 */
export const getArtifactsByOutcome = async (outcome: Outcome): Promise<Artifact[]> => {
  const q = query(artifactsCol, where('outcome', '==', outcome));
  const snapshot = await getDocs(q as Query<Artifact>);
  return snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
};

// --- Tracks Operations ---
	
/**
 * Fetches a single track by its ID.
 * @param id The ID of the track.
 * @returns A promise that resolves to the Track object or null.
 */
export const getTrack = async (id: string): Promise<Track | null> => {
  const docRef = doc(tracksCol, id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return { ...docSnap.data(), id: docSnap.id };
  }
  return null;
};

/**
 * Fetches all available tracks.
 * @returns A promise that resolves to an array of Track objects.
 */
export const getAllTracks = async (): Promise<Track[]> => {
  const snapshot = await getDocs(tracksCol);
  return snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
};

/**
 * Fetches tracks filtered by a specific outcome.
 * @param outcome The core outcome to filter by.
 * @returns A promise that resolves to an array of Track objects.
 */
export const getTracksByOutcome = async (outcome: Outcome): Promise<Track[]> => {
  const q = query(tracksCol, where('outcome', '==', outcome));
  const snapshot = await getDocs(q as Query<Track>);
  return snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
};

/**
 * Fetches a limited number of featured tracks for the homepage.
 * @param count The number of tracks to fetch.
 * @returns A promise that resolves to an array of Track objects.
 */
export const getFeaturedTracks = async (count: number = 3): Promise<Track[]> => {
  // Assuming 'isFeatured' field will be added to Track documents for selection
  const q = query(tracksCol, where('isFeatured', '==', true), limit(count));
  const snapshot = await getDocs(q as Query<Track>);
  return snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
};

// Add more service functions as needed (e.g., getPacks, getExperts, userProgress)

// Export the database instance for direct use if necessary
export { db };