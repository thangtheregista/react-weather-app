import React from 'react';

const Forecast = ({ minTemp, maxTemp, date}) => {
  const roundedMinTemp = Math.round(minTemp);
  const roundedMaxTemp = Math.round(maxTemp);
  return (
    <li className="day-weather-report">
      <p>{date}</p>
      <p>Min: {roundedMinTemp} &deg;C</p>
      <p>Max: {roundedMaxTemp} &deg;C</p>
    </li>
  )
}

export default Forecast;