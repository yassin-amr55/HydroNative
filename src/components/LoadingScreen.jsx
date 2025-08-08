import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './LoadingScreen.css';

const LoadingScreen = ({ onLoadComplete }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Function to check if all images are loaded
    const checkImagesLoaded = () => {
      const images = document.querySelectorAll('img');
      const totalImages = images.length;
      let loadedImages = 0;

      if (totalImages === 0) {
        setIsLoading(false);
        return;
      }

      const handleImageLoad = () => {
        loadedImages++;
        if (loadedImages === totalImages) {
          setIsLoading(false);
        }
      };

      images.forEach(img => {
        if (img.complete) {
          loadedImages++;
          if (loadedImages === totalImages) {
            setIsLoading(false);
          }
        } else {
          img.addEventListener('load', handleImageLoad);
          img.addEventListener('error', handleImageLoad); // Also count errors as loaded
        }
      });

      // If all images are already loaded
      if (loadedImages === totalImages) {
        setIsLoading(false);
      }
    };

    // Check images after a small delay to ensure DOM is ready
    const timer = setTimeout(checkImagesLoaded, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (isLoading) {
      document.body.classList.add('loading');
    } else {
      document.body.classList.remove('loading');
    }

    if (!isLoading) {
      // Add a small delay for smooth transition
      const timer = setTimeout(() => {
        onLoadComplete();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isLoading, onLoadComplete]);

  if (!isLoading) return null;

  return (
    <div className="loading-screen">
      <div className="loading-content">
        <img 
          src="/src/assets/loader.gif" 
          alt="Loading..." 
          className="loading-gif"
        />
        <p>Loading HydroNative...</p>
      </div>
    </div>
  );
};

LoadingScreen.propTypes = {
  onLoadComplete: PropTypes.func.isRequired,
};

export default LoadingScreen;
