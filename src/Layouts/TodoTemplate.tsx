import React from "react";
import styled from "styled-components";

interface TodoTemplateProps {
  children: React.ReactNode;
}

const TodoTemplateBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  margin: 0 auto;
  padding: 10px 90px 60px 90px;
  overflow-y: hidden;

  @media ${props => props.theme.size.tablet} {
    background-color: #dbdbdb;
  }

  img {
    position: absolute;
    left: 20px;
    height: 850px;
    /* z-index: -100; */

    @media ${props => props.theme.size.tablet} {
      visibility: hidden;
    }
  }
`;

const TodoTemplate: React.FC<TodoTemplateProps> = props => {
  return <TodoTemplateBlock>{props.children}</TodoTemplateBlock>;
};

export default TodoTemplate;
