import React from "react";
import "./css/ChatRoom.css";
import Avatar from "react-avatar";

function Channel({ name }) {
  return (
    <a className="list-group-item media" href="#">
      <div className="pull-left avatars">
      <Avatar name={name} size="40" round />
      </div>
      <div className="media-body">
        <div className="list-group-item-heading">
          {name}
        </div>
        <small className="list-group-item-text c-gray"></small>
      </div>
    </a>
  );
}
export default Channel;
