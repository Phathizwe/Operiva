import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Import web-vitals functions that are available in v5.1.0
import { onCLS, onFCP, onLCP, onINP, onTTFB } from 'web-vitals';

// Report web vitals performance metrics
const reportPerformanceMetrics = (metric: any) => {
  // During development, log to console
  if (import.meta.env.DEV) {
    console.log(metric);
  }
  
  // In production, you could send to an analytics endpoint
  if (import.meta.env.PROD) {
    // Example: Send to your analytics service
    // analytics.track('Web Vitals', metric);
    
    // Or send to a custom endpoint
    // const body = JSON.stringify(metric);
    // navigator.sendBeacon('/api/performance', body);
  }
};

// Measure and report web vitals using the correct API for v5.1.0
// Note: onFID is replaced by onINP in newer versions
onCLS(reportPerformanceMetrics);
onFCP(reportPerformanceMetrics);
onLCP(reportPerformanceMetrics);
onINP(reportPerformanceMetrics); // Using onINP instead of onFID
onTTFB(reportPerformanceMetrics);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)