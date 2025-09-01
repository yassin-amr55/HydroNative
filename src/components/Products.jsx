import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useSearch } from '../context/SearchContext';
import loofahImage from '../assets/loofah.png';
import naturalIcon from '../assets/natural.png';
import ecoIcon from '../assets/eco-icon.png';
import bioIcon from '../assets/bio-icon.png';
import { products } from '../data/ProductStats.jsx';
import './Products.css';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { addToCart } = useCart();
  const { searchQuery, searchProducts } = useSearch();

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'bath', name: 'Bath' },
    { id: 'kitchen', name: 'Kitchen' },
    { id: 'pets', name: 'Pets' },
    { id: 'sale', name: 'Sale' },
    { id: 'new', name: 'New&Trending' }
  ];

  // First filter by category
  let filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  // Then filter by search query
  filteredProducts = searchProducts(filteredProducts, searchQuery);

  /*const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={i} className="star filled">★</span>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <span key="half" className="star half">★</span>
      );
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <span key={`empty-${i}`} className="star empty">★</span>
      );
    }

    return stars;
  };*/

  const handleAddToCart = (product) => {
    if (product.stock !== 'yes') return; // Prevent adding out of stock items
    addToCart(product);
    // Optional: Show a brief success message
    const button = event.target;
    const originalText = button.textContent;
    button.textContent = 'Added!';
    button.style.background = 'var(--green-hover)';
    setTimeout(() => {
      button.textContent = originalText;
      button.style.background = '';
    }, 1000);
  };

  const handleProductClick = (productId) => {
    window.location.href = `/product/${productId}`;
  };
  return (
    <section className="products section" id="products">
      <div className="container">
        <h2 className="section-title">
          {searchQuery ? `Search Results for "${searchQuery}"` : 'Our Products'}
        </h2>
        
        {searchQuery && (
          <div className="search-info">
            <p>{filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found</p>
            {filteredProducts.length === 0 && (
              <p>Try adjusting your search terms or browse our categories below.</p>
            )}
          </div>
        )}
        
        <div className="category-filter">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {filteredProducts.length > 0 ? (
          <div className="products-grid">
            {filteredProducts.map(product => (
              <div key={product.id} className="product-card" onClick={() => handleProductClick(product.id)} style={{ cursor: 'pointer' }}>
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                </div>

                <div className="product-content">
                  <h3 className="product-name">{product.name}</h3>
                  
                  <div className="product-stock">
                    <span className={`stock ${product.stock === 'yes' ? 'in-stock' : 'out-of-stock'}`}>
                      {product.stock === 'yes' ? 'In Stock' : 'Out of Stock'}
                    </span>
                  </div>

                  <div className="product-price">
                    <span className="current-price">${product.price}</span>
                    <span className="original-price">${product.originalPrice}</span>
                  </div>

                  <button
                    className="btn add-to-cart-btn"
                    disabled={product.stock !== 'yes'}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddToCart(product);
                    }}
                  >
                    {product.stock === 'yes' ? 'Add to Cart' : 'Out of Stock'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-products">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.35-4.35"/>
            </svg>
            <h3>No products found</h3>
            <p>Try a different search term or browse our categories.</p>
          </div>
        )}
      </div>
      <div className="loofah-section">
        <div className="loofah-container">
          <div className="loofah-text">
            <h2><strong>BUT WHAT IS <em>LOOFAH?</em></strong></h2>
            <p>
              Egyptian natural loofahs originated in ancient Egypt, where the <em>Luffa aegyptiaca</em> plant was used as a natural sponge for bathing and exfoliation — a tradition thousands of years old.
            </p>
            <p className="highlight">
              SHOWER YOUR WAY to healthier-looking skin with Egyptian loofah by HydroNative.
            </p>
          </div>
          <div className="loofah-image">
            <img src={loofahImage} alt="Loofah plant" />
          </div>
        </div>
      </div>
      <div className="loofah-icons">
        <img src={naturalIcon} alt="Natural" />
        <img src={ecoIcon} alt="Eco Friendly" />
        <img src={bioIcon} alt="Biodegradable" />
      </div>
    </section>
  );
};

export default Products;