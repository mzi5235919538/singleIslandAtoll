/**
 * Web Vitals Monitoring
 * Measures and reports Core Web Vitals and other performance metrics
 */

interface WebVitalsMetric {
  name: string;
  value: number;
  rating?: 'good' | 'needs-improvement' | 'poor';
  delta?: number;
  id: string;
}

function sendToAnalytics(metric: WebVitalsMetric): void {
  // Send to Google Analytics
  if (typeof window !== 'undefined') {
    const gtagFunc = (window as unknown as Record<string, unknown>).gtag;
    if (gtagFunc && typeof gtagFunc === 'function') {
      gtagFunc('event', metric.name, {
        event_category: 'Web Vitals',
        value: Math.round(metric.value),
        event_label: metric.id,
        non_interaction: true,
      });
    }
  }

  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log(`Web Vital [${metric.name}]:`, {
      value: metric.value,
      rating: metric.rating,
      delta: metric.delta,
    });
  }
}

export function reportWebVitals(metric: WebVitalsMetric): void {
  // Report web vitals
  sendToAnalytics(metric);
}

/**
 * Thresholds for Core Web Vitals (Google's recommendations)
 * - LCP (Largest Contentful Paint): < 2.5s (Good)
 * - FID (First Input Delay): < 100ms (Good) [Deprecated, use INP]
 * - CLS (Cumulative Layout Shift): < 0.1 (Good)
 * - INP (Interaction to Next Paint): < 200ms (Good) [Replaces FID]
 * - TTFB (Time to First Byte): < 600ms (Good)
 * - FCP (First Contentful Paint): < 1.8s (Good)
 */

export const VITALS_THRESHOLDS = {
  LCP: {
    good: 2500,
    needsImprovement: 4000,
  },
  FID: {
    good: 100,
    needsImprovement: 300,
  },
  CLS: {
    good: 0.1,
    needsImprovement: 0.25,
  },
  INP: {
    good: 200,
    needsImprovement: 500,
  },
  TTFB: {
    good: 600,
    needsImprovement: 1200,
  },
  FCP: {
    good: 1800,
    needsImprovement: 3000,
  },
};
