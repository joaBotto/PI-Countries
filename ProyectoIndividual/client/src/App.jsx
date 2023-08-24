import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Welcome from "./components/landing/landing";
import Home from "./components/home/home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
