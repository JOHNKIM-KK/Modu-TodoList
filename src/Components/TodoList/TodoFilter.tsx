import React from "react";
import styled from "styled-components";

const FilterLists = [
  {
    id: 0,
    text: "중요도",
    name: "importance",
  },
  {
    id: 1,
    text: "최신순",
    name: "recent",
  },
  {
    id: 2,
    text: "생성일순",
    name: "createdDate",
  },
  {
    id: 3,
    text: "마감일순",
    name: "dueDate",
  },
];

const FilterBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  left: 100%;
  padding-left: 20px;
  list-style: none;

  button {
    width: 90px;
    margin-bottom: 5px;
    background-color: lightcoral;
    border: 1px solid #333;
    text-align: center;
  }
`;

interface TodoFilterProps {
  filterTodo: (filterName: string) => void;
}

const TodoFilter: React.FC<TodoFilterProps> = ({ filterTodo }) => {
  const clickFilter = e => {
    filterTodo(e.target.name);
  };

  return (
    <FilterBlock>
      {FilterLists.map(list => (
        <button key={list.id} onClick={clickFilter} name={list.name}>
          {list.text}
        </button>
      ))}
    </FilterBlock>
  );
};

export default TodoFilter;
