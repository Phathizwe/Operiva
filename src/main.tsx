import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Import web-vitals properly using the correct API
import('web-vitals').then((vitals) => {
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

  // Use the correct methods from web-vitals
  // The API changed in newer versions
  if (typeof vitals.getCLS === 'function') {
    vitals.getCLS(reportPerformanceMetrics);
    vitals.getFID(reportPerformanceMetrics);
    vitals.getFCP(reportPerformanceMetrics);
    vitals.getLCP(reportPerformanceMetrics);
    vitals.getTTFB(reportPerformanceMetrics);
  } else {
    // For newer versions of web-vitals that use a different API
    vitals.onCLS(reportPerformanceMetrics);
    vitals.onFCP(reportPerformanceMetrics);
    vitals.onLCP(reportPerformanceMetrics);
    vitals.onTTFB(reportPerformanceMetrics);
    // Note: FID might be renamed or have a different method in newer versions
    // Check what's available in the vitals object
    if (typeof vitals.onFID === 'function') {
      vitals.onFID(reportPerformanceMetrics);
    } else if (typeof vitals.onINP === 'function') {
      // INP is the newer replacement for FID in some cases
      vitals.onINP(reportPerformanceMetrics);
    }
  }
}).catch(err => console.error('Error loading web-vitals:', err));

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)