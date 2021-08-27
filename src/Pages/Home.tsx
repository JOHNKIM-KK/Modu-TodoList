import React from "react";
import styled from "styled-components";
import { TodoTemplate } from "Layouts";
import { Nav } from "Components/Nav";
import { TodoCreate, TodoFilter, TodoList } from "Components/TodoList";
import { TodoService } from "Components/TodoList";
import bg from "Assets/background.jpg";

const Home: React.FC = () => {
  const {
    createTodo,
    todoState,
    filterTodo,
    removeTodo,
    toggleStatus,
    toggleImportance,
    setTodoState,
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
          setTodoState={setTodoState}
        />
      </TodoTemplate>
    </HomeBlock>
  );
};

const HomeBlock = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;

  background-image: url(${bg});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`;
export default Home;
