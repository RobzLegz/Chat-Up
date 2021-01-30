import React, { useState } from 'react';
import "./App.css";
import Message from './Message';

const App = () => {

  const [username, setUsername] = useState("");

  const hideForm = (e) => {
    e.preventDefault();
    document.querySelector("form").classList.add("noform");
    document.querySelector(".chatContainer").classList.add("openChat");
  } 

  return (
    <div className="app">
      <form>
        <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Username"/>
        <button onClick={hideForm} type="submit">Enter</button>
      </form>
      <div className="chatContainer">
        <div className="header">
          <h1>ChatUp</h1>
          <h2>Ask Web Community</h2>
        </div>
        <div className="chatBody">
          <Message />
        </div>
      </div>
    </div>
  );
}

export default App;

