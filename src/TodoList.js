import React, { useState } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import { v4 as uuid } from "uuid";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = (newTodo) => {
    setTodos((todos) => [...todos, { ...newTodo, id: uuid() }]);
  };
  const deleteTodo = (id) => {
    setTodos((todos) => todos.filter((t) => t.id !== id));
  };

  return (
    <div>
      <h3>To do list</h3>
      <NewTodoForm addTodo={addTodo} />
      <ul>
        {todos.map(({ task, id }) => (
          <Todo task={task} id={id} key={id} deleteTodo={deleteTodo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
