import React, { useState } from 'react';
import './Chatbot.css'; // Import the CSS file specific to this component

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  // Function to send the user's message to the backend Flask API
  const sendMessageToBot = async (userMessage) => {
    try {
      const response = await fetch('http://127.0.0.1:5000/chat', {  // Use your backend URL here
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage }),  // Send the user's message in the request body
      });
      
      const data = await response.json(); // Parse the JSON response from the server
      
      return data.bot_message; // Get the bot's response from the JSON
    } catch (error) {
      console.error('Error sending message to bot:', error);
      return 'Error: Could not reach the server.';
    }
  };

  // Handle sending messages
  const handleSend = async (e) => {
    e.preventDefault();
    if (input.trim() === '') return;

    // Add the user's message to the chat
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: input, sender: 'user' },
    ]);

    // Send the message to the bot and get the response
    const botResponse = await sendMessageToBot(input);

    // Add the bot's response to the chat
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: botResponse, sender: 'bot' },
    ]);

    // Clear the input field
    setInput('');
  };

  return (
    <section id="chatbot" className="section">
      <h2>Chat with My AI Assistant!</h2>
      <p>Explore my skills, projects, and experience through an intelligent conversation. Ask my assistant anything about my journey in AI, Data Science, and development.</p>
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
