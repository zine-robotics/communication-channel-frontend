import React from 'react';
//import LoginForm from './components/LoginForm';
import SigninForm from "./components/SigninForm";
//import Chat from "./components/Main"
//import 'bootstrap/dist/css/bootstrap.min.css';
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Signin} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </Router>
          {/* <SigninForm /> */}
    </div>
  );
}

export default App;
