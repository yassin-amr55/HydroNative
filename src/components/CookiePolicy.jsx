import './PolicyPages.css';

const CookiePolicy = () => {
  return (
    <div className="policy-container">
      <h1>Cookie Policy</h1>
      <p className="last-updated">Last updated: {new Date().toLocaleDateString()}</p>
      
      <section>
        <h2>What are cookies?</h2>
        <p>Cookies are small text files that are stored on your device when you visit a website. They help websites remember information about your visit, like your preferred language and other settings.</p>
      </section>

      <section>
        <h2>How we use cookies</h2>
        <p>We use cookies for various purposes including:</p>
        <ul>
          <li><strong>Essential cookies:</strong> These are necessary for the website to function properly</li>
          <li><strong>Analytics cookies:</strong> These help us understand how visitors interact with our website</li>
          <li><strong>Preference cookies:</strong> These remember your preferences and settings</li>
          <li><strong>Marketing cookies:</strong> These are used to deliver relevant advertisements to you</li>
        </ul>
      </section>

      <section>
        <h2>Managing cookies</h2>
        <p>You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. However, if you do this, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work.</p>
      </section>

      <section>
        <h2>Third-party cookies</h2>
        <p>We may also use third-party cookies from service providers such as Google Analytics to help us analyze website usage and improve our services.</p>
      </section>
    </div>
  );
};

export default CookiePolicy;
