import React from "react";
import { DragDrop } from "Components/DragDrop";
import { TodoItem } from "Components/TodoList";
import styled from "styled-components";
import { ITodoState } from "./Utils/TodoService";

interface TodoListProps {
  todoState: ITodoState[];
  removeTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todoState, removeTodo }) => {
  return (
    <DragDrop>
      {todoState.map(item => (
        <ToDo>
          <TodoItem removeTodo={removeTodo} data={item} />
        </ToDo>
      ))}
    </DragDrop>
  );
};
const ToDo = styled.div`
  display: flex;
  margin: 20px;
  justify-content: center;
`;
export default TodoList;
