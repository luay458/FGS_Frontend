// src/components/ContactForm.tsx
import React, { useState } from "react";

const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="footer-section">
      <h5>Contact Us</h5>
      {submitted && (
        <p className="thanks-msg">
          Thanks for sending your message! We'll get back to you as soon as we can!
        </p>
      )}
      <form className="contact-form" onSubmit={handleSubmit}>
        <textarea name="message" placeholder="Your Message" required></textarea>
        <div className="submit-text-container">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <button type="submit">Send Message</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
