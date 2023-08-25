import React from "react";
import { Link } from "react-router-dom";
import "./landing.css";

const Landing = () => {
  return (
    <>
      <div>
        <Link to="/home">
          <button className="start-button">START</button>
        </Link>
      </div>
    </>
  );
};
export default Landing;
