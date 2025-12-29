import React, { createContext, useContext, useState } from 'react';
import { fbPixel } from '../utils/fbPixel';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const searchProducts = (products, query) => {
    if (!query.trim()) {
      return products;
    }

    // Track Facebook Pixel - Search
    fbPixel.trackSearch(query);

    const lowercaseQuery = query.toLowerCase();
    return products.filter(product =>
      product.name.toLowerCase().includes(lowercaseQuery) ||
      (Array.isArray(product.category) && product.category.some(cat => cat.toLowerCase().includes(lowercaseQuery))) ||
      product.description.toLowerCase().includes(lowercaseQuery)
    );
  };

  const value = {
    searchQuery,
    setSearchQuery,
    searchResults,
    setSearchResults,
    searchProducts,
    selectedCategory,
    setSelectedCategory
  };

  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};