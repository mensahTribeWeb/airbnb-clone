import React from "react";
import heroImg from "./img/airbnb-hero.png"


export default function Hero () {
  return (
    <div className="hero">
      <img className="hero--img" src={heroImg}alt="collage of users" />
      <h1 className="hero--title">Online Experiences</h1>
      <p className="hero--p">Join unique interactive activities led by one-of-a-kind hosts-all without leaving home </p>
    </div>
  );
}