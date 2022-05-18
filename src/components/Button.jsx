import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
  const size = props.size ? "btn-" + props.size : "";

  return (
    <button
      className={`btn  ${size} `}
      onClick={props.onClick ? () => props.onClick() : null}
    >
      <span className="btn__txt">{props.children}</span>
      {props.icon ? (
        <span className="btn__icon">
          <i className={`${props.icon}`}></i>
        </span>
      ) : null}
    </button>
  );
};

Button.propTypes = {
  size: PropTypes.string,
  icon: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
