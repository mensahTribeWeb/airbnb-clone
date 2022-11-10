import React from "react";
import logo from "./img/airbnb.png";

export default function navBar() {
  return(
    <nav className="nav">
      <img className="nav--logo" src={logo} alt="airBnb logo" />
    </nav>
  )
}