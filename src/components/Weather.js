import React from 'react';

const Weather = (props) => {
    const { title , maxTemp , minTemp } = props
    return(
    <section>
        {title && <div>
          <h1>{title}</h1>
        <div className="weather-report">
            <div>
              {maxTemp && <p>{maxTemp} &deg;C</p>}
              {minTemp && <p>{minTemp} &deg;C</p>}
            </div>
        </div>
          </div>}
    </section>
    )
}

export default Weather