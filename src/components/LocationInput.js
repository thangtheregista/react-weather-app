import React, { useState } from 'react';

const LocationInput = (props) => {
    const { getLocationID } = props;
    const [city, setCity] = useState("");
    const onAddCity = (e = {}) => {
        if (e.key === "Enter" && city) {
          getLocationID(city)
          setCity("");
        }
      };
    return(
        <div
        className="location-input-box">
            <input
            type="text"
            name="location-input"
            className="location-input-field"
            placeholder="Search"
            onKeyPress={(e) => onAddCity(e)}
            onChange={(e) => setCity(e.target.value)}
            value={city} />
        </div>
    )
}

export default LocationInput