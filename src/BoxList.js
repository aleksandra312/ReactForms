import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import { v4 as uuid } from "uuid";

const BoxList = () => {
  const [boxes, setBoxes] = useState([]);
  const addBox = (newBox) => {
    setBoxes((boxes) => [...boxes, { ...newBox, id: uuid() }]);
  };
  const removeBox = (id) => {
    setBoxes((boxes) => boxes.filter((b) => b.id !== id));
  };

  return (
    <div>
      <h3>Box List</h3>
      <NewBoxForm addBox={addBox} />
      <div>
        {boxes.map(({ id, color, width, height }) => (
          <Box
            id={id}
            color={color}
            width={width}
            height={height}
            key={id}
            removeBox={removeBox}
          />
        ))}
      </div>
    </div>
  );
};

export default BoxList;
