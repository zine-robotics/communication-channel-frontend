import React from "react";
import "./navbar.css";
import Logo from "./images/zinechat.png";
import clearSession from "../helpers/signout"
function Navbar() {
  return (
    <nav>
      <input type="checkbox" id="check" />
      <label for="check" class="checkbtn">
        <i class="fas fa-bars"></i>
      </label>
      <label className="logo">ZINE</label>
      <ul>
        {/* <li>
          <a href="#">
            Project Name
          </a>
        </li>
        <li></li>
        <li>
          <a href="#">Username</a>
        </li> */}
        <li>
          <button onClick = {clearSession}><a className="active" href="/">
            Logout
          </a></button>
          
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
