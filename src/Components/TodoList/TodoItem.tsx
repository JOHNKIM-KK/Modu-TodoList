import React from "react";
import { ITodoState } from "Components/TodoList/Utils/TodoService";

interface TodoItemProps {
  data: ITodoState;
}

const TodoItem: React.FC<TodoItemProps> = ({ data }) => {
  const { taskName, dueDate } = data;
  return (
    <>
      <div>status Circle</div>
      <div>{taskName}</div>
      <div>{dueDate}</div>
      <i className="far fa-trash-alt"></i>
    </>
  );
};

export default TodoItem;
