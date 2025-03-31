// src/hooks/useVisitorAnalytics.tsx
import { useState, useEffect } from 'react';
import { trackVisitor, getVisitorCount, trackPageView } from '@/lib/firebase';

export function useVisitorAnalytics(pageName: string) {
  const [visitorCount, setVisitorCount] = useState<number>(0);
  const [pageViews, setPageViews] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  // Track unique visitors and page views
  useEffect(() => {
    const trackAnalytics = async () => {
      try {
        // First get the current count to display immediately
        const currentCount = await getVisitorCount();
        setVisitorCount(currentCount);
        
        // Track unique visitors only once per session
        if (!sessionStorage.getItem('visited')) {
          sessionStorage.setItem('visited', 'true');
          const newCount = await trackVisitor(pageName);
          setVisitorCount(newCount);
        } else {
          // Track page view without incrementing visitor count
          const newViews = await trackPageView(pageName);
          setPageViews(newViews);
        }
        
        setLoading(false);
      } catch (err) {
        console.error('Error tracking analytics:', err);
        setError(err instanceof Error ? err : new Error('Failed to track analytics'));
        setLoading(false);
      }
    };

    trackAnalytics();
  }, [pageName]);

  return { visitorCount, pageViews, loading, error };
}