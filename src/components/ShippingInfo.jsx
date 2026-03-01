import './PolicyPages.css';

const ShippingInfo = () => {
  return (
    <div className="policy-container">
      <h1>Shipping Information</h1>
      <p className="last-updated">Last updated: {new Date().toLocaleDateString()}</p>

      <section>
        <h2>Shipping Rates</h2>
        <p>Our shipping rates are based on your order total and shipping method:</p>
        <ul>
          <li><strong>Free Shipping:</strong> On orders over $25</li>
          <li><strong>Standard Shipping:</strong> $3.99 for orders under $25</li>
        </ul>
      </section>

      <section>
        <h2>Processing Time</h2>
        <p>Orders are typically processed within 1-2 business days. During peak seasons or promotional periods, processing may take up to 3 business days.</p>
      </section>

      <section>
        <h2>Shipping Locations</h2>
        <p>Currently, we ship to all 50 United States. We do not ship to P.O. boxes or international destinations at this time.</p>
      </section>

      <section>
        <h2>Delivery Issues</h2>
        <p>If you experience any delivery issues:</p>
        <ul>
          <li>Verify your shipping address is correct</li>
          <li>Contact us at info@hydronative.com if your package hasn&apos;t arrived within the expected timeframe</li>
        </ul>
      </section>
    </div>
  );
};

export default ShippingInfo;
