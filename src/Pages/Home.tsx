import React from "react";
import { TodoTemplate } from "Layouts";
import { Nav } from "Components/Nav";
import { TodoCreate, TodoFilter, TodoList } from "Components/TodoList";
import { TodoService } from "Components/TodoList/Utils/TodoService";
import styled from "styled-components";

const HomeBlock = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;

  justify-content: flex-start;
`;

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
    <HomeBlock>
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
    </HomeBlock>
  );
};

export default Home;
