import React from "react";

function Grid(props, col, mdcol, smcol, gap) {
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
}

export default Grid;
