import './ProductCardSkeleton.css';

const ProductCardSkeleton = () => {
  return (
    <div className="product-card-skeleton">
      <div className="skeleton-image"></div>
      <div className="skeleton-content">
        <div className="skeleton-line skeleton-title"></div>
        <div className="skeleton-line skeleton-stock"></div>
        <div className="skeleton-price-group">
          <div className="skeleton-line skeleton-price"></div>
          <div className="skeleton-line skeleton-original-price"></div>
        </div>
        <div className="skeleton-button"></div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
