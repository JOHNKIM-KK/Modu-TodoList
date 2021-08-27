import React from "react";
import styled from "styled-components";

interface DragDropProps {
  children: React.ReactNode;
}

const DnDBlock = styled.div`
  padding-top: 30px;
  overflow-y: auto;
`;

const DragDrop: React.FC<DragDropProps> = props => {
  return <DnDBlock>{props.children}</DnDBlock>;
};

export default DragDrop;
