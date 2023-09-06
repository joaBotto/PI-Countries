import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import { useState } from "react";

export default function Nav({ onFilter }) {
  const [continentFilter, setContinentFilter] = useState("");
  const [activityFilter, setActivityFilter] = useState("");

  const handleContinentChange = (event) => {
    const selectedContinent = event.target.value;
    setContinentFilter(selectedContinent);
    // Llamar a la función de filtro con el continente seleccionado
    onFilter(selectedContinent, activityFilter);
  };

  const handleActivityChange = (event) => {
    const selectedActivity = event.target.value;
    setActivityFilter(selectedActivity);
    // Llamar a la función de filtro con la actividad seleccionada
    onFilter(continentFilter, selectedActivity);
  };

  return (
    <div className="nav-container">
      <Link to="/home">Home</Link>
      {/* Agrega el selector desplegable para el continente */}
      <select value={continentFilter} onChange={handleContinentChange}>
        <option value="">Filter by continent</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Americas">Americas</option>
        <option value="Oceania">Oceania</option>
        <option value="Africa">Africa</option>
        <option value="Antarctic">Antarctic</option>
      </select>
      <select value={activityFilter} onChange={handleActivityChange}>
        <option value="">Filter by activity</option>
        <option value="Playa">Playa</option>
        <option value="Montaña">Mountain</option>
        <option value="Valles">Valleys</option>
        <option value="Deportes">Sports</option>
      </select>
    </div>
  );
}
