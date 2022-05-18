import React from "react";
import PropTypes from "prop-types";

const Policy = (props) => {
  return (
    <div className="policy__card">
      <div className="policy__card__icon">
        <i className={props.icon}></i>
      </div>
      <div className="policy__card__info">
        <div className="policy__card__info__name">{props.name}</div>
        <div className="policy__card__info__content">{props.content}</div>
      </div>
    </div>
  );
};

Policy.propTypes = {
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

export default Policy;
