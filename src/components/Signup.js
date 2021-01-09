import "./fonts/font-awesome-4.7.0/css/font-awesome.min.css";
import "./animate/animate.css";
import "./css/util.css";
import "./css/main.css";
import React, { useState } from "react";
import Logo from "./images/robo.jpeg";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";
import Tilt from "react-tilt";
import { useHistory } from "react-router";
import axios from "../helpers/axios";

const Signup = () => {
  const history = useHistory();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [domainOfInterest, setDomainOfInterest] = useState([]);
  let result;
  const getDomainOfInterest = (selected) => {
    console.log(selected.map((a) => a.label));
    result = selected.map((a) => a.label);
  };
  const PostData = async (e) => {
    e.preventDefault();
    // regex for testing email is left
    console.log(result);
    setDomainOfInterest(result);
    const res = await axios.post("/signup", {
      fullName,
      email,
      password,
      rollNumber,
      domainOfInterest,
    });
    if (res.status === 200) {
      console.log(res)
      const roomIds = [
        "5ff2fbc9d0eec312cbbb6d95",
        "5ff2fbe0d0eec312cbbb6d96",
        "5ff2fbe5d0eec312cbbb6d97",
        "5ff3517c1273f27108900481",
        "5ff8699f9b6aaa69ffe0266b",
      ];
      domainOfInterest.map((dom) => {
        if (dom === "App Development")
          roomIds.push("5ff2fba4d0eec312cbbb6d93");
        else if (dom === "Web Development")
          roomIds.push("5ff2fbacd0eec312cbbb6d94");
        else if (dom === "Machine Learning")
          roomIds.push("5ff2fbf6d0eec312cbbb6d98");
        else if (dom === "PCB Design")
          roomIds.push("5ff86cc879afa373a9eea8ad");
        else if (dom === "Image Processing")
          roomIds.push("5ff86d2179afa373a9eea8ae");
        else if (dom === "CAD Modelling")
          roomIds.push("5ff86d2e79afa373a9eea8af");
        else if (dom === "Case Study")
          roomIds.push("5ff8752dd4be4906f680b545");
      });
      roomIds.map(async (roomId) => {
          const _res = await axios.post("/joinroom", {
            roomId,
            userId: res.data.data._id,
          });
          if (_res.status === 200) {
            console.log(res.data.message, _res.data.message);
          } else {
            console.log(res);
          }
        });
      history.push("/");
    } else {
      console.log(res);
    }
  };
  return (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100">
          <div className="login100-pic js-tilt" data-tilt>
            <Tilt
              className="Tilt"
              options={{ max: 40 }}
              style={{ height: 250, width: 400 }}
            >
              <div className="Tilt-inner">
                <img src={Logo} alt="img" className="robo"/>
              </div>
            </Tilt>
            <p>
              <br />
              <div className="welcome">
                Welcome <br></br>to<br></br> Zine Comuunication Channel
              </div>
            </p>
          </div>

          <form className="login100-form validate-form" onSubmit={PostData}>
            <span className="login100-form-title">Sign Up</span>
            <div className="wrap-input100 validate-input">
              <input
                className="input100"
                type="text"
                name="firstName"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <i className="fa fa-address-book" aria-hidden="true"></i>
              </span>
            </div>

            <div
              className="wrap-input100 validate-input"
              data-validate="Valid email is required: ex@abc.xyz"
            >
              <input
                className="input100"
                type="text"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <i className="fa fa-envelope" aria-hidden="true"></i>
              </span>
            </div>

            <div
              className="wrap-input100 validate-input"
              data-validate="Password is required"
            >
              <input
                className="input100"
                type="password"
                name="pass"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <i className="fa fa-lock" aria-hidden="true"></i>
              </span>
            </div>

            <div className="wrap-input100 validate-input">
              <input
                className="input100"
                type="text"
                name="rollNumber"
                placeholder="CollegeID"
                value={rollNumber}
                onChange={(e) => setRollNumber(e.target.value)}
              />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <i className="fa fa-info" aria-hidden="true"></i>
              </span>
            </div>

            <br />

            <div className="wrap-input100 validate-input">
              <Dropdown getDomainOfInterest={getDomainOfInterest} />
            </div>

            <div className="container-login100-form-btn">
              {/* <Link to="/chat" className="login100-form-btn">
                Sign Up
              </Link> */}
              <button type="submit">
              <a className="login100-form-btn">
              <span className="colorit">SIGN UP</span> 
              </a>
              </button>
            </div>
           

            <div className="text-center p-t-56">
              <Link to="/" className="txt2">
                Login
                <i className="fa m-l-5" aria-hidden="true"></i>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
