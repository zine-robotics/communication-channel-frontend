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
      },
      {
        _id: "5fe6e2f4a145d9670446f3b2",
        senderId: "5fe5bc013fae5014fb8de01e",
        content: "mes",
        conversationId: "5fe5bb233fae5014fb8de01d",
        createdAt: "2020-12-26T07:15:00.169Z",
        updatedAt: "2020-12-26T07:15:00.169Z",
        __v: 0
    },
    {
        _id: "5fe6e2f9a145d9670446f3b3",
        senderId: "5fd2489d71c8f43084d6746d",
        content: "mes",
        conversationId: "5fe5bb233fae5014fb8de01d",
        createdAt: "2020-12-26T07:15:05.763Z",
        updatedAt: "2020-12-26T07:15:05.763Z",
        __v: 0
    },
    {
        _id: "5fe6e366bb6f3867879f699c",
        senderId: "5fe5bc013fae5014fb8de01e",
        content: "mes",
        conversationId: "5fe5bb233fae5014fb8de01d",
        createdAt: "2020-12-26T07:16:54.034Z",
        updatedAt: "2020-12-26T07:16:54.034Z",
        __v: 0
    },
    {
        _id: "5fe6e369bb6f3867879f699d",
        senderId: "5fd2489d71c8f43084d6746d",
        content: "mes",
        conversationId: "5fe5bb233fae5014fb8de01d",
        createdAt: "2020-12-26T07:16:57.692Z",
        updatedAt: "2020-12-26T07:16:57.692Z",
        __v: 0
    },
    {
        _id: "5fe6e36cbb6f3867879f699e",
        senderId: "5fd2489d71c8f43084d6746d",
        content: "mesdasjasbdf",
        conversationId: "5fe5bb233fae5014fb8de01d",
        createdAt: "2020-12-26T07:17:00.943Z",
        updatedAt: "2020-12-26T07:17:00.943Z",
        __v: 0
    },
    {
        _id: "5fe6e36ebb6f3867879f699f",
        senderId: "5fd2489d71c8f43084d6746d",
        content: "mesdasjasbdf",
        conversationId: "5fe5bb233fae5014fb8de01d",
        createdAt: "2020-12-26T07:17:02.144Z",
        updatedAt: "2020-12-26T07:17:02.144Z",
        __v: 0
    },
    {
        _id: "5fe6e371bb6f3867879f69a0",
        senderId: "5fe5bc013fae5014fb8de01e",
        conversationId: "5fe5bb233fae5014fb8de01d",
        createdAt: "2020-12-26T07:17:05.243Z",
        updatedAt: "2020-12-26T07:17:05.243Z",
        __v: 0
    },
    {
        _id: "5fe6e376bb6f3867879f69a1",
        senderId: "5fe5bc013fae5014fb8de01e",
        content: "dkfcbsdjc",
        conversationId: "5fe5bb233fae5014fb8de01d",
        createdAt: "2020-12-26T07:17:10.684Z",
        updatedAt: "2020-12-26T07:17:10.684Z",
        __v: 0
    },
    {
        _id: "5fe6e379bb6f3867879f69a2",
        senderId: "5fd2489d71c8f43084d6746d",
        content: "zcdzbh",
        conversationId: "5fe5bb233fae5014fb8de01d",
        createdAt: "2020-12-26T07:17:13.965Z",
        updatedAt: "2020-12-26T07:17:13.965Z",
        __v: 0
    },
    {
        _id: "5fe6e3a6bb6f3867879f69a3",
        senderId: "5fe5bc013fae5014fb8de01e",
        content: "dkfcbsdjcjkbhj",
        conversationId: "5fe5bb233fae5014fb8de01d",
        createdAt: "2020-12-26T07:17:58.446Z",
        updatedAt: "2020-12-26T07:17:58.446Z",
        __v: 0
    },
    {
        _id: "5fe6e3a7bb6f3867879f69a4",
        senderId: "5fe5bc013fae5014fb8de01e",
        content: "dkfcbsdjcjkbhj",
        conversationId: "5fe5bb233fae5014fb8de01d",
        createdAt: "2020-12-26T07:17:59.082Z",
        updatedAt: "2020-12-26T07:17:59.082Z",
        __v: 0
    },
    {
        _id: "5fe6e3a7bb6f3867879f69a5",
        senderId: "5fe5bc013fae5014fb8de01e",
        content: "dkfcbsdjcjkbhj",
        conversationId: "5fe5bb233fae5014fb8de01d",
        createdAt: "2020-12-26T07:17:59.464Z",
        updatedAt: "2020-12-26T07:17:59.464Z",
        __v: 0
    },
    {
        _id: "5fe6e3a7bb6f3867879f69a6",
        senderId: "5fe5bc013fae5014fb8de01e",
        content: "dkfcbsdjcjkbhj",
        conversationId: "5fe5bb233fae5014fb8de01d",
        createdAt: "2020-12-26T07:17:59.987Z",
        updatedAt: "2020-12-26T07:17:59.987Z",
        __v: 0
    },
    {
        _id: "5fe6e3a8bb6f3867879f69a7",
        senderId: "5fe5bc013fae5014fb8de01e",
        content: "dkfcbsdjcjkbhj",
        conversationId: "5fe5bb233fae5014fb8de01d",
        createdAt: "2020-12-26T07:18:00.168Z",
        updatedAt: "2020-12-26T07:18:00.168Z",
        __v: 0
    },
    {
        _id: "5fe6e3a8bb6f3867879f69a8",
        senderId: "5fe5bc013fae5014fb8de01e",
        content: "dkfcbsdjcjkbhj",
        conversationId: "5fe5bb233fae5014fb8de01d",
        createdAt: "2020-12-26T07:18:00.320Z",
        updatedAt: "2020-12-26T07:18:00.320Z",
        __v: 0
    },
    {
        _id: "5fe6e3a8bb6f3867879f69a9",
        senderId: "5fe5bc013fae5014fb8de01e",
        content: "dkfcbsdjcjkbhj",
        conversationId: "5fe5bb233fae5014fb8de01d",
        createdAt: "2020-12-26T07:18:00.472Z",
        updatedAt: "2020-12-26T07:18:00.472Z",
        __v: 0
    },
    {
        _id: "5fe6e3a8bb6f3867879f69aa",
        senderId: "5fe5bc013fae5014fb8de01e",
        content: "dkfcbsdjcjkbhj",
        conversationId: "5fe5bb233fae5014fb8de01d",
        createdAt: "2020-12-26T07:18:00.620Z",
        updatedAt: "2020-12-26T07:18:00.620Z",
        __v: 0
    },
    {
        _id: "5fe6e3a8bb6f3867879f69ab",
        senderId: "5fe5bc013fae5014fb8de01e",
        content: "dkfcbsdjcjkbhj",
        conversationId: "5fe5bb233fae5014fb8de01d",
        createdAt: "2020-12-26T07:18:00.782Z",
        updatedAt: "2020-12-26T07:18:00.782Z",
        __v: 0
    },
    {
        _id: "5fe6e3a8bb6f3867879f69ac",
        senderId: "5fe5bc013fae5014fb8de01e",
        content: "dkfcbsdjcjkbhj",
        conversationId: "5fe5bb233fae5014fb8de01d",
        createdAt: "2020-12-26T07:18:00.887Z",
        updatedAt: "2020-12-26T07:18:00.887Z",
        __v: 0
    },
    {
        _id: "5fe6e3aabb6f3867879f69ad",
        senderId: "5fd2489d71c8f43084d6746d",
        content: "csdkadjcbnsd",
        conversationId: "5fe5bb233fae5014fb8de01d",
        createdAt: "2020-12-26T07:18:02.666Z",
        updatedAt: "2020-12-26T07:18:02.666Z",
        __v: 0
    }
];
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
