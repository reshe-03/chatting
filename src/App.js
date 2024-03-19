// App.js
import React, { useState } from 'react';
import ChatRoom from './ChatRoom';
import './App.css'; // Import CSS file for styling

function App() {
  const [username, setUsername] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <div className="app-container">
      <header>
        <h1>React Chat App</h1>
      </header>
      <div className="content">
        <div className="username-input">
          <label>
            Enter your username:
            <input type="text" value={username} onChange={handleUsernameChange} />
          </label>
        </div>
        <ChatRoom username={username} />
      </div>
    </div>
  );
}

export default App;
