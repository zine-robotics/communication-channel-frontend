import React from "react";
import "./css/ChatRoom.css";
function Channel({ name }) {
  return (
    <a className="list-group-item media" href="#">
      <div className="pull-left">
        {/* <img
                    src="https://bootdey.com/img/Content/avatar/avatar3.png"
                    alt=""
                    className="img-avatar"
                  /> */}
      </div>
      <div className="media-body">
        <div className="list-group-item-heading">{name}</div>
        <small className="list-group-item-text c-gray"></small>
      </div>
    </a>
  );
}
export default Channel;
