import React, { useEffect, useState } from "react";
import "./css/ChatRoom.css";
import Channel from "./Channel";
import axios from "../helpers/axios";

const Rooms = ({
  token,
  user,
  setClickedRoomName,
  setClickedRoomMembers,
  setClickedRoomMessages,
}) => {
  const [rooms, setRooms] = useState([]);
  const [clickedRoomId, setClickedRoomId] = useState("");

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

  const getMessages = async () => {
    console.log(clickedRoomId, "While Sending request")
    const res = await axios.post("/messages", {
      roomId: clickedRoomId,
    });
    if (res.status === 200) {
      setClickedRoomMessages(res.data.messages);
    }
  };
  useEffect(() => {
    getRooms();
  }, []);
  useEffect(() => {
    getMessages()
  }, [clickedRoomId])
  return (
    <>
      {/*add pariticent fetching and user info */}
      {rooms.map((room) => (
        <button
          style={{ all: "unset" }}
          onClick={() => {
            setClickedRoomName(room.conversationName);
            setClickedRoomMembers(room.participants);
            setClickedRoomId(room._id);
          }}
        >
          <Channel name={room.conversationName} />
        </button>
      ))}
      {console.log(clickedRoomId)}
    </>
  );
};

export default Rooms;
