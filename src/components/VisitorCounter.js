// src/components/VisitorCounter.js
import React from 'react';
import { useVisitorAnalytics } from '@/hooks/useVisitorAnalytics';

export default function VisitorCounter({ pageName, className = '' }) {
  const { visitorCount, loading, error } = useVisitorAnalytics(pageName);

  if (loading) {
    return (
      <div className={`flex items-center ${className}`}>
        <p className="text-lg">
          Visitors: <span className="animate-pulse">...</span>
        </p>
      </div>
    );
  }

  if (error) {
    // Return a fallback count that doesn't show the error to users
    return (
      <div className={`flex items-center ${className}`}>
        <p className="text-lg">
          Visitors: <span>—</span>
        </p>
      </div>
    );
  }

  return (
    <div className={`flex items-center ${className}`}>
      <p className="text-lg">
        Visitors: <span className="font-bold">{visitorCount.toLocaleString()}</span>
      </p>
    </div>
  );
}