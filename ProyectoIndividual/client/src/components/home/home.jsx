import React from "react";
import { Link, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import "./home.css";
import Countries from "../countries/countries";

const Home = () => {
  const { pathname } = useLocation();
  const [countries, setCountries] = useState();
  return (
    <>
      <h1>Soy el home</h1>
      <Link to="/">
        <button className="back-button">BACK</button>
      </Link>
      <Link to="/form">
        <button className="back-button">CREATE</button>
      </Link>
      <Link to="/detail">
        <button className="back-button">DETAIL</button>
      </Link>
    </>
  );
};

export default Home;
