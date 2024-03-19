// ChatMessage.js
import React from 'react';
import './ChatMessage.css'; // Import CSS file for styling

function ChatMessage({ message }) {
  return (
    <div className="message-container">
      <div className="message">
        <strong>{message.author}: </strong>
        <span>{message.text}</span>
      </div>
    </div>
  );
}

export default ChatMessage;
