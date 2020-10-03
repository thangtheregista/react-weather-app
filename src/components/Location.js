import React from 'react';

const Location = (props) => {
  const { suggestion, searchSuggestedLocation } = props;
  const onClickHandler = () => {
    searchSuggestedLocation(suggestion)
  };
  return(
    <li
      className="suggestion"
      onClick={onClickHandler}>
        {suggestion}
    </li>
  )
}

export default Location 