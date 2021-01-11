import React from "react";
import Navbar from "./navbar";
import ChatRoom from "./ChatRoom";
import "./css/Chat.css";
import { useHistory } from "react-router";

function Chat() {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));
  const history = useHistory();
  if (token) {
    return (
      <div className="chat-page">
        <Navbar user={user} />
        <ChatRoom token={token} user={user} />
      </div>
    );
  } else {
    history.push("/");
    return <div></div>
  }
}
export default Chat;
