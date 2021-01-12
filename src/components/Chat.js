import React from "react";
import ChatRoom from "./ChatRoom";
import "./css/Chat.css";
import { useHistory } from "react-router";
import { any } from "prop-types";

const Chat = () => {
  const history = useHistory();
  const token = localStorage.getItem("token") || null;
  const user = JSON.parse(localStorage.getItem("user"));
  //const history = useHistory();

  return (
    <>
      {token && (
        <div className="chat-page" style={{ height: "100%" }}>
          <ChatRoom token={token} user={user} />
        </div>
      )}
      {token || history.push("/")}
    </>
  );
};

export default Chat;
