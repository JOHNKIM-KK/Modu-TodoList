import React from "react";
import { ITodoState } from "Components/TodoList/Utils/TodoService";

interface TodoItemProps {
  data: ITodoState;
  removeTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ data, removeTodo }) => {
  const { taskName, dueDate, importance, createdAt, id } = data;
  return (
    <>
      <div>
        {" "}
        <i className="far fa-circle"></i>
      </div>
      <div>
        {" "}
        <i className="far fa-star"></i>
      </div>
      <div>{taskName}</div>
      <div>생성일: {createdAt}</div>
      <div>마감일: {dueDate}</div>
      <div>중요도: {importance}</div>
      <div
        onClick={() => {
          removeTodo(id);
        }}
      >
        <i className="far fa-trash-alt"></i>
      </div>
    </>
  );
};

export default TodoItem;
