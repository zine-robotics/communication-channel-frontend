import "../../App.css";
import React, { useState, useLayoutEffect, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import config from "../../config.json";

function Read(props) {
  const [email, setEmail] = useState("");
  const [conversationId, setConversationId] = useState("");
  const [roomId, setRoomID] = useState("");
  const [value, setValue] = useState(false);
  const [data, setData] = useState("");
  //console.log(data);

  const SubmitData = async (e) => {
    e.preventDefault();
    try {
      console.log("data", { email });
      const res = null;
      if (props.name === "user") {
        const res = await axios.post(
          `${config.server}/admin/${props.name}/read`,
          { email }
        );
        console.log(res.data.data);
        setData(res.data.data);
      } else if (props.name === "rooms") {
        const res = await axios.post(
          `${config.server}/admin/${props.name}/read`,
          { email }
        );

        console.log(res.data.data);
        setData(res.data.data);
      } else if (props.name === "messages") {
        const res = await axios.post(
          `${config.server}/admin/${props.name}/read`,
          { roomId: roomId }
        );
        console.log(res.data.messages);

        setData(res.data.messages);
      }

      console.log("user", res);
      if (res.status === 200) {
        console.log("success", value);
        //alert("User Created successfully");
      } else if (res.status === 234) {
        alert("User already Exists");
        console.log("problems");
      }
    } catch (error) {
      console.log(" error", error);
    }
  };

  return (
    <div className="create">
      <h3>Read {props.name}</h3>
      <div className="forms">
        <form onSubmit={SubmitData}>
          <div className="reader">
            <label className="label">{props.readMessage}</label>
            <input
              placeholder="enter data"
              value={email}
              className="input"
              onChange={(a) => {
                setEmail(a.target.value);

                setRoomID(a.target.value);
                setConversationId(a.target.value);
              }}
            />
          </div>
          <input className="submit" type="submit" />
        </form>
      </div>
      <br />
      <div className="h-break" />
      <br />
      <div className="forms">
        {props.name === "messages" && console.log(data)}

        {Object.entries(data).map(([k, v]) => {
          console.log(typeof v);
          if (typeof v === "object") {
            return (
              <div className="reader" key={k}>
              <label className="label">{v._id}</label>
                <label className="label">{v.senderName}</label>
                <label className="label">{v.content}</label>
              </div>
            );
          } else {
            return (
              <div className="reader" key={k}>
                <label className="label">{k}</label>
                <label className="label">{v}</label>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default Read;
