import React, { useState } from 'react';
import './Contact.css';
import linkedin from '../../assets/linkedin-logo.webp';
import github from '../../assets/github-logo.png';
import leetcode from '../../assets/leetcode-logo.png';
import kaggle from '../../assets/kaggle-logo.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    from_email: '',
    fromName: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('');  // To track the status of form submission
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);  // To track loading state

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('');  // Reset status
    setError('');   // Reset error
    setLoading(true); // Start loading

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://127.0.0.1:5000';
      console.log(apiUrl)
      const response = await fetch(`${apiUrl}/send_email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus(result.message);  // Success message
        setFormData({ from_email: '', fromName: '', subject: '', message: '' });  // Reset form fields
      } else {
        setError(result.error || 'Something went wrong!');
      }
    } catch (err) {
      setError('Error: Could not send the message.');
    } finally {
      setLoading(false); // Stop loading after response
    }
  };

  return (
    <section id="contact" className="section">
      <h2>Contact Me</h2>
      <p style={{ marginBottom: '20px' }}>
        Don't hesitate to contact me if you have any questions or if there are any opportunities you'd like to discuss!
      </p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email Me 📩</label>
        <input
          type="email"
          id="email"
          placeholder="Your Email"
          name="from_email"
          value={formData.from_email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          id="name"
          placeholder="Your Name"
          name="fromName"
          value={formData.fromName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          id="subject"
          placeholder="Subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
        <textarea
          id="message"
          placeholder="Message"
          rows="7"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" disabled={loading}>
          {loading ? 'Sending...' : 'Send'}  {/* Conditional button text */}
        </button>
      </form>

      {/* Displaying status or error message */}
      {status && <p className="success-message">{status}</p>}
      {error && <p className="error-message">{error}</p>}

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
