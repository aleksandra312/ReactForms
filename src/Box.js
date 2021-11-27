import React from "react";
import "./Box.css";

const Box = ({ id, color, width, height, removeBox }) => {
  const handleRemove = () => removeBox(id);
  return (
    <div
      className="Box"
      style={{
        backgroundColor: color,
        height: `${height}em`,
        width: `${width}em`,
      }}
    >
      <button onClick={handleRemove}>X</button>
    </div>
  );
};

export default Box;
