import React from "react";
import styled from "styled-components";
import bg from "Assets/note2.jpg";

interface TodoTemplateProps {
  children: React.ReactNode;
}

const TodoTemplateBlock = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 70%;
  height: 800px;
  min-width: 360px;
  max-width: 700px;
  margin: 0 auto;
  margin-top: 96px;
  margin-bottom: 32px;
  padding: 0px 70px;
  background-image: url(${bg});
  background-size: 100%, 100%;
`;

const TodoTemplate: React.FC<TodoTemplateProps> = props => {
  return <TodoTemplateBlock>{props.children}</TodoTemplateBlock>;
};

export default TodoTemplate;
