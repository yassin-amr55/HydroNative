/**
 * Static imports for all product images - this ensures they are bundled for production
 */

// Back Belt images
import backBelt1 from '../assets/products/back belt1.jpg';
import backBelt2 from '../assets/products/back belt2.jpg';
import backBelt3 from '../assets/products/back belt3.jpg';
import backBelt4 from '../assets/products/back belt4.jpg';

// Circle Loofah images
import circleLoofah1 from '../assets/products/circle loofah1.jpg';
import circleLoofah2 from '../assets/products/circle loofah2.jpg';
import circleLoofah3 from '../assets/products/circle loofah3.jpg';
import circleLoofah4 from '../assets/products/circle loofah4.jpg';

// Cover images
import cover1 from '../assets/products/cover1.jpg';
import cover2 from '../assets/products/cover2.jpg';
import cover3 from '../assets/products/cover3.jpg';
import cover4 from '../assets/products/cover4.jpg';

// Dish images
import dish1 from '../assets/products/dish1.jpg';
import dish2 from '../assets/products/dish2.jpg';
import dish3 from '../assets/products/dish3.jpg';
import dish4 from '../assets/products/dish4.jpg';

// Hand images
import hand1 from '../assets/products/hand1.jpg';
import hand2 from '../assets/products/hand2.jpg';
import hand3 from '../assets/products/hand3.jpg';
import hand4 from '../assets/products/hand4.jpg';

// Raw images
import raw1 from '../assets/products/raw1.jpg';
import raw2 from '../assets/products/raw2.jpg';
import raw3 from '../assets/products/raw3.jpg';
import raw4 from '../assets/products/raw4.jpg';

// Square Loofah images
import squareLoofah1 from '../assets/products/square loofah1.jpg';
import squareLoofah2 from '../assets/products/square loofah2.jpg';
import squareLoofah3 from '../assets/products/square loofah3.jpg';
import squareLoofah4 from '../assets/products/square loofah4.jpg';

// Stick images
import stick1 from '../assets/products/stick1.jpg';
import stick2 from '../assets/products/stick2.jpg';
import stick3 from '../assets/products/stick3.jpg';
import stick4 from '../assets/products/stick4.jpg';

/**
 * Static mapping of all product images
 */
export const productImageMap = {
  'back belt': [backBelt1, backBelt2, backBelt3, backBelt4],
  'circle loofah': [circleLoofah1, circleLoofah2, circleLoofah3, circleLoofah4],
  'cover': [cover1, cover2, cover3, cover4],
  'dish': [dish1, dish2, dish3, dish4],
  'hand': [hand1, hand2, hand3, hand4],
  'raw': [raw1, raw2, raw3, raw4],
  'square loofah': [squareLoofah1, squareLoofah2, squareLoofah3, squareLoofah4],
  'stick': [stick1, stick2, stick3, stick4],
};

/**
 * Get images for a specific product by name
 * @param {string} productName - The product name to get images for
 * @returns {Array} Array of image URLs
 */
export const getProductImages = (productName) => {
  return productImageMap[productName] || [];
};


