import React from "react";

function Bullet(props) {
  const size = props.selected ? "w-4 h-4 md:w-6 md:h-6" : "w-3 h-3 md:w-5 md:h-5";

  return <div className={ props.filled ? `bg-white rounded-full ${size}` : `border-white border rounded-full ${size}`}></div>;
}

export default Bullet;
