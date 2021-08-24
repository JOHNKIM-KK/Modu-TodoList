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
  padding: 12px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #333;
  width: 100%;
  outline: none;
  font-size: 21px;
  box-sizing: border-box;
  color: #119955;
  &::placeholder {
    text-align: center;
    color: #dddddd;
    font-size: 16px;
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
