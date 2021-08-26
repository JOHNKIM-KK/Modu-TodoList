import React from "react";
import { DragDrop } from "Components/DragDrop";
import { TodoItem } from "Components/TodoList";
import styled from "styled-components";
import { ITodoState } from "./Utils/TodoService";

interface TodoListProps {
  todoState: ITodoState[];
  toggleStatus: (id: number) => void;
  toggleImportance: (id: number, nextImportance: number) => void;
  removeTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  todoState,
  removeTodo,
  toggleStatus,
  toggleImportance,
}) => {
  return (
    <DragDrop>
      {todoState.map(item => (
        <ToDo>
          <TodoItem
            toggleStatus={toggleStatus}
            toggleImportance={toggleImportance}
            removeTodo={removeTodo}
            data={item}
          />
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
