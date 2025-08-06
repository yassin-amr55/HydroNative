import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import example from '../assets/example.png';
import './FeaturedProducts.css';

const FeaturedProducts = () => {
  return (
    <section className="featured-products" id="home">
        <div className="featured-content">
          <div className="featured-text">
            <h1>Welcome to HydroNative</h1>
            <p>Your trusted online shopping destination for quality products at great prices.</p>
            <button className="cta-button" onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}>
              Shop Now
            </button>
          </div>
          <div className="featured-image">
            <img src={example} alt="HydroNative Logo" />
          </div>
        </div>
    </section>
  );
};

export default FeaturedProducts;
