// ChatRoom.js
import React, { useState } from 'react';
import ChatMessage from './ChatMessage';
import './ChatRoom.css'; // Import CSS file for styling

function ChatRoom({ username }) {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');

  const handleMessageInputChange = (e) => {
    setMessageInput(e.target.value);
  };

  const sendMessage = () => {
    if (messageInput.trim() !== '') {
      setMessages((prevMessages) => [
        ...prevMessages,
        { author: username, text: messageInput },
      ]);
      setMessageInput('');
    }
  };

  return (
    <div className="chat-room">
      <div className="messages">
        {messages.map((message, index) => (
          <ChatMessage key={index} message={message} />
        ))}
      </div>
      <div className="input-box">
        <input
          type="text"
          value={messageInput}
          onChange={handleMessageInputChange}
          placeholder="Type your message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default ChatRoom;
