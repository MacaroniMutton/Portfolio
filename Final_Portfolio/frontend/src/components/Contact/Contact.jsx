import React from 'react';
import './Contact.css'; // Import the CSS file specific to this component
import linkedin from '../../assets/linkedin-logo.webp'
import github from '../../assets/github-logo.png'
import leetcode from '../../assets/leetcode-logo.png'
import kaggle from '../../assets/kaggle-logo.png'

const Contact = () => {
  return (
    <section id="contact" className="section">
      <h2>Contact Me</h2>
      <p style={{ marginBottom: '20px' }}>
        Don't hesitate to contact me if you have any questions or if there are any opportunities you'd like to discuss!
      </p>
      <form className="contact-form">
        <label htmlFor="email">Email Me 📩</label>
        <input type="email" id="email" placeholder="Your Email" name="from_email" required />
        <input type="text" id="name" placeholder="Your Name" name="fromName" required />
        <input type="text" id="subject" placeholder="Subject" name="subject" required />
        <textarea id="message" placeholder="Message" rows="7" name="message" required></textarea>
        <button type="submit">Send</button>
      </form>

      <div className="contact-links">
        <div className="contact-link">
          <a href="https://www.linkedin.com/in/manankher" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} width="60" height="60" alt="LinkedIn Logo" className="contact-logo" />
          </a>
        </div>
        <div className="contact-link">
          <a href="https://github.com/MacaroniMutton" target="_blank" rel="noopener noreferrer">
            <img src={github} width="60" height="60" alt="GitHub Logo" className="contact-logo" />
          </a>
        </div>
        <div className="contact-link">
          <a href="https://leetcode.com/u/mananskher/" target="_blank" rel="noopener noreferrer">
            <img src={leetcode} width="60" height="60" alt="LeetCode Logo" className="contact-logo" />
          </a>
        </div>
        <div className="contact-link">
          <a href="https://www.kaggle.com/macaronimutton" target="_blank" rel="noopener noreferrer">
            <img src={kaggle} width="150" height="60" alt="Kaggle Logo" className="contact-logo" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
