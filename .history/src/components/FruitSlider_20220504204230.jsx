import React from "react";
import PropTypes from "prop-types";

const FruitSlider = (props) => {
  return <div>{props.children}</div>;
};

FruitSlider.propTypes = {
  data: PropTypes.array.isRequired,
};

export default FruitSlider;
