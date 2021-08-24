import React from "react";
import { DragDrop } from "Components/DragDrop";
import { TodoItem } from "Components/TodoList";

const TodoLists = [
  {
    id: 1,
    taskName: "자소서 쓰기",
    status: 0,
    createdAt: "2021-02-03",
    dueDate: "2021-07-07",
    importance: 0, // 0~2
  },
  {
    id: 2,
    taskName: "블로그 쓰기",
    status: 1,
    createdAt: "2021-02-03",
    dueDate: "2021-07-07",
    importance: 0, // 0~2
  },
];
const TodoList: React.FC = () => {
  return (
    <DragDrop>
      {TodoLists.map(item => (
        <TodoItem data={item} />
      ))}
    </DragDrop>
  );
};

export default TodoList;
