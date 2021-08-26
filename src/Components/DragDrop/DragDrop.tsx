import React from "react";
import styled from "styled-components";

interface DragDropProps {
  children: React.ReactNode;
}

const DnDBlock = styled.div`
  overflow-y: auto;
  padding-top: 30px;
`;

const DragDrop: React.FC<DragDropProps> = props => {
  return <DnDBlock>{props.children}</DnDBlock>;
};

export default DragDrop;
