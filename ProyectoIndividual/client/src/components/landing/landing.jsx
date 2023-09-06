import React from "react";
import { Link } from "react-router-dom";
import "./landing.css";

const Landing = () => {
  return (
    <>
      <div>
        <h2>Click on the world and let start the experience</h2>
        <Link to="/home">
          <button className="start-button"></button>
        </Link>
      </div>
    </>
  );
};
export default Landing;
