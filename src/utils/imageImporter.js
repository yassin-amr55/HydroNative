/**
 * Dynamically imports multiple images for a product based on naming pattern
 * Automatically detects how many images are available (starts from 1 and keeps going until it fails)
 * @param {string} baseName - The base name of the images (e.g., "back belt", "circle loofah")
 * @param {number} maxCount - Maximum number of images to try (default: 10)
 * @returns {Array} Array of imported images
 */
export const importProductImages = (baseName, maxCount = 4) => {
  const images = [];

  for (let i = 1; i <= maxCount; i++) {
    try {
      // Convert base name to filename format (replace spaces with spaces for matching)
      const fileName = `${baseName}${i}.jpg`;
      const imagePath = `../assets/products/${fileName}`;

      // Use dynamic import - this will be resolved at build time by Vite
      const image = new URL(imagePath, import.meta.url).href;
      images.push(image);
    } catch (error) {
      // If we can't import the next image, we've reached the end
      console.warn(`Could not import image: ${baseName}${i}.jpg - ${error.message}`);
      break;
    }
  }

  return images;
};

/**
 * Alternative approach using static imports for better performance
 * This creates a mapping of all product images
 */
export const productImageMap = {
  'back belt': () => importProductImages('back belt', 4),
  'circle loofah': () => importProductImages('circle loofah', 4),
  'cover': () => importProductImages('cover', 4),
  'dish': () => importProductImages('dish', 4),
  'hand': () => importProductImages('hand', 4),
  'raw': () => importProductImages('raw', 4),
  'square loofah': () => importProductImages('square loofah', 4),
  'stick': () => importProductImages('stick', 4),
};

/**
 * Get images for a specific product by name
 * @param {string} productName - The product name to get images for
 * @returns {Array} Array of image URLs
 */
export const getProductImages = async (productName) => {
  const getImages = productImageMap[productName];
  if (getImages) {
    return await getImages();
  }
  return [];
};
