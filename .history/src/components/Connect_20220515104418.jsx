import React from "react";
import PropTypes from "prop-types";

const Connect = (props) => {
  return (
    <div className="connect__card">
      <div className="connect__card__icon">
        <i className={props.icon}></i>
      </div>
      <div className="connect__card__info">
        <div className="connect__card__info__content">{props.content}</div>
      </div>
    </div>
  );
};

Connect.propTypes = {
  icon: PropTypes.string,
  content: PropTypes.string,
};

export default Connect;
