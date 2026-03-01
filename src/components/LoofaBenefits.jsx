import React from 'react';
import './LoofaBenefits.css';

const LoofaBenefits = () => {
  return (
    <section className="loofa-benefits-section">
      <div className="container">
        <div className="benefits-care-grid">
          {/* Benefits Section */}
          <div className="benefits-box">
            <div className="icon-header">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <h2>Why Choose Natural Loofah?</h2>
            </div>
            <ul className="benefits-list">
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span><strong>100% Natural & Biodegradable</strong> - Eco-friendly alternative to plastic sponges</span>
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span><strong>Gentle Exfoliation</strong> - Removes dead skin cells for smoother, healthier skin</span>
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span><strong>Improves Circulation</strong> - Stimulates blood flow and lymphatic drainage</span>
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span><strong>Naturally Antimicrobial</strong> - Resists bacteria and odors better than synthetic sponges</span>
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span><strong>Reduces Ingrown Hairs</strong> - Regular use helps prevent bumps and irritation</span>
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span><strong>Better Product Absorption</strong> - Prepares skin for lotions and moisturizers</span>
              </li>
            </ul>
          </div>

          {/* Care Instructions Section */}
          <div className="care-box">
            <div className="icon-header">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
              <h2>How to Care for Your Loofah</h2>
            </div>
            <ul className="care-list">
              <li>
                <div className="step-number">1</div>
                <span><strong>First Use:</strong> Soak in warm water for 2-5 minutes to soften the fibers</span>
              </li>
              <li>
                <div className="step-number">2</div>
                <span><strong>After Each Use:</strong> Rinse thoroughly and squeeze out all excess water</span>
              </li>
              <li>
                <div className="step-number">3</div>
                <span><strong>Drying:</strong> Hang in a well-ventilated area to air dry completely</span>
              </li>
              <li>
                <div className="step-number">4</div>
                <span><strong>Weekly Cleaning:</strong> Sanitize by soaking in diluted vinegar or running through dishwasher</span>
              </li>
              <li>
                <div className="step-number">5</div>
                <span><strong>Storage:</strong> Keep in a dry place, avoid leaving in standing water</span>
              </li>
              <li>
                <div className="step-number">6</div>
                <span><strong>Replacement:</strong> Replace every 3-6 weeks depending on usage for optimal hygiene</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoofaBenefits;
