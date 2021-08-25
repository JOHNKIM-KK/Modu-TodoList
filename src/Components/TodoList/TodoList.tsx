import React from "react";
import { DragDrop } from "Components/DragDrop";
import { TodoItem } from "Components/TodoList";
import styled from "styled-components";
import { ITodoState } from "./Utils/TodoService";

interface TodoListProps {
  todoState: ITodoState[];
  removeTodo: (id: number) => void;
}
// const TodoLists = [
//   {
//     id: 1,
//     taskName: "자소서 쓰기",
//     status: 0,
//     createdAt: "2021-02-03",
//     dueDate: "2021-07-07",
//     importance: 0, // 0~2
//   },
//   {
//     id: 2,
//     taskName: "블로그 쓰기",
//     status: 1,
//     createdAt: "2021-02-03",
//     dueDate: "2021-07-07",
//     importance: 0, // 0~2
//   },
// ];
const TodoList: React.FC<TodoListProps> = ({ todoState, removeTodo }) => {
  return (
    <DragDrop>
      {todoState.map(item => (
        <ToDo>
          <TodoItem removeTodo={removeTodo} data={item} />
        </ToDo>
      ))}
    </DragDrop>
  );
};
const ToDo = styled.div`
  display: flex;
  margin: 20px;
  justify-content: center;
`;
export default TodoList;
