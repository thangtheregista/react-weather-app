import React, { useState } from 'react';
import Location from './Location'
const Header = (props) => {
  const { searchLocation, suggestions, loading, error, searchSuggestedLocation, title, weatherLoading } = props;
  const [city, setCity] = useState("");
  const onSearchSuggestedLocation = (e = {}) => {
    if (e.key === "Enter" && city.length > 2) {
      searchSuggestedLocation(city)
      setCity("");
    }
  };
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
          onKeyPress={(e) => onSearchSuggestedLocation(e)}
          type="text"
          value={city} 
          placeholder="Search"
        />
      </div>
      { !suggestions && error === false && weatherLoading === false && !title &&
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
            <Location
              key={suggestion}
              {...{suggestion}}
              searchSuggestedLocation={searchSuggestedLocation}
            />
          ))}
        </ul> 
      }
    </header>
  )
}

export default Header
