// src/types/index.ts

// User related types
export type MembershipStatus = 'Free' | 'Core' | 'Pro' | 'None';

export interface User {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  role?: 'user' | 'admin';
  membershipStatus: MembershipStatus;
}

// Authentication related types
export interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

// For protected routes
export interface ProtectedRouteProps {
  children: React.ReactNode;
}

// Add more types as needed for your SaaS application

// Operiva Content Model Types

// 1. Core Outcomes (Libraries)
export type Outcome = 'Cash' | 'Compliance' | 'Customers' | 'Control' | 'Human Capital';

// 2. Artifact Types
export type ArtifactType = 'Template' | 'Checklist' | 'SOP' | 'Calculator' | 'Guide' | 'Research';

// 3. Artifact (The Digital Product)
export interface Artifact {
  id: string;
  title: string;
  description: string;
  outcome: Outcome;
  type: ArtifactType;
  sector?: string; // e.g., 'Retail/Spaza', 'Trades'
  version: string;
  lastUpdated: Date;
  downloadUrl: string; // Signed URL for the file
  fileType: 'DOCX' | 'XLSX' | 'PDF' | 'GDoc' | 'GSheet';
  expertReviewerId?: string; // Link to an Expert document
  isPremium: boolean; // For Pro membership or Packs
}

// 4. Track (The Guided Sequence)
export interface Track {
  id: string;
  title: string;
  description: string;
  outcome: Outcome;
  durationMinutes: number; // e.g., 60-90 minutes
  artifactIds: string[]; // List of Artifact IDs in the sequence
  isPremium: boolean;
}

// 5. Library (Collection of Artifacts/Tracks)
export interface Library {
  id: string;
  outcome: Outcome;
  title: string;
  description: string;
  artifactCount: number;
  trackCount: number;
}

