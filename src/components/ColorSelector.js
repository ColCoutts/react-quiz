import React from 'react';
import PropTypes from 'prop-types';

function ColorSelector({ color, backgroundColor, handleChange }) {
  
  return (
    <>
      <input name="color" type="color" value={color} onChange={handleChange}></input>
      <input name="backgroundColor" type="color" value={backgroundColor} onChange={handleChange}></input>
    </>
  );
}

ColorSelector.propTypes = {
  color: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default ColorSelector;
