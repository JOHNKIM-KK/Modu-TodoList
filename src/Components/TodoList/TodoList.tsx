import React, { useRef } from "react";
import { DragDrop } from "Components/DragDrop";
import { TodoItem } from "Components/TodoList";
import styled from "styled-components";
import { ITodoState } from "./Utils/TodoService";

interface TodoListProps {
  todoState: ITodoState[];
  toggleStatus: (id: number) => void;
  toggleImportance: (id: number, nextImportance: number) => void;
  removeTodo: (id: number) => void;
  setTodoState: (state: ITodoState[]) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  todoState,
  removeTodo,
  toggleStatus,
  toggleImportance,
  setTodoState,
}) => {
  const draggingItem = useRef<number>(0);
  const dragOverItem = useRef<number | null>();

  const handleDragStart = (position: number) => {
    draggingItem.current = position;
  };

  const handleDragEnter = (position: number) => {
    dragOverItem.current = position;

    const listCopy = [...todoState];
    console.log(draggingItem.current, dragOverItem.current);
    const draggingItemContent = listCopy[draggingItem.current];
    listCopy.splice(draggingItem.current, 1);
    listCopy.splice(dragOverItem.current, 0, draggingItemContent);

    draggingItem.current = dragOverItem.current;
    dragOverItem.current = null;
    setTodoState(listCopy);
  };

  // const handleDragEnd = e => {
  //   const listCopy = [...todoState];

  //   const draggingItemContent = listCopy[draggingItem.current];
  //   listCopy.splice(draggingItem.current, 1);
  //   listCopy.splice(dragOverItem.current, 0, draggingItemContent);

  //   draggingItem.current = null;
  //   dragOverItem.current = null;
  //   setList(listCopy);
  // };

  return (
    <DragDrop>
      {todoState.map((item, index) => (
        <ToDo
          onDragStart={() => handleDragStart(index)}
          onDragEnter={() => handleDragEnter(index)}
          // onDragEnd={handleDragEnd}
          onDragOver={e => e.preventDefault()}
          key={index}
          draggable
        >
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
  padding-bottom: 5px;
  justify-content: center;
`;
export default TodoList;
