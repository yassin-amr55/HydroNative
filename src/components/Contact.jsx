import { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { fbPixel } from '../utils/fbPixel';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');
  const [state, handleSubmit] = useForm("xrbarano");

  useEffect(() => {
    if (state.submitting) {
      setStatus('Sending...');
    } else if (state.succeeded) {
      setStatus('Thanks for contacting us!');
      setFormData({ name: '', email: '', message: '' });
      // Track Facebook Pixel - Contact
      fbPixel.trackContact();
      setTimeout(() => setStatus(''), 3000);
    } else if (state.errors && state.errors.length > 0) {
      setStatus('❌ Failed to send. Please try again.');
      setTimeout(() => setStatus(''), 3000);
    }
  }, [state.submitting, state.succeeded, state.errors]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Remove this handleSubmit function because useForm provides handleSubmit
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setStatus('Sending...');

  //   try {
  //     const response = await fetch("https://formspree.io/f/xrbarano", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify(formData)
  //     });

  //     if (response.ok) {
  //       setStatus('✅ Message sent successfully!');
  //       setFormData({ name: '', email: '', message: '' });
  //       setTimeout(() => setStatus(''), 1000);
  //     } else {
  //       setStatus('❌ Failed to send. Please try again.');
  //       setTimeout(() => setStatus(''), 1000);
  //     }
  //   } catch {
  //     setStatus('⚠️ Error sending message. Try later.');
  //     setTimeout(() => setStatus(''), 1000);
  //   }
  // };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>

            <div className="contact-item">
              <h4>Phone</h4>
              <p>
                <a href="tel:+12817775462">+1-281-777-5462</a>
              </p>
            </div>

            <div className="contact-item">
              <h4>Email</h4>
              <p>
                <a href="mailto:hydro.native@yahoo.com">hydro.native@yahoo.com</a>
              </p>
            </div>

            <div className="contact-item">
              <h4>Business Hours</h4>
              <p>12:00 PM - 12:00 AM</p>
            </div>
          </div>

          <div className="contact-form">
            <form onSubmit={handleSubmit} className="form-holder">
              <div className="form-group">
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>

              <div className="form-group">
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>

              <button type="submit" className="btn submit-btn" disabled={state.submitting}>Send Message</button>
            </form>
            {status && (
              <div className={`form-status ${status === 'Thanks for contacting us!' ? 'success' : 'error'}`}>
                {status}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
