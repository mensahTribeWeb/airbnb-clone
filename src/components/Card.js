import React from "react";
import cardImg from "../img/katie.png";
import redStar from "../img/angry.png";

export default function Card () {
  return (

    <div className="card">
      <img className="card--img" src={cardImg} alt="katie zaferes" />
      <div className="card--stats">
        <img className="star" src={redStar} alt="star" />
        <span className="card--stats--percent">5.0</span>
        <span className="card--stats--count gray">(6) ◾ </span>
        <span className="card--stats--location gray">USA</span>
      </div>
      <p className="card--quote">Life lessons with Katie Zaferes</p>
      <p className="card--price"><strong>From $136</strong> / person</p>

    </div>

  );
} 