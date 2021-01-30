import React from 'react';
import "./Message.css";

const Message = ({id, content:{timestamp, username, message}}) => {
    return (
        <div className="message">
            <div className="message-content">
                <p>{username}:</p>
                <div className="message-container">
                    <h3>{message}</h3>
                </div>
                <small>{new Date(timestamp?.toDate()).toLocaleTimeString()}</small>
            </div>
        </div>
    );
}

export default Message;
