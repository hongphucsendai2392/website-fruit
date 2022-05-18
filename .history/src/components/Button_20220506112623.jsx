import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
  const bg = props.backgroundColor ? "bg-" + props.backgroundColor : "bg-main";
  const size = props.size ? "btn-" + props.size : "";

  return (
    <button
      className={`btn ${bg} ${size} `}
      onClick={props.onClick ? () => props.onClick() : null}
    ></button>
  );
};

Button.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  size: PropTypes.number,
  icon: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
