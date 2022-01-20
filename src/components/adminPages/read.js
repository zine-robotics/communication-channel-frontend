import "../../App.css";
import React,{ useState, useLayoutEffect, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import config from "../../config.json";

function Read(props) {
  const [email, setEmail] = useState("");
  const [value, setValue] = useState(false);
  const [data, setData] = useState("");
  //console.log(data);

  const SubmitData = async (e) => {
    e.preventDefault();
    try {
      console.log("data", { email });
      const res = await axios.post(
        `${config.server}/admin/${props.name}/read`,
        { email }
      );

      console.log("user", res.data);
      setData(res.data.data);
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
      <h3 className="text-white">Read {props.name}</h3>
      <div className="p-4">
        <form onSubmit={SubmitData}>
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
                {Object.entries(data).map(([k,v])=>{
                  console.log(typeof v);
                  if (typeof v === 'object'){
                    return <div className="reader" key={k}>
                      <label className="label text-white">{k}</label>
                      <label className="input">Custom Object</label>
                    </div>}else{
                      return <div className="reader" key={k}>
                      <label className="label text-white border border-white">{k}</label>
                      <label className="input text-white border border-white">{v}</label>
                    </div>
                    }
                })}
            </div>
    </div>
  );
}

export default Read;
