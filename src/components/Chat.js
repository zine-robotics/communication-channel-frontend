import React from "react";
import Navbar from "./navbar";
import ChatRoom from "./ChatRoom";
import "./css/Chat.css";

function Chat() {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="chat-page">
      <Navbar user={user} />
        <ChatRoom token={token} user={user}/>
    </div>
  );
}
export default Chat;
