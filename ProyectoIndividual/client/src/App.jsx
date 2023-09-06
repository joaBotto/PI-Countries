import "./App.css";
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Landing from "./components/landing/landing";
import Home from "./components/home/home";
import Detail from "./components/detail/detail";
import Form from "./components/form/form";
import Countries from "./components/countries/countries";
import Nav from "./components/nav/nav";
import SearchBar from "./components/searchBar/searchbar";

function App() {
  const location = useLocation();
  return (
    <>
      {/* {location.pathname !== "/" && <Nav />} */}
      <Routes>
        <Route exact path="/" element={<Landing />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
        <Route path="/form" element={<Form />}></Route>
      </Routes>
    </>
  );
}

export default App;
