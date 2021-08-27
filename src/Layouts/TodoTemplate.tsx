import React from "react";
import styled from "styled-components";
import bg from "Assets/note2.jpg";

interface TodoTemplateProps {
  children: React.ReactNode;
}

const TodoTemplateBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;
  max-width: 700px;

  margin: 0 auto;
  padding-top: 20px;

  background-image: url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media only screen and (max-width: 768px) {
    padding-top: 10px;
  }
}`;

const TodoTemplate: React.FC<TodoTemplateProps> = props => {
  return <TodoTemplateBlock>{props.children}</TodoTemplateBlock>;
};

export default TodoTemplate;
