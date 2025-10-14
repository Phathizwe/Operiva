import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Import web-vitals using dynamic imports instead
import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
// Report web vitals performance metrics
// You can send these to your analytics service or log them during development
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
getCLS(reportPerformanceMetrics);
getFID(reportPerformanceMetrics);
getFCP(reportPerformanceMetrics);
getLCP(reportPerformanceMetrics);
getTTFB(reportPerformanceMetrics);
}).catch(err => console.error('Error loading web-vitals:', err));

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)