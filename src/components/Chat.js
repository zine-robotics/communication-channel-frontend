import React from "react";
import Navbar from "./navbar";
import Sidebar from "./Sidebar";
import "./Chat.css";

function Chat(){
    return (
     <div className="chat-page">   
    <Navbar />
    <div className="chat_body">
       <Sidebar />
    </div>
   </div>

    );
}
export default Chat;