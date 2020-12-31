import React from "react";
import "./newChatRoom.css";
function Channel({ name }) {
  return (
    <a className="list-group-item media" href="#">
      <div className="pull-left"></div>
      <div className="media-body">
        <div className="list-group-item-heading">{name}</div>
        <small className="list-group-item-text c-gray">
          Cum sociis natoque penatibus{" "}
        </small>
      </div>
    </a>
  );
}
export default Channel;
