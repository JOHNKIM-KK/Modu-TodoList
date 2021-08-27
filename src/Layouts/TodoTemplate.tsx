import React from "react";
import styled from "styled-components";

interface TodoTemplateProps {
  children: React.ReactNode;
}

const TodoTemplate: React.FC<TodoTemplateProps> = props => {
  return <TodoTemplateBlock>{props.children}</TodoTemplateBlock>;
};

const TodoTemplateBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  margin: 0 auto;
  padding: 10px 90px 60px 90px;
  overflow-y: hidden;
`;

export default TodoTemplate;
