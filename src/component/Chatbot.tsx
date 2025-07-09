import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import { FaPaperPlane } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import './Chatbot.css'; // Optional CSS file for styles

// Type assertions for React Icons
const FaTimesIcon = FaTimes as React.FC<{ className?: string }>;
const FaPaperPlaneIcon = FaPaperPlane as React.FC<{ className?: string }>;
const FaWhatsappIcon = FaWhatsapp as React.FC<{ className?: string }>;

interface Message {
  text: string;
  sender: 'user' | 'bot';
  timestamp: string;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const welcomeMessage: Message = {
        text: "Hi there! I'm here to assist you. How can I help you today?",
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString()
      };
      setMessages(prev => [...prev, welcomeMessage]);
    }
  }, [isOpen]);

  const handleSend = () => {
    if (!userInput.trim()) return;

    const userMessage: Message = {
      text: userInput,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString()
    };

    setMessages(prev => [...prev, userMessage]);
    setUserInput('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse: Message = {
        text: 'I see you asked about... Let me help you with that!',
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <>
      <a
        href="https://wa.me/919928430128"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsappIcon className="whatsapp-icon" />
      </a>

      {isOpen && (
        <motion.div
          className="chatbot-window position-fixed bottom-0 end-0 m-4 bg-white shadow rounded chatbot-window-style"
          initial={{
            opacity: 0,
            y: 50
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          exit={{
            opacity: 0,
            y: 50
          }}
        >
          <div className="chatbot-header d-flex justify-content-between align-items-center p-2 bg-primary text-white">
            <h5 className="mb-0">Chat Assistant</h5>
            <button className="btn btn-sm btn-light" onClick={() => setIsOpen(false)}>
              <FaTimesIcon />
            </button>
          </div>

          <div className="chatbot-body p-2" style={{ height: '250px', overflowY: 'auto' }}>
            {messages.map((msg, index) => (
              <div key={index} className={`mb-2 text-${msg.sender === 'user' ? 'end' : 'start'}`}>
                <div className={`p-2 rounded ${msg.sender === 'user' ? 'bg-primary text-white' : 'bg-light text-dark'}`}>
                  {msg.text}
                </div>
                <small className="text-muted">{msg.timestamp}</small>
              </div>
            ))}
            {isTyping && <div className="text-muted">Bot is typing...</div>}
          </div>

          <div className="chatbot-footer d-flex p-2 border-top">
            <input
              className="form-control me-2"
              placeholder="Type a message..."
              value={userInput}
              onChange={e => setUserInput(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button className="btn btn-primary" onClick={handleSend}>
              <FaPaperPlaneIcon />
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Chatbot;
