import './PolicyPages.css';

const FAQ = () => {
  return (
    <div className="policy-container">
      <h1>Frequently Asked Questions</h1>
      
      <section>
        <h2>Ordering & Products</h2>
        
        <div className="faq-item">
          <h3>How do I place an order?</h3>
          <p>Browse our products, add items to your cart, and proceed to checkout. You&apos;ll need to create an account or sign in to complete your purchase.</p>
        </div>

        <div className="faq-item">
          <h3>Are your products natural?</h3>
          <p>Yes! All our products are made with natural ingredients and are free from harsh chemicals. We prioritize organic and sustainably sourced materials.</p>
        </div>

        <div className="faq-item">
          <h3>Do you test on animals?</h3>
          <p>No, we are proudly cruelty-free and do not test any of our products on animals.</p>
        </div>
      </section>

      <section>
        <h2>Shipping & Delivery</h2>
        
        <div className="faq-item">
          <h3>How long does shipping take?</h3>
          <p>Standard shipping typically takes 3-5 business days. Express shipping options are available at checkout for faster delivery.</p>
        </div>

        <div className="faq-item">
          <h3>Do you ship internationally?</h3>
          <p>Currently, we only ship within the United States. We're working on expanding our shipping options to include international destinations.</p>
        </div>

        <div className="faq-item">
          <h3>How much does shipping cost?</h3>
          <p>We offer free standard shipping on orders over $50. For orders under $50, standard shipping is $5.99. Express shipping rates vary by location.</p>
        </div>
      </section>

      <section>
        <h2>Returns & Refunds</h2>
        
        <div className="faq-item">
          <h3>What is your return policy?</h3>
          <p>We accept returns within 30 days of purchase. Items must be unused and in original packaging. Please see our Returns & Exchanges page for full details.</p>
        </div>

        <div className="faq-item">
          <h3>How do I start a return?</h3>
          <p>Contact our customer service team with your order number and reason for return. We'll provide you with a return authorization and instructions.</p>
        </div>
      </section>

      <section>
        <h2>Account & Support</h2>
        
        <div className="faq-item">
          <h3>How do I create an account?</h3>
          <p>Click the "Sign In" button in the header and select "Create Account". You&apos;ll need to provide your email address and create a password.</p>
        </div>

        <div className="faq-item">
          <h3>How can I contact customer service?</h3>
          <p>You can reach us via email at support@hydronative.com or through our contact form. We typically respond within 24-48 hours.</p>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
