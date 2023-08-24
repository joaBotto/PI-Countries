import React from "react";
import { Link } from "react-router-dom";
import "./landing.css";

const Welcome = () => {
  return (
    <>
      <div>
        <h1>
          This is the most amazing app to learn about the differents countries
          in the fucking world
        </h1>
        <Link to="/"></Link>
        <Link to="/home">
          <button className="start-button">START</button>
        </Link>
      </div>
    </>
  );
};
export default Welcome;
