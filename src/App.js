import React, { useEffect, useState } from 'react';
import "./App.css";
import Message from './Message';
import db from './firebase';
import firebase from "firebase";

const App = () => {

  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const user = username;

  const hideForm = (e) => {
    e.preventDefault();
    document.querySelector("form").classList.add("noform");
    document.querySelector(".chatContainer").classList.add("openChat");
  } 

  const sendMessage = (e) => {
    e.preventDefault();
    setMessage("");
    db.collection("messages").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      message: message,
      username: username,
    });
  }

  useEffect(() => {
    db.collection("messages").orderBy("timestamp", "asc").onSnapshot((snapshot) => (
      setMessages(snapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      })))
    ));
  }, [username]);

  return (
    <div className="app">
      <form>
        <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Username" required/>
        <button onClick={hideForm} type="submit">Enter</button>
      </form>
      <div className="chatContainer">
        <div className="chatHeader">
          <h1>ChatUp</h1>
          <h3>Ask Web Community</h3>
        </div>
        <div className="chatBody">
          {messages.map(({id, data}) => (
            <Message key={id} id={id} content={data} />
          ))}
        </div>
        <div className="chatFooter">
          <form>
            <input type="text" value={message} onChange={(e) => setMessage(e.target.value)}/>
            <button className="noform" onClick={sendMessage} type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

