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

  const getRooms = async (userId) => {
    const res = await axios.post("/rooms", {
      userId,
    });
    if (res.status === 200) {
      setRooms(res.data.chats);
    } else {
      console.log(res);
    }
  };

  const getMessages = async (clickedRoomId) => {
    const res = await axios.post("/messages", {
      roomId: clickedRoomId,
    });
    if (res.status === 200) {
      setClickedRoomMessages(res.data.messages);
    }
  };
  useEffect(() => {
    getRooms(user._id);
  }, [user._id]);
  useEffect(() => {
    getMessages(clickedRoomId)
  }, [clickedRoomId])
  return (
    <>
      {/*add pariticent fetching and user info */}
      {rooms.map((room) => (
        <button className="channelButton"
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
