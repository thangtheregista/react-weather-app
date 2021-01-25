import React from 'react';

const Location = ({ suggestion, getWeatherByID, woeid }) => {
  const onClickHandler = () => {
    getWeatherByID(woeid);
  };
  return (
    <li
      className="suggestion"
      onClick={onClickHandler}
    >
      {suggestion}
    </li>
  )
}

export default Location