import React from 'react';
import "./Message.css";

const Message = ({id, content:{timestamp, username, message}}) => {
    return (
        <div>
            <p>{message}</p>
        </div>
    );
}

export default Message;
