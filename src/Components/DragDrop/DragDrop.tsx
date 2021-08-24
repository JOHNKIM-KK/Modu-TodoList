import React from "react";

interface DragDropProps {
  children: React.ReactNode;
}

const DragDrop: React.FC<DragDropProps> = props => {
  return (
    <>
      <div>{props.children}</div>
    </>
  );
};

export default DragDrop;
