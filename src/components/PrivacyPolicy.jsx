import './PolicyPages.css';

const PrivacyPolicy = () => {
  return (
    <div className="policy-container">
      <h1>Privacy Policy</h1>
      <p className="last-updated">Last updated: {new Date().toLocaleDateString()}</p>
      
      <section>
        <h2>1. Information We Collect</h2>
        <p>We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us. This may include your name, email address, phone number, and payment information.</p>
      </section>

      <section>
        <h2>2. How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Process and fulfill your orders</li>
          <li>Provide customer support</li>
          <li>Send you updates about your orders</li>
          <li>Improve our products and services</li>
          <li>Communicate with you about promotions and updates</li>
        </ul>
      </section>

      <section>
        <h2>3. Information Sharing</h2>
        <p>We do not sell your personal information. We may share your information with third-party service providers who help us operate our business, such as payment processors and shipping companies.</p>
      </section>

      <section>
        <h2>4. Security</h2>
        <p>We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.</p>
      </section>

      <section>
        <h2>5. Your Rights</h2>
        <p>You have the right to access, update, or delete your personal information. You can do this by logging into your account or contacting us directly.</p>
      </section>

      <section>
        <h2>6. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us at privacy@hydronative.com</p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
