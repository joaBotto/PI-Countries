import Paginated from "../paginated/paginated";
import "./home.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getCountry } from "../../redux/actions";
import Order from "../order/order";
import { Link } from "react-router-dom";
import SearchBar from "../searchBar/searchbar";

const Home = () => {
  const allCountries = useSelector((state) => state.filteredCountries);
  // utilizamos el useSelector para traernos el estado de filteredCountries del store global de redux y lo asignamos a la variable 'allCountries'.

  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  // creamos un estado local llamado 'currentPage' que hara referencia a la pagina actual en la que nos encontramos, iniciamos en la primera (1).

  const [selectedContinent, setSelectedContinent] = useState(""); // Estado para el filtro de continente
  const [selectedActivity, setSelectedActivity] = useState(""); // Estado para el filtro de actividad
  const handleContinentChange = (event) => {
    setSelectedContinent(event.target.value);
  };
  const handleActivityChange = (event) => {
    setSelectedActivity(event.target.value);
  };

  const [countriesPerPage] = useState(10);

  useEffect(() => {
    dispatch(getCountry());
  }, [dispatch, selectedContinent, selectedActivity]);

  const filteredCountries = allCountries.filter((country) => {
    if (selectedContinent && country.continent !== selectedContinent) {
      return false;
    }
    if (selectedActivity && !country.activities.includes(selectedActivity)) {
      return false;
    }
    return true;
  });

  const totalPageCount = Math.ceil(filteredCountries.length / countriesPerPage);
  const indexLastCountry = currentPage * countriesPerPage;
  const indexFirstCountry = indexLastCountry - countriesPerPage;
  const currentCountries = filteredCountries.slice(
    indexFirstCountry,
    indexLastCountry
  );

  const paginated = (pageNum) => {
    setCurrentPage(pageNum);
  };
  return (
    <>
      <h1 className="title">
        Welcome to the world countries...
        <input placeholder="Search your country" className="searchBar"></input>
        <button className="buttonOut">Search</button>
      </h1>

      <Order />
      <div className="countryCards">
        {currentCountries.map((country) => (
          <div key={country.id} className="countryCard">
            <h2>{country.name}</h2>
            <p>{country.continent}</p>
            <Link to={`/detail/${country.id}`}>
              <img src={country.image} alt="flag" />
            </Link>
          </div>
        ))}
      </div>

      <div>
        <Paginated
          countriesPerPage={countriesPerPage}
          totalPageCount={totalPageCount}
          paginated={paginated}
        />
      </div>
      <Link to="/">
        <button className="buttonOut">Log Out</button>
      </Link>
    </>
  );
};

export default Home;
