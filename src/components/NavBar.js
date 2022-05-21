import React from "react";
import { Link } from "react-router-dom";
import "../style/navbar.scss";
import Login from "./Login";


export default function NavBar() {
  return (
    <div className="navbar ">
      <Link to="/">HOME</Link>
      <Link to="/about">ABOUT</Link>
      <Link to="/Dashboard">Super Power List</Link>
      <Link to="/store">Store</Link>
      <Link to="/Quiz">Quiz</Link>
      {Login()}
    </div>
  );
}
