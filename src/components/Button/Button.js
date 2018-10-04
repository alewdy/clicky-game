import React from "react";
import "./Button.css";

const Button = props => (
  <div>
    <button className="animal-btn" data-name="New Game"
      onClick={() => props.handleAnimal(props.name)}
    >New Game</button> 
  </div>
);

export default Button;