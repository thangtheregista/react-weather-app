import React from 'react';

const Header  = () => {
    return(
        <header>
            <p className="app-heading">Weather Forecast App</p>
        <div
        className="location-input-box">
            <input 
            placeholder="Search"
            
            />
        </div>
        </header>
    )
}

export default Header