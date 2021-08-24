import React from "react";
import { TodoTemplate } from "Layouts";
import { Nav } from "Components/Nav";
import { TodoCreate, TodoFilter, TodoList } from "Components/TodoList";

const Home: React.FC = () => {
  return (
    <>
      <Nav />
      <TodoTemplate>
        <TodoCreate />
        <TodoFilter />
        <TodoList />
      </TodoTemplate>
    </>
  );
};

export default Home;
