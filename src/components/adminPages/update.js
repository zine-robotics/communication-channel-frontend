import "../../App.css";
import React,{ useState, useLayoutEffect, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import config from "../../config.json";

function Update(props) {
  const [email, setEmail] = useState("");
  const [value, setValue] = useState(false);
  const [data, setData] = useState("");
  const [userID, setUserID] = useState("");

  const [roomID, setRoomID] = useState("")
  //console.log(data);

  const SubmitData = async (e) => {
    e.preventDefault();
    try {
      console.log("data", { email,data });
      const res = await axios.post(
        `${config.server}/admin/${props.name}/update`,
        { email,data }
      );

      if (res.status === 200) {
        console.log(res.data.data);
        console.log("success", value);
        alert("Record Updated successfully");
      } else if (res.status === 234) {
        alert("User already Exists");
        console.log("problems");
      }
    } catch (error) {
      console.log(" error", error);
    }
  };

  const AddUser = async (e) => {
    e.preventDefault();
    try {
      console.log("data", { data });
      const res = await axios.post(
        `${config.server}/joinroom`,
        { roomID,userID }
      );

      if (res.status === 200) {
        console.log(res.data.data);
        console.log("success", value);
        alert("Record Updated successfully");
      } else if (res.status === 234) {
        alert("User already Exists");
        console.log("problems");
      }
    } catch (error) {
      console.log(" error", error);
    }
  };

  const SubmitEmailData = async (e) => {
    e.preventDefault();
    try {
      console.log("data", { email });
      const res = await axios.post(
        `${config.server}/admin/${props.name}/read`,
        { email }
      );

      console.log("user", res.data.data);
      setData(res.data.data);

      setRoomID(res.data.data._id);
      if (res.status === 200) {
        
        console.log("success", value);
        //alert("User Created successfully");
      } else if (res.status === 234) {
        alert("User already Exists");
        console.log("problems");
      }
    } catch (error) {
      console.log(" error", error);
    }
  };

 
  return (
    <div className="">
      <h3 className="text-white">Update {props.name}</h3>
      <div>
        <form onSubmit={SubmitEmailData}>
          <input
            placeholder="enter email"
            className="p-2"
            value={email}
            onChange={(a) => {
              setEmail(a.target.value);
            }}
          />
          <button className="btn btn-success custom" type="submit" >Submit</button>
        </form>
      </div>
      <div>
        <form onSubmit={SubmitData}>
          {Object.entries(data).map(([key, value]) => {
            return (
              <div key={key} className="reader">
                <label className="label text-white">{key}</label> 
                <input className="input p-2" defaultValue={value} onChange={(a)=>{data[key]=a.target.value}}/>
              </div>
            );
          })}
          <button className="btn btn-danger custom" type="submit">Submit</button>
        </form>
      </div>
      {(props.name ==="rooms") && 
      <div>
        <h3 className="text-white">Add User</h3>
      <form onSubmit={AddUser}>
        <label className="label text-white">User ID</label>
        <input className="input p-2 mb-2" placeholder="userID" onChange={(a)=>{setUserID(a.target.value)}}/>
        <label className="label text-white">Room ID</label>
        <input className="input p-2" value={roomID} onChange={(a)=>{setUserID(a.target.value)}}/>
      
         
          <button className="btn btn-danger custom" type="submit">Submit</button>
        </form></div>}
    </div>
  );
}

export default Update;
