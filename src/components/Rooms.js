import React, { useEffect } from "react";
import "./newChatRoom.css";
import Channel from "./Channel";
import axios from "../helpers/axios";

const Rooms = ({ token, user }) => {
  const getRooms = async () => {
    const res = await axios.get("/rooms", {
      userId: user._id
    });
    if (res.status === 200) {
      const rooms = res.chats;
    } else {
      console.log(res);
    }
  };
useEffect(() => {
  getRooms();
}, [])
  return (
    <div className="ms-menu">
      <div className="ms-user clearfix">
        {/* <img
                src="https://bootdey.com/img/Content/avatar/avatar1.png"
                alt=""
                className="img-avatar pull-left"
              /> */}
        <div>USERNAME</div>
      </div>
      {/*<div className="p-15">
               <div className="dropdown">
                  <a
                    className="btn btn-primary btn-block"
                    href
                    data-toggle="dropdown"
                  >
                    Messages <i className="caret m-l-5" />
                  </a>
                <ul className="dropdown-menu dm-icon w-100">
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
              </div> 
            </div> */}
      <div className="list-group lg-alt">
        <Channel name={"Web Development"} />
        <Channel name={"App Development"} />
        <Channel name={"Machine Learning"} />
        <Channel name={"Robotics Case Study"} />
        <Channel name={"Algo Pseudo"} />
      </div>
    </div>
  );
};

export default Rooms;
