import React from "react";
import $ from "jquery";
import "./css/navbar.css";
import Logo from "./images/zinechat.png";
import clearSession from "../helpers/signout";
import MoreVertIcon from '@material-ui/icons/MoreVert';

// $(function () {
//   if ($("#ms-menu-trigger")[0]) {
//     $("body").on("click", "#ms-menu-trigger", function () {
//       $(".ms-menu").toggleClass("toggled");
//     });
//   }
// });

// document.querySelector('.mini-photo-wrapper').addEventListener('click', function() {
//   document.querySelector('.menu-container').classList.toggle('active');
// });

$(function() {
	var $dropDownMenu = $(".avatar-dropdown-menu");

	$dropDownMenu.click(function(e) {		
		e.stopPropagation();

		$(document).on("click", menuCloseListener);

		toggleMenu();
	});

	var toggleMenu = function() {
		$dropDownMenu.toggleClass("open");
	}

	var menuCloseListener = function() {
		toggleMenu();

		$(document).off("click", menuCloseListener);
	}
});
 

function Navbar() {
 
  return (
    <nav>
      <label className="logo">ZINE</label>
      {/* <input type="checkbox" id="check" />
      <label for="check" class="checkbtn">
        <i class="fas fa-bars"></i>
      </label> */}
        
      <div className='avatar-dropdown-menu'>
      <div className='avatar-image'>
      <div className='tag'>A</div>
      {/* <MoreVertIcon/> */}
      </div>
      <div className='avatar-dropdown-menu-items'>
        <ul>
          <li>
            <a>Username</a>
          </li>
          <li>
            <a>Project Name</a>
          </li>
          <li onClick = {clearSession}>
            <a className="active" href="/">Log out</a>
          </li>
        </ul>
      </div>
    </div>
        
          {/* <button onClick = {clearSession}><a className="active" href="/">
            Logout
          </a></button> */}   
    </nav>
  );
}
export default Navbar;
