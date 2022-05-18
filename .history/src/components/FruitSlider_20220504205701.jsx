import React from "react";
import PropTypes from "prop-types";

const FruitSlider = (props) => {
  const { data } = props;
  return (
    <div className="fruit__slider">
      {data.map((item, index) => (
        <div key={index} className="fruit__slider__container">
          <div className="fruit__slider__container__item">
            <div className="fruit__slider__item__title">
              <span>{item.title}</span>
            </div>
            <div className="fruit__slider__item__content">
              <p>{item.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

FruitSlider.propTypes = {
  data: PropTypes.array.isRequired,
};

export default FruitSlider;
