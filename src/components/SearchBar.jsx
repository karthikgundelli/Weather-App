import React, { useState } from "react";
import './style.css'



const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (city.trim() !== "") {
      onSearch(city);
      setCity("");
    }
  };

  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Enter city name..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSearch}>Fetch Report</button>
    </div>
  );
};

export default SearchBar;
