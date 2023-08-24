import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
const Home = () => {
  return (
    <>
      <h1>Soy el home</h1>
      <Link to="/">
        <button className="back-button">BACK</button>
      </Link>
    </>
  );
};

export default Home;
