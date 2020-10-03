import React, { useState } from 'react';

// COMPONENTS
import Location from './Location';

const Header = ({ 
  searchLocation, 
  getWeatherByID,
  loading, 
  searchResults, 
}) => {
  const [city, setCity] = useState('');
  return (
    <header>
      <p className="app-heading">
        Weather Forecast App
      </p>
      <div className="location-input-box">
        <div className="mag-glass-div">
          { 
            loading ? 
            (<img src="/Spinner-1s-200px.svg" alt="Loading" className="spinner" />) : 
            (<img src="/magnifying-glass.svg" alt="magnifying-glass" className="mag-glass"/>) 
          }
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
      { 
        searchResults === undefined &&  
        <div className="input-status">
          Please search for a city.
        </div> 
      }
      { 
        searchResults === null && 
        <ul className="suggestions-box">
          <li className="suggestion">
            No results.
          </li>
        </ul>
      }
      { 
        searchResults && 
        <ul className="suggestions-box">
          { searchResults.map((location) => (
            <Location
              woeid={location.woeid}
              key={location.woeid}
              suggestion={location.title}
              getWeatherByID={getWeatherByID}
            />
          ))}
        </ul> 
      }
    </header>
  )
}

export default Header