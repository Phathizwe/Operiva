// src/types/index.ts

// User related types
export interface User {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  role?: 'user' | 'admin';
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