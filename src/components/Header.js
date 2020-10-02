import React, { useState } from 'react';
const Header = (props) => {
  const { searchLocation, suggestions, loading, error } = props;
  const [city, setCity] = useState("");
  return(
    <header>
      <p className="app-heading">Weather Forecast App</p>
      <div className="location-input-box">
        <div className="mag-glass-div">
          {loading ? (<img src="/Spinner-1s-200px.svg" alt="Loading" className="spinner" />) : (<img src="/magnifying-glass.svg" alt="magnifying-glass" className="mag-glass"/>)}
        </div>
        <input
          onChange={(e) => {
            setCity(e.target.value)
            searchLocation(e.target.value)
          }}
          type="text"
          value={city} 
          placeholder="Search"
        />
      </div>
      { !suggestions && error === false && 
        <div className="input-status">
          Please search for a city.
        </div> 
      }
      { error === true && 
        <ul className="suggestions-box">
          <li className="suggestion">
            No results.
          </li>
        </ul>
      }
      { suggestions && 
        <ul className="suggestions-box">
          { suggestions.map((suggestion) => (
            <li
              className="suggestion"
              key={suggestion}>
                {suggestion}
            </li>
          ))}
        </ul>
      }
    </header>
  )
}

export default Header