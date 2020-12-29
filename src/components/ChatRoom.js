import React, {useState, useEffect} from "react";
import "./ChatRoom.css";
import { Avatar } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { useParams } from "react-router-dom";
// import ChatInput from "./ChatInput"
import SendIcon from "@material-ui/icons/Send";
import AttachFileIcon from '@material-ui/icons/AttachFile';
import Message from "./Message";

function ChatRoom(){
    const { roomId } = useParams();
    const [roomname, setroomname] = useState("");
    var roomMessages= [
      {
          id: "5fe6e29931cf76666b0f702a",
          senderId: "5fe5bc013fae5014fb8de01e",
          content: "mes",
          conversationId : "5fe5bb233fae5014fb8de01d",
          createdAt: "2020-12-26T07:13:29.881Z",
          updatedAt: "2020-12-26T07:13:29.881Z",
          __v: 0
      },
      {
          _id: "5fe6e29e31cf76666b0f702b",
          senderId: "5fd2489d71c8f43084d6746d",
          content: "mes",
          conversationId: "5fe5bb233fae5014fb8de01d",
          createdAt: "2020-12-26T07:13:34.804Z",
          updatedAt: "2020-12-26T07:13:34.804Z",
          __v: 0
      }];
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

      <div className="chatRoom_body">
        {roomMessages.map(({senderId, content, conversationId, createdAt})=>(
          <Message  
            senderId={senderId}
            content={content}
            conversationId={conversationId}
            createdAt={createdAt}
          />
        ))
        }
      </div>
    

      <div className="chatRoom__footer"> 
        <form>
          <input
            // value={input}
            // onChange={(event) => setinput(event.target.value)}
            placeholder="Type your message here" /> 
            <button>
            <AttachFileIcon />
            </button>
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
