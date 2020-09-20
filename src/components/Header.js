import React from 'react';

const Header = () => {
    return(
        <header>
            <p>Weather App</p>
            <input 
            name="location-input"
             />
             <label for="location-input">Please search for a city.</label>
        </header>
    )
}

export default Header;