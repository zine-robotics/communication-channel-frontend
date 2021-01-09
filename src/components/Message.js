import React, { useState, useEffect } from "react";
import axios from "../helpers/axios";
import "./css/ChatRoom.css";

function formatAMPM(date) {
  var year = date.getFullYear();
  var dt = date.getDate();
  var month = date.getMonth();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = dt + '/' + month + '/' + year + ' ' + hours + ':' + minutes + ampm;
  return strTime;
}

function Message({ senderId, content, createdAt, user }) {
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
  });
  if(user._id===senderId)
  {
    return (
    <div className="message-feed right">
    <div className="pull-right" />
    <div className="media-body">
      <h5>{senderName}</h5>
      <div className="mf-content">{content}</div>
      <small className="mf-date">
        <i className="fa fa-clock-o" /> {formatAMPM(new Date(createdAt))}
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
          <i className="fa fa-clock-o" /> {formatAMPM(new Date(createdAt))}
        </small>
      </div>
    </div>
  );
}
}
export default Message;

