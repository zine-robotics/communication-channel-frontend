import "./fonts/font-awesome-4.7.0/css/font-awesome.min.css";
import "./animate/animate.css";
import "./css/util.css";
import "./css/main.css";
import Logo from "./images/ZINE.png";
import React, { useState } from "react";
import Tilt from "react-tilt";
import { useHistory } from "react-router";
import axios from "../helpers/axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const PostData = async (e) => {
    e.preventDefault();
    // regex for testing email is left
    const res = await axios.post("/signin", {
      email,
      password,
    });
    if (res.status === 200) {
      const { token, user } = res.data;
      console.log("Successfully Signed in");
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      history.push("/chat");
    } else {
      console.log("Failed to Signin", res);
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
              style={{ height: 300, width: 440 }}
            >
              <div className="Tilt-inner">
                <img width="300px" height="300px" src={Logo} alt="img" />
              </div>
            </Tilt>
          </div>

          <form className="login100-form validate-form" onSubmit={PostData}>
            <span className="login100-form-title">Login</span>

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

            <div className="container-login100-form-btn">
              {/* <Link to="/chat" className="login100-form-btn">
                Sign In
              </Link> */}
              <a className="login100-form-btn"><button type="submit"><span className="colorit">SIGN IN</span></button></a>

            </div>

            <div className="text-center p-t-136">
              <Link to="/signup" className="txt2">
                Create your Account
                <i className="fa m-l-5" aria-hidden="true"></i>
              </Link>             
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
