import React from "react";
import redStar from "../img/angry.png";

export default function Card (props) {
  
  
  return (
    
    <div className="card">
      <img 
      src={`../img/${props.img}`} 
      alt="" 
      className="card--img" 
      />
      <div className="card--stats">
        <img 
        className="card--star" 
        src={redStar} 
        alt="star" />
        <span className="card--stats--percent">{props.rating}</span>
        <span className="card--stats--count gray">({props.reviewCount}) ◾ </span>
        <span className="card--stats--location gray">{props.location}</span>
      </div>
      <p className="card--quote">{props.title}</p>
      <p className="card--price"><strong>From ${props.price}</strong> / person</p>

    </div>

  );
} 