import React, { setState, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Admin from "./components/Admin";
import Home from "./components/Home";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import Signup from "./components/Signup";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/users/login">
          <Login />
        </Route>
        <Route path="/users/signup">
          <Signup />
        </Route>
        <Route exact path="/users/admin">
          <Admin isLogged={isLogged} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
