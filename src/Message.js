import React from 'react';
import "./Message.css";
import * as timeago from 'timeago.js';

const Message = ({id, content:{timestamp, username, message}}) => {
    return (
        <div className="message">
            <div className="message-content">
                <p>{username}:</p>
                <div className="message-container">
                    <h3>{message}</h3>
                </div>
                <small>{timeago.format(new Date(timestamp?.toDate()).toLocaleString())}</small>
            </div>
        </div>
    );
}

export default Message;
