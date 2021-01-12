import React from "react";
import "./css/ChatRoom.css";
import Avatar from "react-avatar";
import Aero from "./css/images/A5.webp";
import Help from "./css/images/help.webp";
import IC from "./css/images/ic1.webp";
import Algo from "./css/images/algo5.jpeg";
import bme from "./css/images/bme.jpg";
import bee from "./css/images/ee1.webp";

function Channel({ name }) {
  function avatar(){
    if(name==="Aeromodelling")
      return <Avatar src={Aero} size="40" round />
    else if(name==="Help")
      return <Avatar src={Help} size="40" round />  
    else if(name==="IC MCU and Sensors")
      return <Avatar src={IC} size="40" round /> 
    else if(name==="Algo Pseudo")
      return <Avatar src={Algo} size="40" round /> 
    else if(name==="BME")
      return <Avatar src={bme} size="40" round />       
    else if(name==="BEE")
      return <Avatar src={bee} size="40" round />       

    else
    return <strong><Avatar name={name} size="40" round /></strong>
  }
  return (
    <a className="list-group-item media">
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
