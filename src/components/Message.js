import React, { useState, useEffect } from "react";
import axios from "../helpers/axios";
import "./css/ChatRoom.css";

function Message({ senderId, content, conversationId, createdAt }) {
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
  return (
    <div className="message-feed media">
      <div className="pull-left"></div>
      <div className="media-body">
        {/* <div className="reverse"> */}
        <h5>{senderName}</h5>
        <div className="mf-content">{content}</div>
        <small className="mf-date">
          <i className="fa fa-clock-o" /> {new Date(createdAt).toUTCString()}
        </small>
        {/* </div> */}
      </div>
    </div>
  );
}

export default Message;

//REFERENCE FOR SELF MESSAGE DO NOT REMOVE!!!!

{
  /* <div className="message-feed right">
<div className="pull-right">
</div>
<div className="media-body">
  <div className="mf-content">
    Mauris volutpat magna nibh, et condimentum est rutrum a. Nunc
    sed turpis mi. In eu massa a sem pulvinar lobortis.
  </div>
  <small className="mf-date">
    <i className="fa fa-clock-o" /> 20/02/2015 at 09:30
  </small>
</div>
</div> */
}
