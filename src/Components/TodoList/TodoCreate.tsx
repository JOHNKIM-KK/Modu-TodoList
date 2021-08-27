import React, { useState } from "react";
import { today, STATUS } from "Utils";
import { ITodoState } from ".";
import styled from "styled-components";

interface TodoCreateProps {
  createTodo: (todo: ITodoState) => void;
}

const TodoCreate: React.FC<TodoCreateProps> = ({ createTodo }) => {
  const [todo, setTodo] = useState("");
  const [date, setDate] = useState(today());

  const submitTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todo) {
      createTodo({
        id: 0,
        taskName: todo,
        status: STATUS.NOT_STARTED,
        createdAt: today(),
        dueDate: date,
        importance: 0,
      });
      setTodo("");
    }
  };

  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const changeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  return (
    <>
      <TodoHeadBlock>
        <InsertForm onSubmit={submitTodo}>
          <Input
            autoFocus
            placeholder="What's need to be done?"
            onChange={changeInput}
            value={todo}
          ></Input>
          <Calendar type="date" onChange={changeDate} value={date} />
        </InsertForm>
      </TodoHeadBlock>
    </>
  );
};

const TodoHeadBlock = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 52px;
`;

const InsertForm = styled.form`
  display: flex;
  background: transparent;
  width: 100%;
  padding-left: 40px;
  padding-top: 16px;
  padding-right: 60px;
`;

const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 12px;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid #666666;
  font-size: 21px;
  color: #333;
  outline: none;
  text-align: center;

  &::placeholder {
    text-align: center;
    font-size: 18px;
    font-weight: 700;
  }
`;

const Calendar = styled.input`
  width: 150px;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid #666666;
`;

export default TodoCreate;
