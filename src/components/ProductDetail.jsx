import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { products } from '../data/ProductStats.jsx';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    const foundProduct = products.find(p => p.id === parseInt(id));
    if (foundProduct) {
      setProduct(foundProduct);
    }
  }, [id]);

  useEffect(() => {
    if (product && product.images.length > 1) {
      const interval = setInterval(() => {
        setSelectedImageIndex((prevIndex) =>
          (prevIndex + 1) % product.images.length
        );
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [product]);

  // Filter out the current product from the list for "You might also like"
  const recommendedProducts = product ? products.filter(p => p.id !== product.id) : [];

  useEffect(() => {
    const checkScroll = () => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
      }
    };

    if (scrollRef.current) {
      scrollRef.current.addEventListener('scroll', checkScroll);
      checkScroll(); // Initial check
    }

    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener('scroll', checkScroll);
      }
    };
  }, [recommendedProducts]);

  if (!product) {
    return <div className="product-not-found">Product not found</div>;
  }

  const handleAddToCart = () => {
    if (product.stock !== 'yes') return; // Prevent adding out of stock items
    addToCart(product, quantity);
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

  const scrollRight = () => {
    if (scrollRef.current) {
      const maxScrollLeft = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
      const newScrollLeft = Math.min(scrollRef.current.scrollLeft + 200, maxScrollLeft);
      scrollRef.current.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      const newScrollLeft = Math.max(scrollRef.current.scrollLeft - 200, 0);
      scrollRef.current.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
    }
  };

  return (
    <div className="product-detail-container">
      <div className="product-detail">
        <div className="product-images-section">
          <div className="main-image-container">
            <img 
              src={product.images[selectedImageIndex]} 
              alt={product.name} 
              className="main-product-image"
            />
          </div>
          
          <div className="thumbnail-images">
            {product.images.map((image, index) => (
              <img 
                key={index}
                src={image} 
                alt={`${product.name} ${index + 1}`}
                className={`thumbnail ${index === selectedImageIndex ? 'active' : ''}`}
                onClick={() => handleImageClick(index)}
              />
            ))}
          </div>

          <button
            className="add-to-cart-btn-large"
            disabled={product.stock !== 'yes'}
            onClick={handleAddToCart}
          >
            {product.stock === 'yes' ? 'Add to Cart' : 'Out of Stock'}
          </button>
        </div>

        <div className="product-info-section">
          <h1 className="product-title">{product.name}</h1>

          <div className="product-stock">
            <span className={`stock ${product.stock === 'yes' ? 'in-stock' : 'out-of-stock'}`}>
              {product.stock === 'yes' ? 'In Stock' : 'Out of Stock'}
            </span>
          </div>

          <div className="product-price-section">
            <span className="current-price">${product.price}</span>
            <span className="original-price">${product.originalPrice}</span>
            <span className="discount">Save ${(product.originalPrice - product.price).toFixed(2)}</span>
          </div>

          <div className="product-description">
            <h3>Description</h3>
            <p>{product.description}</p>
          </div>

          <div className="product-features">
            <h3>Features</h3>
            <ul>
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
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

      {/* You might also like section */}
      <div className="you-might-also-like">
        <h2>Products You Might Also Like</h2>
        <div className="recommended-products-container">
          <button className="scroll-arrow left" onClick={scrollLeft} style={{ opacity: canScrollLeft ? 1 : 0 }} aria-label="Scroll left">{'<'}</button>
          <div className="recommended-products" ref={scrollRef}>
            {recommendedProducts.map((recProduct) => (
              <Link to={`/product/${recProduct.id}`} key={recProduct.id} className="recommended-product-card" onClick={() => window.scrollTo(0, 0)}>
                <img src={recProduct.image} alt={recProduct.name} className="recommended-product-image" />
                <div className="recommended-product-info">
                  <p className="recommended-product-name">{recProduct.name}</p>
                  <div className="recommended-product-prices">
                    <p className="recommended-product-price">${recProduct.price}</p>
                    <p className="recommended-product-original-price">${recProduct.originalPrice}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <button className="scroll-arrow right" onClick={scrollRight} style={{ opacity: canScrollRight ? 1 : 0 }} aria-label="Scroll right">{'>'}</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
