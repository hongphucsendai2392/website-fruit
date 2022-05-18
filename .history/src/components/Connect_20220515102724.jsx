import React from "react";
import PropTypes from "prop-types";

const Connect = (props) => {
  return (
    <div className="policy__card">
      <div className="policy__card__icon">
        <i className={props.icon}></i>
      </div>
      <div className="policy__card__info">
        <div className="policy__card__info__content">{props.content}</div>
      </div>
    </div>
  );
};

Connect.propTypes = {
  icon: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Connect;
