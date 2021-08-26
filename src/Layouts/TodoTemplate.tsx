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

  width: 800px;
  height: 100vh;

  margin: 0 auto;
  padding: 0 70px;

  background-image: url(${bg});
  background-size: cover;
`;

const TodoTemplate: React.FC<TodoTemplateProps> = props => {
  return <TodoTemplateBlock>{props.children}</TodoTemplateBlock>;
};

export default TodoTemplate;
