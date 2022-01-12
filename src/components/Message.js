import React from "react";
import ReactMarkdown from "react-markdown";
import "./css/ChatRoom.css";
import gfm from "remark-gfm";

function formatAMPM(date) {
  var year = date.getFullYear();
  var dt = date.getDate();
  var month = date.getMonth() + 1;
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime =
    dt + "/" + month + "/" + year + " " + hours + ":" + minutes + ampm;
  return strTime;
}

function Message({ senderId, content, createdAt, user, senderName }) {
  // const [senderName, setSenderName] = useState("");
  // const getUserInfo = async () => {
  //   const res = await axios.get("/user", {
  //     params: {
  //       userId: senderId,
  //     },
  //   });
  //   if (res.status === 200) {
  //     setSenderName(res.data.user.fullName);
  //   } else {
  //     console.log(res);
  //   }
  // };
  // useEffect(() => {
  //   getUserInfo();
  // });
  if (content.startsWith("data:image/")) {
    if (user._id === senderId) {
      return (
        <div className="message-feed right">
          <div className="pull-right" />
          <div className="media-body">
            <h5>{senderName}</h5>
            <div className="image-file">
              <img src={content} alt="image file" width={50}></img>
            </div>
            <small className="mf-date">{formatAMPM(new Date(createdAt))}</small>
          </div>
        </div>
      );
    } else {
      return (
        <div className="message-feed media">
          <div className="pull-left" />
          <div className="media-body">
            <h5>{senderName}</h5>
            <div className="image-file">
              <img src={content} alt="image file" height={200} width={200}></img>
            </div>
            <small className="mf-date">{formatAMPM(new Date(createdAt))}</small>
          </div>
        </div>
      );
    }
  } else {
    if (user._id === senderId) {
      return (
        <div className="message-feed right">
          <div className="pull-right" />
          <div className="media-body">
            <h5>{senderName}</h5>
            <div className="mf-content">
              <ReactMarkdown plugins={[gfm]} children={content} />
            </div>
            <small className="mf-date">{formatAMPM(new Date(createdAt))}</small>
          </div>
        </div>
      );
    } else {
      return (
        <div className="message-feed media">
          <div className="pull-left" />
          <div className="media-body">
            <h5>{senderName}</h5>
            <div className="mf-content">
              <ReactMarkdown plugins={[gfm]} children={content} />
            </div>
            <small className="mf-date">{formatAMPM(new Date(createdAt))}</small>
          </div>
        </div>
      );
    }
  }
}
export default Message;
