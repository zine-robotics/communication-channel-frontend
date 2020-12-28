import React from 'react';
import "./ChatInput.css";
import SendIcon from "@material-ui/icons/Send";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";

function ChatInput() {
    return (
        <div className='chatRoom_footer' >
         <SentimentVerySatisfiedIcon />
           <form>
               <input placeholder="Type your message here" />
               <button type="submit">
               <SendIcon />
               </button>
           </form>
        </div>
    )
}

export default ChatInput;
