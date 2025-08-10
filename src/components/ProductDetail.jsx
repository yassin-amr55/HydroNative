import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import loofah from '../assets/loofah.png';
import example from '../assets/example.png';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // Sample products data with descriptions and multiple images
  const products = [
    {
      id: 1,
      name: "Wireless Bluetooth Earbuds",
      price: 79.99,
      originalPrice: 99.99,
      image: loofah,
      images: [
        loofah,
        example,
        loofah
      ],
      description: "Experience premium sound quality with these wireless Bluetooth earbuds. Features include active noise cancellation, 30-hour battery life, and IPX7 water resistance. Perfect for workouts, commuting, or everyday use.",
      category: "bath",
      delivery: 25,
      reviews: 128,
      features: [
        "Active Noise Cancellation",
        "30-hour battery life",
        "IPX7 water resistance",
        "Touch controls",
        "Fast charging"
      ]
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      price: 199.99,
      originalPrice: 249.99,
      image: loofah,
      images: [
        loofah,
        example,
        loofah
      ],
      description: "Track your fitness goals with this advanced smartwatch. Monitor heart rate, sleep patterns, and daily activity. Features GPS tracking, water resistance, and 7-day battery life.",
      category: "kitchen",
      delivery: 5,
      reviews: 89,
      features: [
        "Heart rate monitoring",
        "GPS tracking",
        "Water resistant",
        "7-day battery life",
        "Sleep tracking"
      ]
    },
    {
      id: 3,
      name: "Premium Coffee Mug",
      price: 24.99,
      originalPrice: 29.99,
      image: loofah,
      images: [
        loofah,
        example,
        loofah
      ],
      description: "Start your day right with this premium ceramic coffee mug. Double-wall insulation keeps drinks hot or cold longer. Microwave and dishwasher safe with a comfortable ergonomic handle.",
      category: "kitchen",
      delivery: 12,
      reviews: 56,
      features: [
        "Double-wall insulation",
        "Microwave safe",
        "Dishwasher safe",
        "Ergonomic handle",
        "12oz capacity"
      ]
    }
  ];

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

  if (!product) {
    return <div className="product-not-found">Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart(product);
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
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>

        <div className="product-info-section">
          <h1 className="product-title">{product.name}</h1>
          
          <div className="product-rating">
            <span className="delivery">Delivery in {product.delivery} days</span>
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
    </div>
  );
};

export default ProductDetail;
