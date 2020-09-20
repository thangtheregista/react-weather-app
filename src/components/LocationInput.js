import React from 'react';

const LocationInput = () => {
    return(
        <div
        className="location-input-box">
            <input
            type="text"
            name="location-input"
            className="location-input-field"
            placeholder="Search" />
        </div>
    )
}

export default LocationInput