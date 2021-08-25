import React from "react";
import { DragDrop } from "Components/DragDrop";
import { TodoItem } from "Components/TodoList";
import { ITodoState } from "./Utils/TodoService";

interface TodoListProps {
  todoState: ITodoState[];
}
const TodoList: React.FC<TodoListProps> = ({ todoState }) => {
  console.log("todoState", todoState);
  return (
    <DragDrop>
      {todoState.map(item => (
        <TodoItem data={item} />
      ))}
    </DragDrop>
  );
};

export default TodoList;
