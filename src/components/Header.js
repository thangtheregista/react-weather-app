import React from 'react';
import LocationInput from "./LocationInput"

const Header = () => {
    return(
        <header>
            <p
            className="header">Weather App</p>
            <LocationInput />
        </header>
    )
}

export default Header;