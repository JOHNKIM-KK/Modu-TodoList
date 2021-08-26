import React from "react";
import { TodoTemplate } from "Layouts";
import { Nav } from "Components/Nav";
import { TodoCreate, TodoFilter, TodoList } from "Components/TodoList";
import { TodoService } from "Components/TodoList/Utils/TodoService";

const Home: React.FC = () => {
  const {
    createTodo,
    todoState,
    filterTodo,
    removeTodo,
    toggleStatus,
    toggleImportance,
  } = TodoService();
  return (
    <>
      <Nav />
      <TodoTemplate>
        <TodoCreate createTodo={createTodo} />
        <TodoFilter filterTodo={filterTodo} />
        <TodoList
          todoState={todoState}
          toggleStatus={toggleStatus}
          toggleImportance={toggleImportance}
          removeTodo={removeTodo}
        />
      </TodoTemplate>
    </>
  );
};

export default Home;
