// Facebook Pixel tracking utilities
export const fbPixel = {
  // Track when user views a product
  trackViewContent: (product) => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'ViewContent', {
        content_ids: [product.id],
        content_name: product.name,
        content_category: product.category,
        content_type: 'product',
        value: product.price,
        currency: 'USD'
      });
    }
  },

  // Track when user adds item to cart
  trackAddToCart: (product, quantity = 1) => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'AddToCart', {
        content_ids: [product.id],
        content_name: product.name,
        content_category: product.category,
        content_type: 'product',
        value: product.price * quantity,
        currency: 'USD'
      });
    }
  },

  // Track when user initiates checkout
  trackInitiateCheckout: (cartItems, totalValue) => {
    if (typeof window !== 'undefined' && window.fbq) {
      const contentIds = cartItems.map(item => item.id);
      window.fbq('track', 'InitiateCheckout', {
        content_ids: contentIds,
        content_type: 'product',
        value: totalValue,
        currency: 'USD',
        num_items: cartItems.length
      });
    }
  },

  // Track successful purchase
  trackPurchase: (orderData) => {
    if (typeof window !== 'undefined' && window.fbq) {
      const contentIds = orderData.items.map(item => item.id);
      window.fbq('track', 'Purchase', {
        content_ids: contentIds,
        content_type: 'product',
        value: orderData.total,
        currency: 'USD',
        num_items: orderData.items.length
      });
    }
  },

  // Track search events
  trackSearch: (searchQuery) => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Search', {
        search_string: searchQuery
      });
    }
  },

  // Track when user views category
  trackViewCategory: (category) => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('trackCustom', 'ViewCategory', {
        category: category
      });
    }
  },

  // Track contact form submission
  trackContact: () => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Contact');
    }
  },

  // Track lead generation (newsletter signup, etc.)
  trackLead: () => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Lead');
    }
  }
};