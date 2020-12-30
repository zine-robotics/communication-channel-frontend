import React from "react";
import "./newChatRoom.css";

function Message({ senderId, content, conversationId, createdAt }) {
  return (
    <div className="message-feed media">
      <div className="pull-left"></div>
      <div className="media-body">
        <h5>{senderId}</h5>
        <div className="mf-content">{content}</div>
        <small className="mf-date">
          <i className="fa fa-clock-o" /> {new Date(createdAt).toUTCString()}
        </small>
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
