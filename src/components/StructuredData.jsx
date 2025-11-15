import { useEffect } from 'react';

export const ProductStructuredData = ({ product }) => {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": product.name,
      "image": product.images,
      "description": product.description,
      "brand": {
        "@type": "Brand",
        "name": "HydroNative"
      },
      "offers": {
        "@type": "Offer",
        "url": `https://hydronative.com/product/${product.id}`,
        "priceCurrency": "USD",
        "price": product.price,
        "priceValidUntil": "2025-12-31",
        "availability": product.stock === 'yes' ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
        "seller": {
          "@type": "Organization",
          "name": "HydroNative"
        }
      },
      "aggregateRating": product.reviews > 0 ? {
        "@type": "AggregateRating",
        "ratingValue": "4.5",
        "reviewCount": product.reviews
      } : undefined
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    script.id = 'product-structured-data';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('product-structured-data');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, [product]);

  return null;
};

export const OrganizationStructuredData = () => {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "HydroNative",
      "url": "https://hydronative.com",
      "logo": "https://hydronative.com/logo.png",
      "description": "Premium Egyptian natural loofah products for eco-friendly bath and kitchen use",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Customer Service",
        "email": "support@hydronative.com"
      },
      "sameAs": [
        "https://facebook.com/hydronative",
        "https://twitter.com/hydronative",
        "https://instagram.com/hydronative"
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    script.id = 'organization-structured-data';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('organization-structured-data');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return null;
};
