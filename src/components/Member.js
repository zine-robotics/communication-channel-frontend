import React, { useEffect, useState } from "react";
import "./css/ChatRoom.css";
import Avatar from "react-avatar";
import axios from "../helpers/axios";

function Member({ userId }) {
  const [memberName, setMemberName] = useState("");
  const getUserInfo = async () => {
    const res = await axios.get("/user", {
      params: {
        userId,
      },
    });
    if(res.status === 200) {
      setMemberName(res.data.user.fullName)
    } else {
      console.log(res)
    }
  };
  useEffect(() => {
    getUserInfo();
  }, []);
  return (
    <a className="list-group-item media" href="#">
      <div className="pull-left avatars">
        <Avatar name={memberName} size="40" round />
      </div>
      <div className="media-body">
        <div className="list-group-item-heading">{memberName}</div>
        {/* <small className="list-group-item-text c-gray"></small> */}
      </div>
    </a>
  );
}
export default Member;
