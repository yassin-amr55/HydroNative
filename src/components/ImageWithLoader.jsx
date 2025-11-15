import { useState } from 'react';
import './ImageWithLoader.css';

const ImageWithLoader = ({ src, alt, className = '', onLoad }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
    if (onLoad) onLoad();
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div className={`image-loader-container ${className}`}>
      {isLoading && (
        <div className="image-loader-placeholder">
          <div className="image-loader-spinner"></div>
        </div>
      )}
      {hasError ? (
        <div className="image-loader-error">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <circle cx="8.5" cy="8.5" r="1.5"></circle>
            <polyline points="21 15 16 10 5 21"></polyline>
          </svg>
          <span>Image unavailable</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          className={`image-loader-img ${isLoading ? 'loading' : 'loaded'}`}
          onLoad={handleLoad}
          onError={handleError}
        />
      )}
    </div>
  );
};

export default ImageWithLoader;
