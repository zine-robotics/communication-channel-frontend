import React, { useEffect, useState } from "react";
import "./css/ChatRoom.css";
import Channel from "./Channel";
import axios from "../helpers/axios";

const Rooms = ({ token, user }) => {
  const [rooms, setRooms] = useState([])
  const getRooms = async () => {
    const res = await axios.post("/rooms", 
      {
        userId: "5fe85f079b965e3ade7dc13f",
      }
    );
    if (res.status === 200) {
      setRooms(res.data.chats);
      console.log(res.data.chats);
    } else {
      console.log(res);
    }
  };
  useEffect(() => {
    getRooms();
  }, []);
  return (
    <>
        {rooms.map(room => <Channel name={room.conversationName}/>)}
    </>
  );
};

export default Rooms;
