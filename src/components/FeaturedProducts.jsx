import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import example from '../assets/example.png';
import bg from '../assets/Bg.png';
import './FeaturedProducts.css';

const FeaturedProducts = () => {
  return (
    <section className="featured-products" id="home">
        <img src={bg} alt="Background" className="background-image" />
        <div className="featured-content">
          <div className="featured-text">
            <h1>The Loofah That Fits Your <span>GREEN LIFESTYLE</span></h1>
            <p>"Nature’s Touch. Skin’s Delight."</p>
            <button className="cta-button" onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}>
              Shop Now
            </button>
          </div>
          <div className="featured-image">
            <img src={example} alt="HydroNative Logo" />
          </div>
        </div>
        <div className="featured-info">
          <b>Free delivery for orders over 25$</b>
          <b>100% natural Egyptian loofahs</b>
        </div>
    </section>
  );
};

export default FeaturedProducts;
