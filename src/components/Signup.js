import "./vendor/bootstrap/css/bootstrap.min.css";
import "./fonts/font-awesome-4.7.0/css/font-awesome.min.css";
import "./vendor/animate/animate.css";
import "./vendor/css-hamburgers/hamburgers.min.css";
import "./vendor/select2/select2.min.css";
import "./css/util.css";
import "./css/main.css";
import React, { useState } from "react";
import Logo from "./images/ZINE.png";
import Dropdown from "./Dropdown";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
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
  let result
  const getDomainOfInterest = (selected) => {
    console.log(selected.map(a => a.label));
    result = selected.map(a => a.label)
  }
  const PostData = async (e) => {
    e.preventDefault();
    // regex for testing email is left
    console.log(result)
    setDomainOfInterest(result);
    const res = await axios.post("/signup", {
      fullName,
      email,
      password,
      rollNumber,
      domainOfInterest,
    });
    if (res.status === 200) {
      console.log(res.message);
      history.push("/signin");
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
                <img src={Logo} alt="img" />
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
            <span className="login100-form-title">Sign In</span>
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
            <Link to="/chat">
              <button className="login100-form-btn">
                
                  Sign Up
                
              </button>
              </Link>
            </div>

            <div className="text-center p-t-56">
              <Link to="/" className="txt2">
                Login
                <i
                  className="fa m-l-5"
                  aria-hidden="true"
                ></i>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
