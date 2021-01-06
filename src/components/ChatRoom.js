import React, {useState} from "react";
import "./css/ChatRoom.css";
import $ from "jquery";
import Message from "./Message";
import axios from "../helpers/axios";
import Rooms from "./Rooms";
import Channel from "./Channel";
import Member from "./Member";

$(function () {
  if ($("#ms-menu-trigger")[0]) {
    $("body").on("click", "#ms-menu-trigger", function () {
      $(".ms-menu").toggleClass("toggled");
    });
  }
});

function ChatRoom({ token, user }) {
  const [clickedRoomName, setClickedRoomName] = useState("")
  const [clickedRoomMembers, setClickedRoomMembers] = useState([])
  const [clickedRoomId, setClickedRoomId] = useState("")

  var roomMessages = [
    {
      id: "5fe6e29931cf76666b0f702a",
      senderId: "5fe5bc013fae5014fb8de01e",
      content:
        "Quisque consequat arcu eget odio cursus, ut tempor arcu vestibulum. Etiam ex arcu, porta a urna non, lacinia pellentesque orci. Proin semper sagittis erat, eget condimentum sapien viverra et. Mauris",
      conversationId: "5fe5bb233fae5014fb8de01d",
      createdAt: "2020-12-26T07:13:29.881Z",
      updatedAt: "2020-12-26T07:13:29.881Z",
      __v: 0,
    },
    {
      _id: "5fe6e29e31cf76666b0f702b",
      senderId: "5fd2489d71c8f43084d6746d",
      content:
        "Quisque consequat arcu eget odio cursus, ut tempor arcu vestibulum. Etiam ex arcu, porta a urna non, lacinia pellentesque orci. Proin semper sagittis erat, eget condimentum sapien viverra et. Mauris",
      conversationId: "5fe5bb233fae5014fb8de01d",
      createdAt: "2020-12-26T07:13:34.804Z",
      updatedAt: "2020-12-26T07:13:34.804Z",
      __v: 0,
    },
    {
      _id: "5fe6e2f4a145d9670446f3b2",
      senderId: "5fe5bc013fae5014fb8de01e",
      content:
        "Quisque consequat arcu eget odio cursus, ut tempor arcu vestibulum. Etiam ex arcu, porta a urna non, lacinia pellentesque orci. Proin semper sagittis erat, eget condimentum sapien viverra et. Mauris",
      conversationId: "5fe5bb233fae5014fb8de01d",
      createdAt: "2020-12-26T07:15:00.169Z",
      updatedAt: "2020-12-26T07:15:00.169Z",
      __v: 0,
    },
    {
      _id: "5fe6e2f9a145d9670446f3b3",
      senderId: "5fd2489d71c8f43084d6746d",
      content:
        "Quisque consequat arcu eget odio cursus, ut tempor arcu vestibulum. Etiam ex arcu, porta a urna non, lacinia pellentesque orci. Proin semper sagittis erat, eget condimentum sapien viverra et. Mauris",
      conversationId: "5fe5bb233fae5014fb8de01d",
      createdAt: "2020-12-26T07:15:05.763Z",
      updatedAt: "2020-12-26T07:15:05.763Z",
      __v: 0,
    },
    {
      _id: "5fe6e366bb6f3867879f699c",
      senderId: "5fe5bc013fae5014fb8de01e",
      content:
        "Quisque consequat arcu eget odio cursus, ut tempor arcu vestibulum. Etiam ex arcu, porta a urna non, lacinia pellentesque orci. Proin semper sagittis erat, eget condimentum sapien viverra et. Mauris",
      conversationId: "5fe5bb233fae5014fb8de01d",
      createdAt: "2020-12-26T07:16:54.034Z",
      updatedAt: "2020-12-26T07:16:54.034Z",
      __v: 0,
    },
    {
      _id: "5fe6e369bb6f3867879f699d",
      senderId: "5fd2489d71c8f43084d6746d",
      content:
        "Quisque consequat arcu eget odio cursus, ut tempor arcu vestibulum. Etiam ex arcu, porta a urna non, lacinia pellentesque orci. Proin semper sagittis erat, eget condimentum sapien viverra et. Mauris",
      conversationId: "5fe5bb233fae5014fb8de01d",
      createdAt: "2020-12-26T07:16:57.692Z",
      updatedAt: "2020-12-26T07:16:57.692Z",
      __v: 0,
    },
    {
      _id: "5fe6e36cbb6f3867879f699e",
      senderId: "5fd2489d71c8f43084d6746d",
      content: "mesdasjasbdf",
      conversationId: "5fe5bb233fae5014fb8de01d",
      createdAt: "2020-12-26T07:17:00.943Z",
      updatedAt: "2020-12-26T07:17:00.943Z",
      __v: 0,
    },
    {
      _id: "5fe6e36ebb6f3867879f699f",
      senderId: "5fd2489d71c8f43084d6746d",
      content: "mesdasjasbdf",
      conversationId: "5fe5bb233fae5014fb8de01d",
      createdAt: "2020-12-26T07:17:02.144Z",
      updatedAt: "2020-12-26T07:17:02.144Z",
      __v: 0,
    },
    {
      _id: "5fe6e371bb6f3867879f69a0",
      senderId: "5fe5bc013fae5014fb8de01e",
      content: "Jai ho",
      conversationId: "5fe5bb233fae5014fb8de01d",
      createdAt: "2020-12-26T07:17:05.243Z",
      updatedAt: "2020-12-26T07:17:05.243Z",
      __v: 0,
    },
    {
      _id: "5fe6e376bb6f3867879f69a1",
      senderId: "5fe5bc013fae5014fb8de01e",
      content: "dkfcbsdjc",
      conversationId: "5fe5bb233fae5014fb8de01d",
      createdAt: "2020-12-26T07:17:10.684Z",
      updatedAt: "2020-12-26T07:17:10.684Z",
      __v: 0,
    },
    {
      _id: "5fe6e379bb6f3867879f69a2",
      senderId: "5fd2489d71c8f43084d6746d",
      content: "zcdzbh",
      conversationId: "5fe5bb233fae5014fb8de01d",
      createdAt: "2020-12-26T07:17:13.965Z",
      updatedAt: "2020-12-26T07:17:13.965Z",
      __v: 0,
    },
    {
      _id: "5fe6e3a6bb6f3867879f69a3",
      senderId: "5fe5bc013fae5014fb8de01e",
      content: "dkfcbsdjcjkbhj",
      conversationId: "5fe5bb233fae5014fb8de01d",
      createdAt: "2020-12-26T07:17:58.446Z",
      updatedAt: "2020-12-26T07:17:58.446Z",
      __v: 0,
    },
    {
      _id: "5fe6e3a7bb6f3867879f69a4",
      senderId: "5fe5bc013fae5014fb8de01e",
      content: "dkfcbsdjcjkbhj",
      conversationId: "5fe5bb233fae5014fb8de01d",
      createdAt: "2020-12-26T07:17:59.082Z",
      updatedAt: "2020-12-26T07:17:59.082Z",
      __v: 0,
    },
    {
      _id: "5fe6e3a7bb6f3867879f69a5",
      senderId: "5fe5bc013fae5014fb8de01e",
      content: "dkfcbsdjcjkbhj",
      conversationId: "5fe5bb233fae5014fb8de01d",
      createdAt: "2020-12-26T07:17:59.464Z",
      updatedAt: "2020-12-26T07:17:59.464Z",
      __v: 0,
    },
    {
      _id: "5fe6e3a7bb6f3867879f69a6",
      senderId: "5fe5bc013fae5014fb8de01e",
      content: "dkfcbsdjcjkbhj",
      conversationId: "5fe5bb233fae5014fb8de01d",
      createdAt: "2020-12-26T07:17:59.987Z",
      updatedAt: "2020-12-26T07:17:59.987Z",
      __v: 0,
    },
    {
      _id: "5fe6e3a8bb6f3867879f69a7",
      senderId: "5fe5bc013fae5014fb8de01e",
      content: "dkfcbsdjcjkbhj",
      conversationId: "5fe5bb233fae5014fb8de01d",
      createdAt: "2020-12-26T07:18:00.168Z",
      updatedAt: "2020-12-26T07:18:00.168Z",
      __v: 0,
    },
    {
      _id: "5fe6e3a8bb6f3867879f69a8",
      senderId: "5fe5bc013fae5014fb8de01e",
      content: "dkfcbsdjcjkbhj",
      conversationId: "5fe5bb233fae5014fb8de01d",
      createdAt: "2020-12-26T07:18:00.320Z",
      updatedAt: "2020-12-26T07:18:00.320Z",
      __v: 0,
    },
    {
      _id: "5fe6e3a8bb6f3867879f69a9",
      senderId: "5fe5bc013fae5014fb8de01e",
      content: "dkfcbsdjcjkbhj",
      conversationId: "5fe5bb233fae5014fb8de01d",
      createdAt: "2020-12-26T07:18:00.472Z",
      updatedAt: "2020-12-26T07:18:00.472Z",
      __v: 0,
    },
    {
      _id: "5fe6e3a8bb6f3867879f69aa",
      senderId: "5fe5bc013fae5014fb8de01e",
      content: "dkfcbsdjcjkbhj",
      conversationId: "5fe5bb233fae5014fb8de01d",
      createdAt: "2020-12-26T07:18:00.620Z",
      updatedAt: "2020-12-26T07:18:00.620Z",
      __v: 0,
    },
    {
      _id: "5fe6e3a8bb6f3867879f69ab",
      senderId: "5fe5bc013fae5014fb8de01e",
      content: "dkfcbsdjcjkbhj",
      conversationId: "5fe5bb233fae5014fb8de01d",
      createdAt: "2020-12-26T07:18:00.782Z",
      updatedAt: "2020-12-26T07:18:00.782Z",
      __v: 0,
    },
    {
      _id: "5fe6e3a8bb6f3867879f69ac",
      senderId: "5fe5bc013fae5014fb8de01e",
      content: "dkfcbsdjcjkbhj",
      conversationId: "5fe5bb233fae5014fb8de01d",
      createdAt: "2020-12-26T07:18:00.887Z",
      updatedAt: "2020-12-26T07:18:00.887Z",
      __v: 0,
    },
    {
      _id: "5fe6e3aabb6f3867879f69ad",
      senderId: "5fd2489d71c8f43084d6746d",
      content: "csdkadjcbnsd",
      conversationId: "5fe5bb233fae5014fb8de01d",
      createdAt: "2020-12-27T07:18:02.666Z",
      updatedAt: "2020-12-27T07:18:02.666Z",
      __v: 0,
    },
  ];

  var [bg, state] = React.useState({
    backgroundImage: "url(./images/casestudy.jpeg)",
  });
  function background({ val }) {
    if (val === "App Development")
      state((bg = { backgroundImage: "url(./images/android.jpeg)" }));
  }

  return (
    <div className="all" style={{ bg }}>
      <div className="container bootstrap snippets bootdey">
        <div className="tile tile-alt" id="messages-main">
          <div className="ms-menu">
            <div className="ms-user clearfix">
              <div className="sub-heading">Channels</div>
            </div>
            <div className="list-group lg-alt scroll">
              <Rooms token={token} user={user} setClickedRoomName={setClickedRoomName} setClickedRoomMembers={setClickedRoomMembers}/>
              <div className="ms-user clearfix">
                <div className="sub-heading">Members</div>
              </div>
              {clickedRoomMembers.map(clickedRoomMember => <Member userId={clickedRoomMember.id}/>)}
            </div>
          </div>
          {console.log(clickedRoomName)}
          {clickedRoomName?
          //if clicked room true
          <div className="ms-body">
          <div className="action-header clearfix">
            <div
              className="d-none d-block d-sm-block d-md-none"
              id="ms-menu-trigger"
            >
              <i className="fa fa-bars" />
            </div>
            <div className="pull-left roomname">
              <div className="lv-avatar pull-left"></div>
              <div className="sub-heading">{clickedRoomName}</div>
            </div>
          </div>

          {/* MESSAGES START FROM HERE*/}

          <div className="messages">
            <div className="reverse">
              {roomMessages.map(
                ({ senderId, content, conversationId, createdAt }) => (
                  <Message
                    senderId={senderId}
                    content={content}
                    conversationId={conversationId}
                    createdAt={createdAt}
                  />
                )
              )}
            </div>
          </div>
          {/* MESSAGES END */}
          <div className="msb-reply">
            <textarea
              placeholder="What's on your mind..."
              defaultValue={""}
            />
            <button>
              <i className="fa fa-paper-plane-o" />
            </button>
          </div>
        </div>
          ://else
          <div>Not Clicked</div>}
          
          {/* <div className="msb-reply">
            <textarea placeholder="What's on your mind..." defaultValue={""} />
            <button>
              <i className="fa fa-paper-plane-o" />
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}
export default ChatRoom;
