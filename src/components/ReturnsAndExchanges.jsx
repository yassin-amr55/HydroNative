import './PolicyPages.css';

const ReturnsAndExchanges = () => {
  return (
    <div className="policy-container">
      <h1>Returns & Exchanges</h1>
      <p className="last-updated">Last updated: {new Date().toLocaleDateString()}</p>
      
      <section>
        <h2>Return Policy</h2>
        <p>We want you to be completely satisfied with your purchase. If there is a mistake with your order, we accept returns within 3 days of the delivery date.</p>
      </section>

      <section>
        <h2>Eligibility for Returns</h2>
        <p>To be eligible for a return, your item must:</p>
        <ul>
          <li>Be unused and in the same condition that you received it</li>
          <li>Be in the original packaging</li>
          <li>Include all original tags, labels, and accessories</li>
          <li>Be accompanied by the original receipt or proof of purchase</li>
        </ul>
      </section>

      <section>
        <h2>Non-Returnable Items</h2>
        <p>Certain items are not eligible for return, including:</p>
        <ul>
          <li>Gift cards</li>
          <li>Perishable goods</li>
          <li>Personal care items that have been opened or used</li>
          <li>Items marked as "final sale"</li>
        </ul>
      </section>

      <section>
        <h2>How to Start a Return</h2>
        <p>To initiate a return, please follow these steps:</p>
        <ol>
          <li>Contact our customer service team at info@hydronative.com with your order number and reason for return</li>
          <li>We will provide you with a Return Authorization Number (RAN) and detailed instructions</li>
          <li>Package the item securely and include the RAN in your return package</li>
          <li>Ship the item back to us using a trackable shipping method</li>
        </ol>
      </section>

      <section>
        <h2>Refunds</h2>
        <p>Once we receive and inspect your return, we will notify you of the approval or rejection of your refund. If approved, your refund will be processed to your original payment method within 5-7 business days.</p>
      </section>

      <section>
        <h2>Exchanges</h2>
        <p>We currently do not offer direct exchanges. If you need a different item, please return the original item for a refund and place a new order for the desired item.</p>
      </section>

      <section>
        <h2>Return Shipping</h2>
        <p>Return shipping costs are the responsibility of the customer unless the item was damaged or defective upon arrival. We recommend using a trackable shipping service and purchasing shipping insurance for items over $50.</p>
      </section>
    </div>
  );
};

export default ReturnsAndExchanges;
