import React from "react";
import { TodoTemplate } from "Layouts";
import { Nav } from "Components/Nav";
import { TodoCreate, TodoFilter, TodoList } from "Components/TodoList";
import { TodoService } from "Components/TodoList/Utils/TodoService";

const Home: React.FC = () => {
  const { createTodo, removeTodo } = TodoService();
  return (
    <>
      <Nav />
      <TodoTemplate>
        <TodoCreate createTodo={createTodo} />
        <TodoFilter />
        <TodoList removeTodo={removeTodo} />
      </TodoTemplate>
    </>
  );
};

export default Home;
