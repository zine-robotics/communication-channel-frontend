import React from 'react';
import Chat from "./components/Chat"
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
          <Route path="/chat" component={Chat} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
