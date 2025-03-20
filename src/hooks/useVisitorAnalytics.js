// src/hooks/useVisitorAnalytics.js
import { useState, useEffect } from 'react';
import { trackVisitor, getVisitorCount } from '@/lib/firebase';

export function useVisitorAnalytics(pageName) {
  const [visitorCount, setVisitorCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const trackPageVisit = async () => {
      try {
        // First get the current count to display immediately
        const currentCount = await getVisitorCount();
        setVisitorCount(currentCount);
        
        // Then track the visit and update the count
        const newCount = await trackVisitor(pageName);
        setVisitorCount(newCount);
        setLoading(false);
      } catch (err) {
        console.error('Error tracking visitor:', err);
        setError(err);
        setLoading(false);
      }
    };

    trackPageVisit();
  }, [pageName]);

  return { visitorCount, loading, error };
}