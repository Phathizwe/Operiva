console.log('[Operiva] main.tsx loading...');
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
console.log('[Operiva] imports loaded successfully');

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

console.log('[Operiva] About to create root and render...');
const rootElement = document.getElementById('root');
console.log('[Operiva] Root element:', rootElement);

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
  console.log('[Operiva] React app rendered successfully');
} else {
  console.error('[Operiva] Root element not found!');
}