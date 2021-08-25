import React from "react";
import { ITodoState } from "Components/TodoList/Utils/TodoService";

interface TodoItemProps {
  data: ITodoState;
}

const TodoItem: React.FC<TodoItemProps> = ({ data }) => {
  const { taskName, dueDate, importance, createdAt } = data;
  return (
    <>
      <div>status Circle</div>
      <div>{taskName}</div>
      <div>생성일: {createdAt}</div>
      <div>마감일: {dueDate}</div>
      <div>중요도: {importance}</div>
      <i className="far fa-trash-alt"></i>
    </>
  );
};

export default TodoItem;
