import "../../components/css/admin.css";
import React from "react";
import { useState, useLayoutEffect } from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import { useHistory } from "react-router";
import axios from "axios";
import config from "../../config.json";
import EditDatabase from "./editdatabase";

function Admin() {
  const [userActive, setUserActive] = useState(true);
  const [roomActive, setRoomActive] = useState(false);
  const [messagesActive, setMessagesActive] = useState(false);
  const [isauthorized, setIsAuthorized] = useState(false);
  const [name, setName] = useState("user");
  const navigate = useHistory();
  const token = localStorage.getItem("token") || null;
  const user = JSON.parse(localStorage.getItem("user"));

  const checkIsValidUser = async () => {
    console.log(`${config.server}/admin`);

    const res = await axios.post(
      `${config.server}/admin`,
      {
        user: user,
      },
      {
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
          "Content-type": "application/json",
        },
      }
    );
    if (res.status === 200) {
      setIsAuthorized(true);
    } else if (res.status === 234) {
      alert("this page is for admins only");
      navigate.push("/");
    }
  };

  useLayoutEffect(() => {
    if (token === null) {
      navigate.push("/");
    }
    checkIsValidUser();
  }, []);

  return (
    <div className="App">
      <div className="admin-top">
        {" "}
        <h1>Welcome to the Admin Panel !!!</h1>
      </div>
      <div className="h-break" />
      {isauthorized && (
        <div className="admin">
          <div className="admin-left">
            <button
              className={userActive ? "admin-button" : "admin-button-inactive"}
              onClick={() => {
                setName("user");
                setUserActive(true);
                setRoomActive(false);
                setMessagesActive(false);
              }}
            >
              Users
            </button>
            <button
              className={roomActive ? "admin-button" : "admin-button-inactive"}
              onClick={() => {
                setName("rooms");
                setUserActive(false);
                setRoomActive(true);
                setMessagesActive(false);
              }}
            >
              Rooms
            </button>
            <button
              className={
                messagesActive ? "admin-button" : "admin-button-inactive"
              }
              onClick={() => {
                setName("messages");
                setUserActive(false);
                setRoomActive(false);
                setMessagesActive(true);
              }}
            >
              Messages
            </button>
          </div>
          <div className="v-break" />
          <div className="admin-right">
            <EditDatabase name={name} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Admin;
