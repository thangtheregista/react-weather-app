import React, { useState } from 'react';
const LocationInput = (props) => {
    const { getLocationID, searchLocation, suggestions } = props;
    const [city, setCity] = useState("");
    const onAddCity = (e = {}) => {
        if (e.key === "Enter" && city) {
          getLocationID(city)
          setCity("");
        }
      };
    return(
      <header>
      <p
      className="header">Weather App</p>
        <div
        className="location-input-box">
            <input
            type="text"
            name="location-input"
            className="location-input-field"
            placeholder="Search"
            onKeyPress={(e) => onAddCity(e)}
            onChange={(e) => {
              setCity(e.target.value)
              searchLocation(e.target.value)
            }}
            value={city} />
            
            {suggestions && <ul className="suggestions-box">
                {suggestions.map((suggestion) => (
                <li className="suggestion"
                  key={suggestion}
                  >{suggestion}</li>
                  ))}
              </ul>}
        </div>
        </header>
    )
}

export default LocationInput