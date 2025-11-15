import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './PageTransitionIndicator.css';

const PageTransitionIndicator = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    // Start loading animation when route changes
    setIsLoading(true);
    setProgress(0);

    // Simulate progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) {
          clearInterval(interval);
          return 90;
        }
        return prev + 10;
      });
    }, 100);

    // Complete loading after a short delay
    const timeout = setTimeout(() => {
      setProgress(100);
      setTimeout(() => {
        setIsLoading(false);
        setProgress(0);
      }, 300);
    }, 500);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [location.pathname]);

  if (!isLoading) return null;

  return (
    <div className="page-transition-indicator">
      <div 
        className="page-transition-bar" 
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default PageTransitionIndicator;
