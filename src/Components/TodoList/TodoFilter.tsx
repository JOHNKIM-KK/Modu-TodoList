import React, { useState } from "react";
import styled, { css } from "styled-components";
import { FilterLists } from "Utils/";

interface TodoFilterProps {
  filterTodo: (filterName: string) => void;
}

const TodoFilter: React.FC<TodoFilterProps> = ({ filterTodo }) => {
  const [filterName, setFilterName] = useState("");

  const clickFilter = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.currentTarget;
    setFilterName(name);
    filterTodo(name);
  };

  return (
    <FilterBlock>
      {FilterLists.map(list => (
        <FilterButton
          colorNum={list.id}
          key={list.id}
          onClick={clickFilter}
          name={list.name}
          selected={filterName === list.name}
        >
          {list.text}
        </FilterButton>
      ))}
    </FilterBlock>
  );
};

const FilterBlock = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  top: 30px;
  left: 87%;
  margin: 20px 0;
  list-style: none;
`;

const FilterButton = styled.button<{ selected: boolean; colorNum: number }>`
  max-width: 90px;
  padding: 2px;
  border: 2px solid #666666;
  border-radius: 30px;
  padding: 0 10px;
  text-align: center;
  line-height: 18px;
  background-color: ${props => props.theme.filterColor[props.colorNum]};
  transition: all 0.3s ease-out;
  cursor: pointer;

  & + & {
    margin-left: 20px;
  }

  ${props =>
    props.selected &&
    css`
      transform: scale(1.05);
      box-shadow: 2px 3px 5px 0px;
    `};
`;

export default TodoFilter;
