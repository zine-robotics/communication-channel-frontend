import React, { useEffect, useState } from "react";
import "./css/ChatRoom.css";
import Channel from "./Channel";
import axios from "axios";
import config from "../config.json";

const Rooms = ({
  token,
  user,
  setClickedRoomName,
  setClickedRoomMessages,
  setClickedRoomMembers,
  setRooms,
  rooms,
  setActive,
  acknowledgement,
  socket,
  joinRoom,
  leaveRoom,
}) => {
  const [clickedRoomId, setClickedRoomId] = useState("");

  const modifyRoomNamesForDm = (rooms) => {
    let newRooms = [];
    rooms.map((room) => {
      let splitConversationName = room.conversationName.split(",");
      splitConversationName.forEach((name) => {
        if (name !== user.fullName) {
          room.conversationName = name;
        }
      });
      newRooms.push(room);
    });
    return newRooms;
  };

  const getRooms = async (userId) => {
    const res = await axios.post(
      `${config.server}/rooms/`,
      {
        userId,
      },
      {
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
          "Content-type": "application/json",
        },
      }
    );
    if (res.status === 200) {
      console.log(res.data);
      setRooms(modifyRoomNamesForDm(res.data.chats));
    } else {
      console.log(res);
    }
  };

  const getMessages = async (clickedRoomId) => {
    const res = await axios.post(
      `${config.server}/messages/`,
      {
        roomId: clickedRoomId,
      },
      {
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
          "Content-type": "application/json",
        },
      }
    );
    if (res.status === 200) {
      setClickedRoomMessages(res.data.messages);
    }
  };
  useEffect(() => {
    getRooms(user._id);
  }, []);
  useEffect(() => {
    if (!clickedRoomId) return;
    getMessages(clickedRoomId);
  }, [clickedRoomId]);
  useEffect(() => {
    leaveRoom(user._id, user.fullName);
    joinRoom(user._id, user.fullName, clickedRoomId);
  }, [clickedRoomId]);
  return (
    <>
      {rooms.map((room, index) => (
        <button
          className="channelButton"
          style={{ all: "unset" }}
          onClick={() => {
            setClickedRoomName(room.conversationName);
            setClickedRoomId(room._id);
            setClickedRoomMembers([...new Set(room.participants)]);
            setActive(true);
            setInterval(() => {
              setActive(false);
            }, 2000);
          }}
          key={index}
        >
          <Channel name={room.conversationName} />
        </button>
      ))}
    </>
  );
};

export default Rooms;
