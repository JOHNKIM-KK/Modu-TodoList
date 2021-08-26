import React, { useState } from "react";
// import { STATUS } from "Utils";
import { ITodoState } from ".";
import styled from "styled-components";

const TodoHeadBlock = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 52px;
  padding-bottom: 24px;
`;

const InsertForm = styled.form`
  display: flex;
  background: transparent;
  width: 100%;
  padding-left: 40px;
  padding-top: 16px;
  padding-right: 60px;
  padding-bottom: 16px;
`;

const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 12px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #333;
  font-size: 21px;
  color: #333;
  outline: none;
  &::placeholder {
    text-align: center;
    font-size: 16px;
    color: #dddddd;
  }
`;

const Calendar = styled.input`
  width: 150px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #333;
`;

// const { NOT_STARTED } = STATUS;

interface TodoCreateProps {
  createTodo: (todo: ITodoState) => void;
}

const TodoCreate: React.FC<TodoCreateProps> = ({ createTodo }) => {
  const now = "2021-08-30";
  const [todo, setTodo] = useState("");
  const [date, setDate] = useState(now);

  const submitTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todo) {
      createTodo({
        id: 0,
        taskName: todo,
        // status: NOT_STARTED,
        status: 0,
        createdAt: now,
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

export default TodoCreate;
