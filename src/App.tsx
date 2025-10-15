// src/App.tsx
import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import MainLayout from './layouts/MainLayout';

// Lazy load pages for code splitting
const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const Signup = lazy(() => import('./pages/Signup'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Libraries = lazy(() => import('./pages/Libraries'));
const LibraryDetail = lazy(() => import('./pages/LibraryDetail'));
const ArtifactDetail = lazy(() => import('./pages/ArtifactDetail'));
const TrackDetail = lazy(() => import('./pages/TrackDetail'));
const Pricing = lazy(() => import('./pages/Pricing'));
const ExpertCouncil = lazy(() => import('./pages/ExpertCouncil'));
const Tracks = lazy(() => import('./pages/Tracks'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-operiva-blue"></div>
  </div>
);

function App() {
  return (
    <AuthProvider>
      <Router>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Home />} />
            <Route path="/libraries" element={<MainLayout><Libraries /></MainLayout>} />
            <Route path="/libraries/:outcome" element={<MainLayout><LibraryDetail /></MainLayout>} />
            <Route path="/artifacts/:id" element={<MainLayout><ArtifactDetail /></MainLayout>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            
            {/* Protected routes */}
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute>
                  <MainLayout>
                    <Dashboard />
                  </MainLayout>
                </ProtectedRoute>
              } 
            />
            
            {/* Redirect to home if path is empty */}
            <Route path="/features" element={<Navigate to="/libraries" replace />} />
            <Route path="/pricing" element={<MainLayout><Pricing /></MainLayout>} />
            <Route path="/changelog" element={<MainLayout><div>Changelog Page Placeholder</div></MainLayout>} />
            <Route path="/about" element={<MainLayout><div>About Page Placeholder</div></MainLayout>} />
            <Route path="/expert-council" element={<MainLayout><ExpertCouncil /></MainLayout>} />
            <Route path="/packs" element={<MainLayout><div>Packs Marketplace Placeholder</div></MainLayout>} />
            <Route path="/tracks" element={<MainLayout><Tracks /></MainLayout>} />
            <Route path="/tracks/:id" element={<MainLayout><TrackDetail /></MainLayout>} />
            <Route path="/profile" element={<MainLayout><div>Profile Page Placeholder</div></MainLayout>} />
            <Route path="/settings" element={<MainLayout><div>Settings Page Placeholder</div></MainLayout>} />
            
            {/* Redirect to home if path is empty */}
            <Route path="" element={<Navigate to="/" replace />} />
            
            {/* 404 page */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </AuthProvider>
  );
}

export default App;