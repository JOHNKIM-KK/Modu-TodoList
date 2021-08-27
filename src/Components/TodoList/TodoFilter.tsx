import React, { useState } from "react";
import styled, { css } from "styled-components";
import FilterLists from "Utils/Constants/FilterLists";

const FilterBlock = styled.div`
  position: absolute;
  display: flex;
  width: fit-content;
  flex-direction: column;
  top: 30px;
  left: 87%;
  padding-left: 20px;
  list-style: none;
`;

const FilterButton = styled.button<{ selected: boolean; colorNum: number }>`
  max-width: 90px;
  padding: 2px;
  border: 2px solid #333;
  text-align: center;
  line-height: 18px;
  background-color: ${props => props.theme.filterColor[props.colorNum]};
  transition: all 0.3s ease-out;

  & + & {
    margin-top: 10px;
  }
  ${props =>
    props.selected &&
    css`
      transform: scale(1.05);
      box-shadow: 2px 3px 5px 0px;
    `};
`;

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

export default TodoFilter;
