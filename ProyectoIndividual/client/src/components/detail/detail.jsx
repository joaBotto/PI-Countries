import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./detail.css";

export default function Detail() {
  const [country, setCountry] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:3001/countries/${id}`)
      .then((res) => {
        setCountry(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
    console.log(country);
  }, [id]);
  return (
    <div>
      <Link to="/home">
        <button>Back to home</button>
      </Link>
      <h1>{country.name}</h1>
      <img src={country.image} alt="flag" />
      <h3>Country id: {id}</h3>
      <h3>Continent: {country.continent}</h3>
      <h3>Capital: {country.capital}</h3>
      <h3>Sub Region: {country.subregion}</h3>
      <h3>Population: {country.population}</h3>
      <h3>Area: {country.area}km²</h3>
    </div>
  );
}
