import React from "react";
import "./Sidebar.css";
// import CreateIcon from '@material-ui/icons/Create';
// import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
// import ArrowForwardIosSharpIcon from '@material-ui/icons/ArrowForwardIosSharp';
import SidebarOption from "./SidebarOption";

function Sidebar(){
return (
<div className="sidebar">
 <div className="sidebar_header">
  <div className="sidebar_info">
   <h2>Web Development</h2>
   <h3>
   {/* <FiberManualRecordIcon/>  */}
    Ishika
   </h3>
  </div>
  {/* <CreateIcon />  */}
  </div>
  <SidebarOption title="Web Development"/>
  <SidebarOption title="App Development"/>
  <SidebarOption title="PCB Designing"/>
  <SidebarOption title="Algorithms"/>
  <SidebarOption title="Robotics Case Study"/>
  <SidebarOption title="CAD Modelling"/>
   
 

</div>
);
}

export default Sidebar;