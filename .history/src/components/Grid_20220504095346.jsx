import React from "react";
import PropTypes from "prop-types";

const Grid = (props) => {
  const style = {
    gap: gap ? `${gap}px` : "0",
  };
  const col = col ? `grid-col-${col}` : "";
  const mdcol = mdcol ? `grid-col-${mdcol}` : "";
  const smcol = smcol ? `grid-col-${smcol}` : "";
  return (
    <div className={`grid ${col} ${mdcol} ${smcol}`} style={style}>
      {props.children}
    </div>
  );
};
Grid.propTypes = {
  color: PropTypes.number.isRequired,
  mdcol: PropTypes.number.isRequired,
  smcol: PropTypes.number.isRequired,
  gap: PropTypes.number.isRequired,
};
export default Grid;
