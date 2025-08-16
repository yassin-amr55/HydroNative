import './PolicyPages.css';

const ShippingInfo = () => {
  return (
    <div className="policy-container">
      <h1>Shipping Information</h1>
      <p className="last-updated">Last updated: {new Date().toLocaleDateString()}</p>
      
      <section>
        <h2>Shipping Options</h2>
        <p>We offer several shipping options to meet your needs:</p>
        <ul>
          <li><strong>Standard Shipping:</strong> 3-5 business days</li>
          <li><strong>Express Shipping:</strong> 1-2 business days</li>
          <li><strong>Overnight Shipping:</strong> Next business day</li>
        </ul>
      </section>

      <section>
        <h2>Shipping Rates</h2>
        <p>Our shipping rates are based on your order total and shipping method:</p>
        <ul>
          <li><strong>Free Standard Shipping:</strong> On orders over $50</li>
          <li><strong>Standard Shipping:</strong> $5.99 for orders under $50</li>
          <li><strong>Express Shipping:</strong> Calculated at checkout based on location</li>
          <li><strong>Overnight Shipping:</strong> Calculated at checkout based on location</li>
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
        <h2>Order Tracking</h2>
        <p>Once your order ships, you will receive a tracking number via email. You can track your package using the carrier&apos;s website or through your account dashboard.</p>
      </section>

      <section>
        <h2>Delivery Issues</h2>
        <p>If you experience any delivery issues:</p>
        <ul>
          <li>Check your tracking information for updates</li>
          <li>Verify your shipping address is correct</li>
          <li>Contact us at shipping@hydronative.com if your package hasn&apos;t arrived within the expected timeframe</li>
        </ul>
      </section>

      <section>
        <h2>Weather Delays</h2>
        <p>During severe weather conditions, shipping carriers may experience delays. We appreciate your patience during these times and will do our best to keep you informed of any delays affecting your order.</p>
      </section>
    </div>
  );
};

export default ShippingInfo;
