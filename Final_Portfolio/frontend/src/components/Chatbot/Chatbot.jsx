// src/components/Chatbot/Chatbot.jsx
import React, { useState } from 'react';
import './Chatbot.css'; // Import the CSS file specific to this component

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;

    // Add the user's message to the chat
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: input, sender: 'user' },
    ]);

    // Simulate a bot response
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: 'This is a response from the bot!', sender: 'bot' },
    ]);
    
    // Clear the input field
    setInput('');
  };

  return (
    <section id="chatbot" className="section">
      <h2>Chat with My AI Clone!</h2>
      <div className="chat-container">
        <div className="chat-box">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
        </div>
        <form className="chat-form" onSubmit={handleSend}>
          <input
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Chatbot;
