import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./detail.css";

export default function Detail() {
  const [country, setCountry] = useState({});
  const { id } = useParams();
  const [isSelected, setIsSelected] = useState(false);
  useEffect(() => {
    axios
      .get(`http://localhost:3001/countries/${id}`)
      .then((res) => {
        setCountry(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const handleFlagClick = () => {
    setIsSelected(true);
  };

  return (
    <div className={`detailBig ${isSelected ? "selected" : ""}`}>
      <h1 className="name">{country.name}</h1>
      <hr />
      <img
        src={country.image}
        alt="flag"
        onClick={handleFlagClick}
        className="flagDetail"
      />
      <br />
      <select name="activities">
        <option>
          <h3>
            Activities:{" "}
            {country.activities
              ? country.activities.join(", ")
              : "No activities available"}
          </h3>
        </option>
      </select>

      <h3>Country id: {id}</h3>
      <h3>Continent: {country.continent}</h3>
      <h3>Capital: {country.capital}</h3>
      <h3>Sub Region: {country.subregion}</h3>
      <h3>Population: {country.population}</h3>
      <h3>Area: {country.area}km²</h3>
      <Link to="/home">
        <button className="buttonBack">Back to home</button>
      </Link>
    </div>
  );
}
