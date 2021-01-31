import React, { useEffect, useState } from 'react';
import "./App.css";
import Message from './Message';
import db from './firebase';
import firebase from "firebase";
import SendIcon from '@material-ui/icons/Send';

const App = () => {

  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const login = (e) => {
    if(username === ""){
      window.location.reload();
    }else{
      e.preventDefault();
    }
    document.querySelector(".loginForm").classList.toggle("noform");
    document.querySelector(".loginFormContainer").classList.toggle("noform");
    document.querySelector(".chatContainer").classList.add("openChat");
  } 

  const sendMessage = (e) => {
    e.preventDefault();
    if(message === ""){
      return;
    }else{  
      setMessage("");
      db.collection("messages").add({
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        message: message,
        username: username,
      });
    }    
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
      <div className="loginFormContainer">
        <h1>Chat Up | Chat with others anonymously</h1>
        <form className="loginForm">
          <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Username" />
          <button onClick={login} type="submit">Enter</button>
        </form>
      </div>
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
            <input type="text" placeholder={`Message as ${username}`} value={message} onChange={(e) => setMessage(e.target.value)}/>
            <button className="sendButton" onClick={sendMessage} type="submit"><SendIcon /></button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

