import React from "react";
import styled from "styled-components";

interface DragDropProps {
  children: React.ReactNode;
}

const DnDBlock = styled.div`
  position: absolute;
  top: 140px;
  width: 90%;
  height: 75%;
  padding-left: 30px;
  overflow-y: scroll;
`;

const DragDrop: React.FC<DragDropProps> = props => {
  return <DnDBlock>{props.children}</DnDBlock>;
};

export default DragDrop;
