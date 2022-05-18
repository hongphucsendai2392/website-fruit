import React from "react";
import PropTypes from "prop-types";

const FruitSlider = (props) => {
  const { data } = props;
  return (
    <div className="fruit__slider">
      {data.map((item, index) => (
        <div key={index} className="fruit__slider__item"></div>
      ))}
    </div>
  );
};

FruitSlider.propTypes = {
  data: PropTypes.array.isRequired,
};

export default FruitSlider;
