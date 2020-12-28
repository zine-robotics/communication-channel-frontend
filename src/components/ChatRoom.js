import React, {useState, useEffect} from "react";
import "./ChatRoom.css";
import { Avatar } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { useParams } from "react-router-dom";

function ChatRoom(){
    const { roomId } = useParams();
    const [roomname, setroomname] = useState("");
    return (
    <div className="chatRoom">
       <div className="chatRoom__header">
         <div className="chatRoom__headerLeft">
           <h3 className="chatRoom_channelName">
               <strong># App Development</strong>
           </h3> 
        </div>
        <div className="chaRroom__headerRight">
          
        </div>
      </div>
        {/* <h2>You are in the {roomId} room</h2> */}
    </div>
    );
}

export default ChatRoom;
