import React from 'react'
import "./Message.css"

function Message({senderId, content, conversationId, createdAt}) {
    return (
        <div className="message">
            <div className="message__info">
                <h5>
                ZineChat{senderId} <span className="message_timestamp">{new Date(createdAt).toUTCString()}</span>
                </h5>
                <p>
                    Zine Communication Channel - {content}
                </p>
            </div>
        </div>
    )
}

export default Message
