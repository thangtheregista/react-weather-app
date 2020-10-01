import React from 'react';
const Weather = (props) => {
    const { day1, day1mintemp, day1maxtemp, day2, day2mintemp, day2maxtemp, day3, day3mintemp, day3maxtemp, day4, day4mintemp, day4maxtemp, day5, day5mintemp, day5maxtemp } = props
    
    return(
    <section>
      {day1 && <ul className="weather-report">
        <li className="day-weather-report">
          <p>{day1}</p>
          <p>Min: {day1mintemp}&deg;C</p>
          <p>Max: {day1maxtemp}&deg;C</p>
        </li>
        <li className="day-weather-report">
          <p>{day2}</p>
          <p>Min: {day2mintemp}&deg;C</p>
          <p>Max: {day2maxtemp}&deg;C</p>
        </li>
        <li className="day-weather-report">
          <p>{day3}</p>
          <p>Min: {day3mintemp}&deg;C</p>
          <p>Max: {day3maxtemp}&deg;C</p>
        </li>
        <li className="day-weather-report">
          <p>{day4}</p>
          <p>Min: {day4mintemp}&deg;C</p>
          <p>Max: {day4maxtemp}&deg;C</p>
        </li>
        <li className="day-weather-report">
          <p>{day5}</p>
          <p>Min: {day5mintemp}&deg;C</p>
          <p>Max: {day5maxtemp}&deg;C</p>
        </li>
      </ul>}
    </section>
    )
}

export default Weather