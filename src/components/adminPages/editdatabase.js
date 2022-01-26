import "../css/admin.css";
import React ,{ useState, useLayoutEffect, useEffect } from "react";
import { Switch,BrowserRouter, Route } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import config from "../../config.json";
import Create from "./create";
import Read from "./read";
import Update from "./update";
import Delete from "./delete";
function EditDatabase(props) {
  const [createActive,setCreateActive] = useState(true);
  const [readActive,setReadActive] = useState(false);
  const [updateActive,setUpdateActive] = useState(false);
  const [deleteActive,setDeleteActive] = useState(false);
  const [readMessage,setReadMessage] = useState("");
  const [apiCall,setApiCall] = useState("");
  const [fields,setFields] = useState({});
  const [operation,setOperation] = useState("create")

  useEffect(()=>{
    if(props.name==="user"){
      setApiCall(props.name);
      setReadMessage("Enter Email");
      setFields({
        "name":"default", 
        "email":"a@mnit.ac.in",
        "rollNumber":"1234abc1234",
        "role":"fresher",
        "college":"MNIT",
        "password":"default_password"
      });
    }else if(props.name==="rooms"){
      setApiCall(props.name);
      setReadMessage("Enter RoomName");
      setFields({
        "conversationName":"default", 
      })
    }else if(props.name==="messages"){
      setApiCall(props.name);
      setReadMessage("Enter RoomID");

      setFields({
        "senderId":"60e93365ce5ecd0015a74b04",
        "content": "message sent succefully",
        "conversationId": "60e9373ace5ecd0015a74b07",
        "senderName": "admin", 
      })
    }
    
  },[props.name,operation]);

  

  console.log("fields", fields);
  return (
    <div className="editDatabase">
        <div className="button-arrange">
        <button className={createActive ? 'crud-button':'crud-button-inactive'} onClick={() => {
                setOperation("create");
                setCreateActive(true);
                setReadActive(false);
                setUpdateActive(false);
                setDeleteActive(false);
              }}>
              Create
            </button>
            <button className={readActive ? 'crud-button':'crud-button-inactive'} onClick={() => {
                setOperation("read")
                setCreateActive(false);
                setReadActive(true);
                setUpdateActive(false);
                setDeleteActive(false);
              }}>
              Read
            </button>
            <button className={updateActive ? 'crud-button':'crud-button-inactive'} onClick={() => {
                setOperation("update")
                setCreateActive(false);
                setReadActive(false);
                setUpdateActive(true);
                setDeleteActive(false);
              }}>
              Update
            </button>
            <button className={deleteActive ? 'crud-button':'crud-button-inactive'} onClick={() => {
                setOperation("delete")
                setCreateActive(false);
                setReadActive(false);
                setUpdateActive(false);
                setDeleteActive(true);
              }}>
              Delete
            </button>
          </div>
          <div className="h-break"/>
        <div className="backdrop">
          {operation==="create" && <Create name={apiCall} fields={fields}/>}
          {operation==="read" && <Read name={apiCall} readMessage={readMessage}/>}
          {operation==="update" && <Update name={apiCall} fields={fields} readMessage={readMessage}/>}
          {operation==="delete" && <Delete name={apiCall} readMessage={readMessage}/>}
          </div>
    </div>
  );
}

export default EditDatabase;
