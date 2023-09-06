import { useState } from "react";

export default function SearchBar() {
  const [id, setId] = useState("");
  function handleChange(event) {
    setId(event.target.value);
  }
  return (
    <>
      <div className="searchCointainer">
        <input
          type="search"
          className="searchInput"
          value={id}
          onChange={handleChange}
          placeholder="Country"
        />
        <button className="buttonSend" onClick={() => onSearch(id)}>
          Find
        </button>
      </div>
    </>
  );
}
