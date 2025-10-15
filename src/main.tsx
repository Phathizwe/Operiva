import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Import only the functions that are actually exported from web-vitals
import { onCLS, onFCP, onLCP, onTTFB, onINP } from 'web-vitals';

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

// Use the web-vitals functions directly
onCLS(reportPerformanceMetrics);
// onFID is not available in this version, using onINP instead
// (Interaction to Next Paint is the newer metric replacing FID)
onINP(reportPerformanceMetrics);
onFCP(reportPerformanceMetrics);
onLCP(reportPerformanceMetrics);
onTTFB(reportPerformanceMetrics);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)