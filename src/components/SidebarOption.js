import React from 'react'
import "./SidebarOption.css";
import { useHistory } from "react-router-dom";


function SidebarOption({ Icon, title, id}){
    const history = useHistory();

    const selectChannel = () => {
        if (id) {
            history.push('/room/${id}')
        } else {
            history.push('title')
        }
    }
    
    return(
        <div className="sidebarOption" onClick={selectChannel}>
         {Icon && <Icon className="sidebarOption_icon" />}
         {Icon ? (
         <h3 /*className="sidebarOption_channel"*/>{title}</h3>
          ) : (
              <h3 className="sidebarOption_channel">
              <span className="sidebarOption_hash">#</span>{title}</h3>
              )
         }
        </div>
    );
}

export default SidebarOption;