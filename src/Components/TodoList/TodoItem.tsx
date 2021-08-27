import React, { useEffect, useState, useRef } from "react";
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
  const optionModal = useRef<HTMLDivElement>(null);

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

  const handleClickOutside = ({ target }: { target: HTMLElement }) => {
    if (optionModal.current === null) return;

    if (
      isOpen &&
      (!optionModal.current || !optionModal.current.contains(target))
    ) {
      return setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <ItemBox>
      <ToggleBox>
        <Progress onClick={handleStatus}>
          <i className={progress}></i>
        </Progress>
        <Importance color={TODOLEVEL[importance]} onClick={openModal}>
          <i className="fas fa-flag"></i>
          <OptionBox isopen={isOpen} ref={optionModal}>
            {TODOLEVEL.map((color, idx) => (
              <Level
                key={idx}
                color={color}
                onClick={() => {
                  handleImportance(idx);
                }}
              >
                <i className="fas fa-flag"></i>
              </Level>
            ))}
          </OptionBox>
        </Importance>
      </ToggleBox>
      <Task>{taskName}</Task>
      <SmallBox>
        <DueDate>
          <span>마감일: </span>
          {dueDate}
        </DueDate>
        <div onClick={handleRemove}>
          <i className="far fa-trash-alt"></i>
        </div>
      </SmallBox>
    </ItemBox>
  );
};

const ItemBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom: 2px solid #666666;
`;

const ToggleBox = styled.div`
  display: flex;
  align-items: center;
  width: 15%;
  padding-top: 3px;
`;

const Progress = styled.div`
  margin-right: 10px;
  font-size: 23px;
  color: #666666;

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

const SmallBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 35%;
`;

const Level = styled.span`
  color: ${props => props.color};
`;

const Task = styled.p`
  width: 50%;
  word-break: break-all;
  font-size: 20px;
`;

const DueDate = styled.div`
  margin-right: 15px;
  color: gray;

  span {
    color: tomato;
  }
`;

export default TodoItem;
