import React from 'react';

const Header  = () => {
  return(
    <header>
      <p className="app-heading">Weather Forecast App</p>
      <div
      className="location-input-box">
        <div className="mag-glass-div">
          <img src="/magnifying-glass.svg" alt="magnifying-glass" className="mag-glass"
          />
        </div>
        <input 
        placeholder="Search"           
        />
      </div>
    </header>
    )
}

export default Header