import React from 'react';
import "./Message.css";
import * as timeago from 'timeago.js';

const Message = ({id, content:{timestamp, username, message, imageUrl}}) => {
    return (
        <div className={`${imageUrl ? "squareMessage" : "message"}`}>
            <div className="message-content">
                <p>{username}:</p>
                <div className="message-container">
                    <h4>{message}</h4>
                </div>
                <small>{timeago.format(new Date(timestamp?.toDate()).toLocaleString())}</small>
                <img src={imageUrl} className={`${imageUrl ? "openImage" : "noImage"}`} alt="Inapropriate"/>
            </div>
            
        </div>
    );
}

export default Message;
