import React from "react";
import { ITodoState } from "Components/TodoList/Utils/TodoService";
import styled from "styled-components";

interface TodoItemProps {
  data: ITodoState;
  toggleStatus: (id: number) => void;
  toggleImportance: (id: number, nextImportance: number) => void;
  removeTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  data,
  removeTodo,
  toggleStatus,
  toggleImportance,
}) => {
  const { taskName, dueDate, importance, status, createdAt, id } = data;

  return (
    <ItemBox>
      <Progress
        onClick={() => {
          toggleStatus(id);
        }}
      >
        {status}
        {/* <i className="far fa-circle"></i> */}
        {/* <span>
          <i className="fas fa-spinner"></i>
        </span>
        <i className="far fa-check-circle"></i> */}
      </Progress>
      <i className="far fa-star"></i>
      <span>{taskName}</span>
      <span>생성일: {createdAt}</span>
      <span>마감일: {dueDate}</span>
      <span>중요도: {importance}</span>
      <div
        onClick={() => {
          removeTodo(id);
        }}
      >
        <i className="far fa-trash-alt"></i>
      </div>
    </ItemBox>
  );
};

const ItemBox = styled.div`
  display: flex;
`;

const Progress = styled.div`
  font-size: 25px;

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }

  span {
    i {
      font-size: 20px;
      animation: rotation 2s infinite linear;
    }
  }
`;

export default TodoItem;
