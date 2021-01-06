import React, { useEffect, useState } from "react";
import "./css/ChatRoom.css";
import Channel from "./Channel";
import axios from "../helpers/axios";

const Rooms = ({ token, user, setClickedRoomName, setClickedRoomMembers }) => {
  const [rooms, setRooms] = useState([]);
  const getRooms = async () => {
    const res = await axios.post("/rooms", {
      userId: user._id,
    });
    if (res.status === 200) {
      setRooms(res.data.chats);
    } else {
      console.log(res);
    }
  };
  useEffect(() => {
    getRooms();
  }, []);
  return (
    <>
      {/*add pariticent fetching and user info */}
      {rooms.map((room) => (
        <button
          style={{ all: "unset" }}
          onClick={() => {
            setClickedRoomName(room.conversationName);
            setClickedRoomMembers(room.participants);
          }}
        >
          <Channel name={room.conversationName} />
        </button>
      ))}
    </>
  );
};

export default Rooms;
