import React from 'react';

const Weather = (props) => {
    return(
    <section>
      <div>
        <h1>{props.title}</h1>
        <div>
            <div>
                <p>{props.maxTemp}</p>
                <p>{props.minTemp}</p>
            </div>
        </div>
      </div>
    </section>
    )
}

export default Weather