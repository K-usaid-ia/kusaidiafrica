import React from 'react';
import { useVisitorAnalytics } from '@/hooks/useVisitorAnalytics';

interface VisitorCounterProps {
  pageName: string;
  className?: string;
}

export const VisitorCounter: React.FC<VisitorCounterProps> = ({ 
  pageName, 
  className = '' 
}) => {
  const { visitorCount, loading, error } = useVisitorAnalytics(pageName);
  
  const containerClasses = `flex items-center ${className}`.trim();
  
  if (loading) {
    return (
      <div className={containerClasses}>
        <div className="text-lg">
          Visitors: <span className="animate-pulse inline-block min-w-6 text-center">...</span>
        </div>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className={containerClasses}>
        <div className="text-lg">
          Visitors: <span className="text-gray-500 inline-block min-w-6 text-center">—</span>
        </div>
      </div>
    );
  }
  
  return (
    <div className={containerClasses}>
      <div className="text-lg">
        Visitors: <span className="font-bold inline-block min-w-6 text-center">{visitorCount.toLocaleString()}</span>
      </div>
    </div>
  );
};

export default VisitorCounter;