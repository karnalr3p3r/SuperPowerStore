import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./components/app";
import About from "./components/about";
import Login from "./components/Login"
import SuperPower from "./components/SuperPower";
import theArsenal from "./components/store";


import "./style/main.scss";
import NavBar from "./components/NavBar";

function main() {

  ReactDOM.render(
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route exact path="/login">
        <Login />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/SuperPower">
          <SuperPower />
        </Route>
        <Route path="/theArsenal">
          <theArsenal />
        </Route>
      </Switch>
    </BrowserRouter>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
