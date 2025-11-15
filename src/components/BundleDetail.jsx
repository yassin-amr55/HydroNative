import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { bundles } from '../data/BundleStats.jsx';
import './BundleDetail.css';

const BundleDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [bundle, setBundle] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const foundBundle = bundles.find(b => b.id === parseInt(id));
    if (foundBundle) {
      setBundle(foundBundle);
    }
  }, [id]);

  useEffect(() => {
    if (bundle && bundle.images.length > 1) {
      const interval = setInterval(() => {
        setSelectedImageIndex((prevIndex) =>
          (prevIndex + 1) % bundle.images.length
        );
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [bundle]);

  if (!bundle) {
    return <div className="bundle-not-found">Bundle not found</div>;
  }

  const handleAddToCart = () => {
    if (bundle.stock !== 'yes') return; // Prevent adding out of stock items
    addToCart(bundle, quantity);
    const button = event.target;
    const originalText = button.textContent;
    button.textContent = 'Added!';
    button.style.background = 'var(--green-hover)';
    setTimeout(() => {
      button.textContent = originalText;
      button.style.background = '';
    }, 1000);
  };

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  return (
    <div className="bundle-detail-container">
      <div className="bundle-detail">
        <div className="bundle-images-section">
          <div className="main-image-container">
            <img
              src={bundle.images[selectedImageIndex]}
              alt={bundle.name}
              className="main-bundle-image"
            />
          </div>

          <div className="thumbnail-images">
            {bundle.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${bundle.name} ${index + 1}`}
                className={`thumbnail ${index === selectedImageIndex ? 'active' : ''}`}
                onClick={() => handleImageClick(index)}
              />
            ))}
          </div>

          <button
            className="add-to-cart-btn-large"
            disabled={bundle.stock !== 'yes'}
            onClick={handleAddToCart}
          >
            {bundle.stock === 'yes' ? 'Add to Cart' : 'Out of Stock'}
          </button>
        </div>

        <div className="bundle-info-section">
          <h1 className="bundle-title">{bundle.name}</h1>

          <div className="bundle-stock">
            <span className={`stock ${bundle.stock === 'yes' ? 'in-stock' : 'out-of-stock'}`}>
              {bundle.stock === 'yes' ? 'In Stock' : 'Out of Stock'}
            </span>
          </div>

          <div className="bundle-price-section">
            <span className="current-price">${bundle.price}</span>
            <span className="original-price">${bundle.originalPrice}</span>
            <span className="discount">Save ${(bundle.originalPrice - bundle.price).toFixed(2)}</span>
          </div>

          <div className="bundle-description">
            <h3>Description</h3>
            <p>{bundle.description}</p>
            {bundle.longDescription && (
              <p className="long-description">{bundle.longDescription}</p>
            )}
          </div>

          {bundle.benefits && bundle.benefits.length > 0 && (
            <div className="bundle-benefits-highlight">
              <h3>Bundle Savings</h3>
              <div className="savings-grid">
                <div className="savings-item">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="1" x2="12" y2="23"></line>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                  <span>Save 20% vs buying separately</span>
                </div>
                <div className="savings-item">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="1" y="3" width="15" height="13"></rect>
                    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                    <circle cx="5.5" cy="18.5" r="2.5"></circle>
                    <circle cx="18.5" cy="18.5" r="2.5"></circle>
                  </svg>
                  <span>Free shipping included</span>
                </div>
              </div>
            </div>
          )}

          <div className="bundle-contents">
            <h3>What's Included:</h3>
            <ul className='bundle-ul-two'>
              {bundle.contents.map(item => (
                <li key={item.id} className="bundle-item">
                  <img src={item.image} alt={item.name} className="bundle-item-image" />
                  <span className="bundle-item-name">{item.name}</span>
                  <span className="bundle-item-price">
                    <span className="current-price">${item.price}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="quantity-selector">
            <label>Quantity:</label>
            <input
              type="number"
              min="1"
              max="10"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BundleDetail;
