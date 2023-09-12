import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchCountry } from "../../redux/actions";
import "./searchbar.css";
export default function SearchBar({ setSelectedCountry }) {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.countries);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (search.trim() === "") {
      alert("You must type something");
      return;
    }
    const toSearch = search.toLowerCase();
    const validate = allCountries.filter((e) =>
      e.name.toLowerCase().includes(toSearch)
    );
    if (validate.length < 1) {
      return alert("The country does not exist");
    } else {
      await dispatch(searchCountry(search));
      setSelectedCountry(validate[0]);
    }
    setSearch("");
  };
  const onInputChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Enter country name"
          onChange={onInputChange}
          value={search}
          className="searchBar"
        />
        <input type="submit" value="Search" className="buttonOut" />
      </form>
    </div>
  );
}
