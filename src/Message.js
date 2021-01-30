import React from 'react';
import "./Message.css";

const Message = ({id, content:{timestamp, username, message}}) => {
    return (
        <div className="message">
            <div className="message-content">
                <h3>{message}</h3>
                <p>{username}</p>
                <small>{new Date(timestamp?.toDate()).toLocaleTimeString()}</small>
            </div>
        </div>
    );
}

export default Message;
