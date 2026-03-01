import './PolicyPages.css';

const TermsOfService = () => {
  return (
    <div className="policy-container">
      <h1>Terms of Service</h1>
      <p className="last-updated">Last updated: {new Date().toLocaleDateString()}</p>
      
      <section>
        <h2>1. Acceptance of Terms</h2>
        <p>By accessing and using this website, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our website.</p>
      </section>

      <section>
        <h2>2. Use of Website</h2>
        <p>You may use our website for lawful purposes only. You are prohibited from using our website:</p>
        <ul>
          <li>In any way that violates applicable laws or regulations</li>
          <li>To transmit any unauthorized advertising or promotional material</li>
          <li>To impersonate or attempt to impersonate another person or entity</li>
          <li>In any way that infringes upon the rights of others</li>
        </ul>
      </section>

      <section>
        <h2>3. Products and Services</h2>
        <p>All products and services are subject to availability. We reserve the right to discontinue any product or service at any time. Prices are subject to change without notice.</p>
      </section>

      <section>
        <h2>4. Payment and Billing</h2>
        <p>By providing payment information, you represent and warrant that you have the legal right to use any payment method used. We reserve the right to refuse or cancel any order at any time.</p>
      </section>

      <section>
        <h2>5. Limitation of Liability</h2>
        <p>To the fullest extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our website or products.</p>
      </section>

      <section>
        <h2>6. Changes to Terms</h2>
        <p>We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on this website.</p>
      </section>
    </div>
  );
};

export default TermsOfService;
