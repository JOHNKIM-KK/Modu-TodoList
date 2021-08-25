import React from "react";
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
  color: #119955;
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

const TodoCreate: React.FC = () => {
  return (
    <>
      <TodoHeadBlock>
        <InsertForm>
          <Input autoFocus placeholder="What's need to be done?"></Input>
          <Calendar type="date" />
        </InsertForm>
      </TodoHeadBlock>
    </>
  );
};

export default TodoCreate;
