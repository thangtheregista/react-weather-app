import React from 'react';

// COMPONENTS
import Forecast from './Forecast';

const Weather = ({ weatherLoading, selectedLocation }) => {
  return ( 
    <section>
      { !weatherLoading &&
        selectedLocation &&  
        <div>
          <h3>{selectedLocation.title}</h3>
          <ul className="weather-report">
            { 
              selectedLocation.consolidated_weather.map((day) => (
              <Forecast
                key={day.id}
                date={day.applicable_date}
                minTemp={day.min_temp}
                maxTemp={day.max_temp}
              />
            ))
            }
          </ul>
        </div>
      }
      { 
        weatherLoading && 
        <ul className="weather-report">
          <li>
            <img src="/Spinner-1s-200px.svg" alt="spinner" className="spinner2" />
          </li>
        </ul>
      }
    </section>
  )
}

export default Weather