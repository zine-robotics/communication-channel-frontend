import React, { useState, useEffect } from "react";
import axios from "../helpers/axios";
import "./css/ChatRoom.css";

function Message({ senderId, content, conversationId, createdAt, user }) {
  const [senderName, setSenderName] = useState("");
  const getUserInfo = async () => {
    const res = await axios.get("/user", {
      params: {
        userId: senderId,
      },
    });
    if (res.status === 200) {
      setSenderName(res.data.user.fullName);
    } else {
      console.log(res);
    }
  };
  useEffect(() => {
    getUserInfo();
  }, []);
  if(user._id===senderId)
  {
    return (
    <div className="message-feed right">
    <div className="pull-right" />
    <div className="media-body">
      <h5>{senderName}</h5>
      <div className="mf-content">{content}</div>
      <small className="mf-date">
        <i className="fa fa-clock-o" /> {new Date(createdAt).toUTCString()}
      </small>
    </div>
  </div>          
    );
  }
  else{
  return (
    <div className="message-feed media">
      <div className="pull-left" />
      <div className="media-body">
        <h5>{senderName}</h5>
        <div className="mf-content">{content}</div>
        <small className="mf-date">
          <i className="fa fa-clock-o" /> {new Date(createdAt).toUTCString()}
        </small>
      </div>
    </div>
  );
}
}
export default Message;

