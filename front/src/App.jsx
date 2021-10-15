import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Admin from "./components/Admin";
import Home from "./components/Home";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import Signup from "./components/Signup";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/users/login" component={Login} />
        <Route path="/users/signup" component={Signup} />
        <Route exact path="/users/admin" component={Admin} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
