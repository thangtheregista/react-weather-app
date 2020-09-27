import React from 'react';
import LocationInput from "./LocationInput"

const Header = (props) => {
    const { getLocationID } = props;
    return(
        <header>
            <p
            className="header">Weather App</p>
            <LocationInput
            getLocationID={getLocationID} />
        </header>
    )
}

export default Header;