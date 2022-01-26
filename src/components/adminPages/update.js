import "../../App.css";
import React, { useState, useLayoutEffect, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import config from "../../config.json";

function Update(props) {
  const [email, setEmail] = useState("");
  const [value, setValue] = useState(false);
  const [data, setData] = useState("");
  const [userID, setUserID] = useState("");

  const [roomID, setRoomID] = useState("");
  //console.log(data);

  const SubmitData = async (e) => {
    e.preventDefault();
    try {
      console.log("data", { email, data });
      const res = await axios.post(
        `${config.server}/admin/${props.name}/update`,
        { email, data }
      );

      if (res.status === 200) {
        console.log(res.data.data);
        console.log("success", value);
        alert("Record Updated successfully");
      } else if (res.status === 234) {
        alert("User already Exists");
        console.log("problems");
      }
    } catch (error) {
      console.log(" error", error);
    }
  };

  const AddUser = async (e) => {
    e.preventDefault();
    try {
      console.log("data", { data });
      const res = await axios.post(`${config.server}/joinroom`, {
        roomID,
        userID,
      });

      if (res.status === 200) {
        console.log(res.data.data);
        console.log("success", value);
        alert("Record Updated successfully");
      } else if (res.status === 234) {
        alert("User already Exists");
        console.log("problems");
      }
    } catch (error) {
      console.log(" error", error);
    }
  };

  const SubmitEmailData = async (e) => {
    e.preventDefault();
    try {
      console.log("data", { email });
      const res = await axios.post(
        `${config.server}/admin/${props.name}/read`,
        { email }
      );

      console.log("user", res.data.data);
      setData(res.data.data);

      setRoomID(res.data.data._id);
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
      <h3>Update {props.name}</h3>
      <div className="forms">
        <form onSubmit={SubmitEmailData}>
          <div className="reader">
            <label className="label">{props.readMessage}</label>
            <input
              placeholder="enter data"
              value={email}
              className="input"
              onChange={(a) => {
                setEmail(a.target.value);
              }}
            />
          </div>
          <input className="submit" type="submit" />
        </form>
      </div>

      {data && (
        <div>
          <br />
          <div className="h-break" />
          <br />
          <div className="forms">
            <form onSubmit={SubmitData}>
              {Object.entries(data).map(([key, value]) => {
                return (
                  <div key={key} className="reader">
                    <label className="label">{key}</label>
                    <input
                      className="input"
                      defaultValue={value}
                      onChange={(a) => {
                        data[key] = a.target.value;
                      }}
                    />
                  </div>
                );
              })}
              <input className="submit" type="submit" />
            </form>
          </div>
        </div>
      )}
      {props.name === "rooms" && (
        <div className="create">
          <br />
          <div className="h-break" />
          <br />
          <h3>Add User</h3>
          <div className="forms">
            <form onSubmit={AddUser}>
              <div className="reader">
                <label className="label">userID</label>
                <input
                  className="input"
                  placeholder="userID"
                  onChange={(a) => {
                    setUserID(a.target.value);
                  }}
                />
              </div>
              <div className="reader">
                <label className="label">roomID</label>
                <input
                  className="input"
                  value={roomID}
                  onChange={(a) => {
                    setUserID(a.target.value);
                  }}
                />
              </div>
              <input className="submit" type="submit" />
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Update;
