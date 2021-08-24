import React, { useState } from "react";
import { LOCAL_STORAGE, STATUS } from "Utils";

const { NOT_STARTED, ONGOING, FINISHED } = STATUS;

export type ITodoState = {
  id: number;
  taskName: string;
  status: number;
  createdAt: string;
  dueDate: string;
  importance: number;
};

const MockUp = [
  {
    id: 0,
    taskName: "todo 시작안함, 중요도 0",
    status: NOT_STARTED,
    createdAt: "2021-08-22",
    dueDate: "2021-10-22",
    importance: 0,
  },
  {
    id: 1,
    taskName: "todo 진행중, 중요도 1",
    status: ONGOING,
    createdAt: "2021-08-22",
    dueDate: "2021-10-22",
    importance: 1,
  },
  {
    id: 2,
    taskName: "todo 완료, 중요도 2",
    status: FINISHED,
    createdAt: "2021-08-22",
    dueDate: "2021-10-22",
    importance: 2,
  },
];

const initialTodos: ITodoState[] = [];

const TodoService = () => {
  const [todoState, setTodoState] = useState<ITodoState[]>(initialTodos);

  const saveData = () => {
    LOCAL_STORAGE.set("todos", todoState);
  };

  const loadData = () => {
    const data = LOCAL_STORAGE.get("todos");
    const temp = data ? JSON.parse(data) : MockUp;
    setTodoState(temp);
  };

  const toggleStatus = (id: number) => {
    setTodoState(prevTodo =>
      prevTodo.map((todo: ITodoState) =>
        todo.id === id ? { ...todo, status: ++todo.status % 3 } : todo
      )
    );
  };

  const toggleImportance = (id: number, nextImportance: number) => {
    setTodoState(prevTodo =>
      prevTodo.map((todo: ITodoState) =>
        todo.id === id ? { ...todo, importance: nextImportance } : todo
      )
    );
  };

  const removeTodo = (id: number) => {
    setTodoState(prevTodo =>
      prevTodo.filter((todo: ITodoState) => todo.id !== id)
    );
  };

  const createTodo = (todo: ITodoState) => {
    const nextId =
      (todoState.length ? todoState[todoState.length - 1].id : 0) + 1;

    setTodoState(prevTodo =>
      prevTodo.concat({
        ...todo,
        id: nextId,
      })
    );
  };
};
