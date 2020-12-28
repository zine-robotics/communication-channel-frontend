import React, {useState, useEffect} from "react";
import "./ChatRoom.css";
import { Avatar } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { useParams } from "react-router-dom";
// import ChatInput from "./ChatInput"
import SendIcon from "@material-ui/icons/Send";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";

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

      <div className="chatRoom__footer">
        <SentimentVerySatisfiedIcon />
        <form>
          <input
            // value={input}
            // onChange={(event) => setinput(event.target.value)}
            placeholder="Type your message here"
          />
          <button type="submit">
            <SendIcon />
          </button>
        </form>
      </div>
      
     {/* <div>
         <ChatInput />
     </div> */}
     
    </div>
    );
}

export default ChatRoom;
