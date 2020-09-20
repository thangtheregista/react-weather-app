import React from 'react';

const Weather = () => {
    return(
        <section>
            <h1
            className="location">London</h1>
            <div
            className="weather-container">
                <div
                className="weather-box">
                    <p>Today</p>
                    <p>Min: 4.35 &deg;C</p>
                    <p>Max: 13.05 &deg;C</p>
                </div>
                <div
                className="weather-box">
                    <p>Tomorrow</p>
                    <p>Min: 4.35 &deg;C</p>
                    <p>Max: 13.05 &deg;C</p>
                </div>
            </div>
        </section>
    )
}

export default Weather