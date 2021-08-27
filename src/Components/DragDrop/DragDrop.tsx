import React from "react";
import styled from "styled-components";

interface DragDropProps {
  children: React.ReactNode;
}

const DragDrop: React.FC<DragDropProps> = props => {
  return <DnDBlock>{props.children}</DnDBlock>;
};

const DnDBlock = styled.div`
  padding-top: 30px;
  overflow-y: auto;
`;

export default DragDrop;
