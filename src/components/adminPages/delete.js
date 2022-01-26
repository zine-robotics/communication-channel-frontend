import "../../App.css";
import React, { useState, useLayoutEffect, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import config from "../../config.json";

function Delete(props) {
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
          `${config.server}/admin/${props.name}/delete`,
          { email }
        );
        if (res.status === 200) {
            console.log("success", value);
            alert("Record Deleted successfully");
          }
      } else if (props.name === "rooms") {
        const res = await axios.post(
          `${config.server}/admin/${props.name}/delete`,
          { conversationId }
        );
        if (res.status === 200) {
            console.log("success", value);
            alert("Record Deleted successfully");
          }
      } else if (props.name === "messages") {
        const res = await axios.post(
          `${config.server}/admin/${props.name}/delete`,
          { conversationId }
        );
        if (res.status === 200) {
          console.log("success", value);
          alert("Record Deleted successfully");
        } 
      }

      console.log("user", res);
      if (res.status === 200) {
        console.log("success", value);
        alert("Record Deleted successfully");
      } else if (res.status === 234) {
        alert("Something went wrong");
        console.log("problems");
      }
    } catch (error) {
      console.log(" error", error);
    }
  };

  return (
    <div className="create">
      <h3>Delete {props.name}</h3>
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
    </div>
  );
}

export default Delete;
