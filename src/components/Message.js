import React from 'react'
import "./Message.css"

function Message({senderId, content, conversationId, createdAt}) {
    return (
        <div className="message">
            <div className="message__info">
                <h4>
                    {senderId} <span className="message_timestamp">{new Date(createdAt).toUTCString()}</span>
                </h4>
                <p>
                    {content}
                </p>
            </div>
        </div>
    )
}

export default Message
