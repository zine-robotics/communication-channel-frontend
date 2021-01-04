import React, { useEffect } from "react";
import "./css/ChatRoom.css";
import Channel from "./Channel";
import axios from "../helpers/axios";

const Rooms = ({ token, user }) => {
  const getRooms = async () => {
    const res = await axios.get("/rooms", {
      userId: "5fe85f079b965e3ade7dc13f",
    });
    console.log(res)
    if (res.status === 200) {
      const rooms = res.data.chats;
      console.log(rooms);
    } else {
      console.log(res);
    }
  };
  useEffect(() => {
    getRooms();
  }, []);
  return (
    <>
      <Channel name={"Web Development"} />
      <Channel name={"App Development"} />
      <Channel name={"Machine Learning"} />
      <Channel name={"Robotics Case Study"} />
      <Channel name={"Algo Pseudo"} />
    </>
  );
};

export default Rooms;
