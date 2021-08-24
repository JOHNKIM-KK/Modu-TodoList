import React from "react";
import styled from "styled-components";

const FilterLists = [
  {
    id: 0,
    text: "중요도",
  },
  {
    id: 1,
    text: "최신순",
  },
  {
    id: 2,
    text: "생성일순",
  },
  {
    id: 3,
    text: "마감일순",
  },
];

const FilterBlock = styled.div`
  position: relative;
  left: 100%;
  padding-left: 20px;

  div {
    background-color: lightcoral;
    border: 1px solid #333;
    width: 90px;
    text-align: center;
    margin-bottom: 5px;
  }
`;

const TodoFilter: React.FC = () => {
  return (
    <FilterBlock>
      {FilterLists.map(list => (
        <div key={list.id}>{list.text}</div>
      ))}
    </FilterBlock>
  );
};

export default TodoFilter;
