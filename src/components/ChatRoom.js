import React from "react";
import Chat from "./Chat";
import "./ChatRoom.css";
import {useParams } from "react-router-dom";

function ChatRoom(){
    const { roomId } = useParams();
    return <div className="chatRoom">
        <h2>You are in the {roomId} room</h2>
    </div>
}

export default ChatRoom;