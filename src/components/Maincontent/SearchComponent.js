// SearchComponent.js
import React, { useState, useEffect } from "react";

const SearchComponent = ({ onSearch, onSuggestionClick }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setmessage] = useState("");
  function handlepredict() {
    if (searchTerm.trim() === "") {
      return setmessage("enter the location");
    } else {
      return setmessage("here is your location");
    }
  }

  const handleSearchChange = async (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value.length < 3) {
      setSuggestions([]);
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${e.target.value}&format=json&limit=5`
      );
      const data = await response.json();
      setSuggestions(data);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
      setSuggestions([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion.display_name);
    onSuggestionClick(suggestion);
    setSuggestions([]);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    //location
    <div className="bg-white p-4 rounded shadow-sm">
      <h2 className="h5 font-weight-bold mb-2 border-bottom border-primary d-inline-block">
        Location
      </h2>
      <div className="input-group mb-4">
        <div className="input-group-prepend">
          <span className="input-group-text bg-white border-right-0"></span>
        </div>
        <input
          className="form-control border-left-0"
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search for a place"
          style={{ marginTop: "10px" }}
        />
        <button onClick={handleSearch} style={{ marginTop: "5px" }}>
          Search
        </button>
        {/* suggestion list */}
        {isLoading && <div>Loading suggestions...</div>}

        {suggestions.length > 0 && (
          <ul
            className="suggestions"
            style={{
              marginTop: "5px",
              border: "1px solid gray",
              listStyleType: "none",
              padding: "0",
              backgroundColor: "white",
            }}
          >
            {suggestions.map((suggestion) => (
              <li
                key={suggestion.place_id}
                onClick={() => handleSuggestionClick(suggestion)}
                style={{ padding: "5px", cursor: "pointer" }}
              >
                {suggestion.display_name}
              </li>
            ))}
          </ul>
        )}
        <div className="input-group-append"></div>
      </div>
      {/* Predict */}

      <button className="btn btn-primary mb-4" onClick={handlepredict}>
        Predict
      </button>
      <div>{message}</div>
      <hr />
    </div>
  );
};

export default SearchComponent;
