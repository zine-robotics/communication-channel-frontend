import "./vendor/bootstrap/css/bootstrap.min.css";
import "./fonts/font-awesome-4.7.0/css/font-awesome.min.css";
import "./vendor/animate/animate.css";
import "./vendor/css-hamburgers/hamburgers.min.css";
import "./vendor/select2/select2.min.css";
import "./css/util.css";
import "./css/main.css";
import React from "react";
import Logo from "./images/zinelogo.jpg";

const Signup = () => {
  return (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100">
          <div className="login100-pic js-tilt" data-tilt>
          <img src={Logo} alt="img" />
          </div>

          <form className="login100-form validate-form">
            <span className="login100-form-title">Signin to Zine chat</span>
            <div className="wrap-input100 validate-input">
              <input
                className="input100"
                type="text"
                name="firstName"
                placeholder="First Name"
              />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <i className="fa fa-address-book" aria-hidden="true"></i>
              </span>
            </div>

            <div className="wrap-input100 validate-input">
              <input
                className="input100"
                type="text"
                name="lastName"
                placeholder="Last Name"
              />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <i className="fa fa-address-book" aria-hidden="true"></i>
              </span>
            </div>

            <div className="wrap-input100 validate-input">
              <input
                className="input100"
                type="text"
                name="rollNumber"
                placeholder="Roll Number"
              />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <i className="fa fa-info" aria-hidden="true"></i>
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
                name="interest"
                placeholder="Domain of Interest"
              />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <i className="fa fa-info" aria-hidden="true"></i>
              </span>
            </div>

            <br />

            <div className="wrap-input100 validate-input">
              <h5>Domain of Interest:</h5>
              <br />
              <input type="radio" id="web" name="interest" value="web" />
              <label for="web">Web Development</label>
              <br />
              <input type="radio" id="app" name="interest" value="app" />
              <label for="app">App Development</label>
              <br />
              <input type="radio" id="cad" name="interest" value="cad" />
              <label for="cad">Cad Modelling</label>
              <br />
              <input type="radio" id="ip" name="interest" value="ip" />
              <label for="ip">Image Processing</label>
              <br />
              <input type="radio" id="ml" name="interest" value="ml" />
              <label for="ml">Machine Learning</label>
              <br />
              <input type="radio" id="pcb" name="interest" value="pcb" />
              <label for="pcb">PCB Design</label>
              <br />
              <input type="radio" id="algo" name="interest" value="algo" />
              <label for="algo">Algorithm</label>
              <br />
              <input type="radio" id="casestudy" name="interest" value="casestudy" />
              <label for="casestudy">Robotics Case Study</label>
              <br />
            </div>

            <div className="container-login100-form-btn">
              <button className="login100-form-btn">Sign Up</button>
            </div>

            <div className="text-center p-t-136">
              <a className="txt2" href="/">
                Login
                <i
                  className="fa fa-long-arrow-right m-l-5"
                  aria-hidden="true"
                ></i>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
