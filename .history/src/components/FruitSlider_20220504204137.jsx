import React from "react";
import PropTypes from "prop-types";

const FruitSlicer = (props) => {
  return <div>{props.children}</div>;
};

FruitSlicer.propTypes = {
  data: PropTypes.array.isRequired,
};

export default FruitSlider;
