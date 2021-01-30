import React, { useEffect, useState } from 'react';
import "./App.css";
import Message from './Message';

const App = () => {

  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");

  const hideForm = (e) => {
    e.preventDefault();
    document.querySelector("form").classList.add("noform");
    document.querySelector(".chatContainer").classList.add("openChat");
  } 

  const clearInput = (e) => {
    e.preventDefault();
    setMessage("");
  }

  useEffect(() => {
    
  }, [])

  return (
    <div className="app">
      <form>
        <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Username"/>
        <button onClick={hideForm} type="submit">Enter</button>
      </form>
      <div className="chatContainer">
        <div className="chatHeader">
          <h1>ChatUp</h1>
          <h3>Ask Web Community</h3>
        </div>
        <div className="chatBody">
          <Message username={username} />
        </div>
        <div className="chatFooter">
          <form>
            <input type="text" value={message} onChange={(e) => setMessage(e.target.value)}/>
            <button className="noform" onClick={clearInput} type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

