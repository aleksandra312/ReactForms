import React from "react";

const Todo = ({ task, id, deleteTodo }) => {
  const handleDelete = () => {
    deleteTodo(id);
  };
  return (
    <div>
      <li>{task}</li>
      <button onClick={handleDelete}>x</button>
    </div>
  );
};

export default Todo;
