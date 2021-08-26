import React, { useEffect, useState } from "react";
import { ITodoState } from ".";
import { PROGRESS_STATUS, TODOLEVEL } from "Utils/Constants/ProgressStatus";
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
  const { taskName, dueDate, importance, status, id } = data;
  const [progress, setProgress] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setProgress(PROGRESS_STATUS[status]);
  }, [status]);

  const openModal = () => {
    setIsOpen(!isOpen);
  };

  const handleStatus = () => {
    toggleStatus(id);
  };

  const handleImportance = (nextImportance: number) => {
    toggleImportance(id, nextImportance);
  };

  const handleRemove = () => {
    removeTodo(id);
  };

  return (
    <ItemBox>
      <ToggleBox>
        <Progress onClick={handleStatus}>
          <i className={progress}></i>
        </Progress>
        <Importance color={TODOLEVEL[importance]} onClick={openModal}>
          <i className="fas fa-flag"></i>
          <OptionBox isopen={isOpen}>
            {TODOLEVEL.map((color, idx) => (
              <Level
                key={idx}
                color={color}
                onClick={() => handleImportance(idx)}
              >
                <i className="fas fa-flag"></i>
              </Level>
            ))}
          </OptionBox>
        </Importance>
      </ToggleBox>
      <Todo>{taskName}</Todo>
      <DueDate>
        <span>마감일: </span>
        {dueDate}
      </DueDate>
      <div onClick={handleRemove}>
        <i className="far fa-trash-alt"></i>
      </div>
    </ItemBox>
  );
};

const ItemBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 2px solid #666666;
`;

const ToggleBox = styled.div`
  display: flex;
  align-items: center;
`;

const Progress = styled.div`
  margin-right: 10px;
  font-size: 25px;

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }

  .fa-spinner {
    animation: rotation 2s infinite linear;
  }
`;

const Importance = styled.div<{ color: string }>`
  position: relative;
  font-size: 20px;
  color: ${props => props.color};
`;

const OptionBox = styled.div<{ isopen: boolean }>`
  display: ${props => (props.isopen ? "flex" : "none")};
  justify-content: space-around;
  position: absolute;
  top: -36px;
  left: -7px;
  width: 90px;
  padding-top: 4px;
  border: 2px solid #666666;
  background-color: #fff;
`;

const Level = styled.span`
  color: ${props => props.color};
`;

const Todo = styled.div`
  font-size: 20px;
`;

const DueDate = styled.div`
  color: gray;

  span {
    color: tomato;
  }
`;

export default TodoItem;
