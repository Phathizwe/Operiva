import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Import web-vitals using dynamic imports instead
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

// Measure and report web vitals
if (typeof vitals.getCLS === 'function') vitals.getCLS(reportPerformanceMetrics);
if (typeof vitals.getFID === 'function') vitals.getFID(reportPerformanceMetrics);
if (typeof vitals.getFCP === 'function') vitals.getFCP(reportPerformanceMetrics);
if (typeof vitals.getLCP === 'function') vitals.getLCP(reportPerformanceMetrics);
if (typeof vitals.getTTFB === 'function') vitals.getTTFB(reportPerformanceMetrics);
}).catch(err => console.error('Error loading web-vitals:', err));

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
