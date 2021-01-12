import React from "react";
import "./css/ChatRoom.css";
import Avatar from "react-avatar";
import Aero from "./css/images/A5.webp";

function Channel({ name }) {
  function avatar(){
    if(name==="Aeromodelling")
      return <Avatar src={Aero} size="40" round />

    else
    return <strong><Avatar name={name} size="40" round /></strong>
  }
  return (
    <a className="list-group-item media" href="#">
      <div className="pull-left avatars">
      {/* <strong><Avatar name={name} size="40" round /></strong> */}
      {avatar()}
      </div>
      <div className="media-body">
        <div className="list-group-item-heading channel-padding">{name}</div>
        {/* <small className="list-group-item-text c-gray"></small> */}
      </div>
    </a>
  );
}
export default Channel;
