import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const FruitSlider = (props) => {
  const { data } = props;
  const [couterSlider, setCouterSlider] = useState(0);
  const handleNext = () => {
    setCouterSlider(
      couterSlider === data.length ? couterSlider === 0 : couterSlider + 1
    );
  };
  return (
    <div className="fruit__slider">
      {data.map((item, index) => (
        <div
          key={index}
          className={`fruit__slider__container ${
            couterSlider === index ? "active" : ""
          }`}
        >
          <div className="fruit__slider__container__item">
            <div className="fruit__slider__container__item__title">
              <span>{item.title}</span>
            </div>
            <div className="fruit__slider__container__item__content">
              <p>{item.content}</p>
            </div>
            <div className="fruit__slider__container__item__btn">
              <Link to="/product">
                <button>
                  Đến cửa hàng
                  <i className="bx bx-chevrons-right"></i>
                </button>
              </Link>
            </div>
          </div>
          <div className="fruit__slider__container__img">
            <img src={item.img} alt=""></img>
          </div>
        </div>
      ))}
      <div className="fruit__slider__control">
        <div className="fruit__slider__control__item" onClick={handlePrev}>
          <i className="bx bx-chevron-left"></i>
        </div>
        <div className="fruit__slider__control__item">
          <div className="numbercontrol">
            {couterSlider + 1}/{data.length}
          </div>
        </div>
        <div className="fruit__slider__control__item" onClick={handleNext}>
          <i className="bx bx-chevron-right"></i>
        </div>
      </div>
    </div>
  );
};

FruitSlider.propTypes = {
  data: PropTypes.array.isRequired,
};

export default FruitSlider;
