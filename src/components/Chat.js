import React from "react";
import Navbar from "./navbar";
import Sidebar from "./Sidebar";
import ChatRoom from "./ChatRoom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./Chat.css";

function Chat(){
    return (
     <div className="chat-page">   
      <Router>
       <Navbar />
         <div className="chat_body">
          <Sidebar />

          <Switch>
              <Route path="/chat/room/:roomId">
                  
                     <ChatRoom/> 
              </Route>
              <Route path="/">
                  <h1>Welcome</h1>
              </Route>
          </Switch>
         </div>
      </Router>
     </div>

    );
}
export default Chat;
