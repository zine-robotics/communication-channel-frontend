import React from "react";
import "./css/navbar.css";
import Logo from "./images/zinechat.png";
import clearSession from "../helpers/signout"
function Navbar() {
  return (
    <nav>
      {/* <input type="checkbox" id="check" />
      <label for="check" class="checkbtn">
        <i class="fas fa-bars"></i>
      </label> */}
      <label className="logo">ZINE</label>
      
        {/* <li>
          <a href="#">
            Project Name
          </a>
        </li>
        <li></li>
        <li>
          <a href="#">Username</a>
        </li> */}
        
          <button onClick = {clearSession}><a className="active" href="/">
            Logout
          </a></button>
          
       
    </nav>
  );
}
export default Navbar;
