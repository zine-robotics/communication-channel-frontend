import React from "react";
import Navbar from "./navbar";
import ChatRoom from "./newChatRoom";
import "./Chat.css";

function Chat() {
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");
  return (
    <div className="chat-page">
      <Navbar />
        <ChatRoom token={token} user={user}/>
    </div>
  );
}
export default Chat;
