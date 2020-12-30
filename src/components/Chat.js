import React from "react";
import Navbar from "./navbar";
import ChatRoom from "./newChatRoom";
import "./Chat.css";

function Chat() {
  return (
    <div className="chat-page">
      <Navbar />
        <ChatRoom />
    </div>
  );
}
export default Chat;
