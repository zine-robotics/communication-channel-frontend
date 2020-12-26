import React from "react";
import "./navbar.css";
import Logo from "./images/zinechat.png";
function Navbar() {
  return (
    <nav>
      <input type="checkbox" id="check" />
      <label for="check" class="checkbtn">
        <i class="fas fa-bars"></i>
      </label>
      <label className="logo">ZINE</label>
      <ul>
        <li>
          <a href="#">
            Project
          </a>
        </li>
        <li>
          <a href="#">Username</a>
        </li>

        <li>
          <a className="active" href="/">
            Logout
          </a>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
