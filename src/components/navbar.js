import React from "react";
import "./navbar.css"
//<img  src={require('./zine.png')} width="30" height="30" className="d-inline-block align-top" alt="" />

function Navbar(){
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <a className="navbar-brand" href="#"><b>Z I N E</b></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav project">
      
    </div>
    <div className="user">
      
    </div>
    <div  className="logout">
      Logout
    </div>
  </div>
</nav>
    );
}
export default Navbar;