                                   import React from "react";
import "./newChatRoom.css";
import $ from "jquery";
import Message from "./Message";
import Channel from "./Channel";

$(function () {
  if ($("#ms-menu-trigger")[0]) {
    $("body").on("click", "#ms-menu-trigger", function () {
      $(".ms-menu").toggleClass("toggled");
    });
  }
});

function ChatRoom() {
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
      createdAt: "2020-12-26T07:18:02.666Z",
      updatedAt: "2020-12-26T07:18:02.666Z",
      __v: 0,
    },
  ];
  return (
    <div className="all">
      <div className="container bootstrap snippets bootdey">
        <div className="tile tile-alt" id="messages-main">
          <div className="ms-menu">
            <div className="ms-user clearfix">
              {/* <img
                src="https://bootdey.com/img/Content/avatar/avatar1.png"
                alt=""
                className="img-avatar pull-left"
              /> */}
              <div>USERNAME</div>
            </div>
            {/* <div className="p-15"> */}
              {/* <div className="dropdown"> */}
                {/* <a
                  className="btn btn-primary btn-block"
                  href
                  data-toggle="dropdown"
                >
                  Messages <i className="caret m-l-5" />
                </a> */}
                {/* <ul className="dropdown-menu dm-icon w-100">
                  <li>
                    <a href>
                      <i className="fa fa-envelope" /> Messages
                    </a>
                  </li>
                  <li>
                    <a href>
                      <i className="fa fa-users" /> Contacts
                    </a>
                  </li>
                  <li>
                    <a href>
                      <i className="fa fa-format-list-bulleted"> </i>Todo Lists
                    </a>
                  </li>
                </ul>
              </div> */}
            {/* </div> */}
            <div className="list-group lg-alt">
              <Channel name={"Web Development"} />
              <Channel name={"App Development"} />           
              <Channel name={"Machine Learning"} />           
              <Channel name={"Robotics Case Study"} />           
              <Channel name={"Algo Pseudo"} />                   
              {/* <a className="list-group-item media" href>
                <div className="pull-left">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar2.png"
                    alt=""
                    className="img-avatar"
                  />
                </div>
                <div className="media-body">
                  <div className="list-group-item-heading">
                    Davil Parnell
                  </div>
                  <small className="list-group-item-text c-gray">
                    Fierent fastidii recteque ad pro
                  </small>
                </div>
              </a>
              <a className="list-group-item media" href>
                <div className="pull-left">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar3.png"
                    alt=""
                    className="img-avatar"
                  />
                </div>
                <div className="media-body">
                  <div className="list-group-item-heading">Ann Watkinson</div>
                  <small className="list-group-item-text c-gray">
                    Cum sociis natoque penatibus{" "}
                  </small>
                </div>
              </a>
              <a className="list-group-item media" href>
                <div className="pull-left">
                   <img
                    src="https://bootdey.com/img/Content/avatar/avatar4.png"
                    alt=""
                    className="img-avatar"
                   /> 
                </div>
                <div className="media-body">
                  <div className="list-group-item-heading">Marse Walter</div>
                  <small className="list-group-item-text c-gray">
                    Suspendisse sapien ligula
                  </small>
                </div>
              </a>
              <a className="list-group-item media" href>
                <div className="lv-avatar pull-left">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar5.png"
                    alt=""
                    className="img-avatar"
                  />
                </div>
                <div className="media-body">
                  <div className="list-group-item-heading">Jeremy Robbins</div>
                  <small className="list-group-item-text c-gray">
                    Phasellus porttitor tellus nec
                  </small>
                </div>
              </a>
              <a className="list-group-item media" href>
                <div className="lv-avatar pull-left">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar6.png"
                    alt=""
                    className="img-avatar"
                  />
                </div>
                <div className="media-body">
                  <div className="list-group-item-heading">Reginald Horace</div>
                  <small className="list-group-item-text c-gray">
                    Quisque consequat arcu eget
                  </small>
                </div>
              </a>
              <a className="list-group-item media" href>
                <div className="pull-left">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar7.png"
                    alt=""
                    className="img-avatar"
                  />
                </div>
                <div className="media-body">
                  <div className="list-group-item-heading">Shark Henry</div>
                  <small className="list-group-item-text c-gray">
                    Nam lobortis odio et leo maximu
                  </small>
                </div>
              </a>
              <a className="list-group-item media" href>
                <div className="pull-left">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar1.png"
                    alt=""
                    className="img-avatar"
                  />
                </div>
                <div className="media-body">
                  <div className="list-group-item-heading">Paul Van Dack</div>
                  <small className="list-group-item-text c-gray">
                    Nam posuere purus sed velit auctor sodales
                  </small>
                </div>
              </a>
              <a className="list-group-item media" href>
                <div className="lv-avatar pull-left">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar2.png"
                    alt=""
                    className="img-avatar"
                  />
                </div>
                <div className="media-body">
                  <div className="list-group-item-heading">James Anderson</div>
                  <small className="list-group-item-text c-gray">
                    Vivamus imperdiet sagittis quam
                  </small>
                </div>
              </a>
              <a className="list-group-item media" href>
                <div className="lv-avatar pull-left">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar3.png"
                    alt=""
                    className="img-avatar"
                  />
                </div>
                <div className="media-body">
                  <div className="list-group-item-heading">Kane Williams</div>
                  <small className="list-group-item-text c-gray">
                    Suspendisse justo nulla luctus nec
                  </small>
                </div>
              </a> */}
            </div>
          </div>
          <div className="ms-body">
            <div className="action-header clearfix">
              <div
                className="d-none d-block d-sm-block d-md-none"
                id="ms-menu-trigger"
              >
                <i className="fa fa-bars" />
              </div>
              <div className="pull-left roomname">
                {/* <img
                  src="https://bootdey.com/img/Content/avatar/avatar2.png"
                  alt=""
                  className="img-avatar m-r-10"
                /> */}
                <div className="lv-avatar pull-left"></div>
                <span>Web Development</span>
              </div>
              {/* <ul className="ah-actions actions"> */}
                {/* <li>
                  <a href>
                    <i className="fa fa-trash" />
                  </a>
                </li>
                <li>
                  <a href>
                    <i className="fa fa-check" />
                  </a>
                </li>
                <li>
                  <a href>
                    <i className="fa fa-clock-o" />
                  </a>
                </li> */}
                {/* <li className="dropdown">
                  <a href data-toggle="dropdown" aria-expanded="true">
                    <i className="fa fa-sort" />
                  </a> */}
                  {/* <ul className="dropdown-menu dropdown-menu-right">
                    <li>
                      <a href>Latest</a>
                    </li>
                    <li>
                      <a href>Oldest</a>
                    </li>
                  </ul> */}
                {/* </li> */}
                {/* <li className="dropdown">
                  <a href data-toggle="dropdown" aria-expanded="true">
                    <i className="fa fa-bars" />
                  </a> */}
                  {/* <ul className="dropdown-menu dropdown-menu-right">
                    <li>
                      <a href>Refresh</a>
                    </li>
                    <li>
                      <a href>Message Settings</a>
                    </li>
                  </ul> */}
                {/* </li> */}
              {/* </ul> */}
            </div>

            {/* MESSAGES START FROM HERE*/}

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
        </div>
      </div>
    </div>
  );
}
export default ChatRoom;
