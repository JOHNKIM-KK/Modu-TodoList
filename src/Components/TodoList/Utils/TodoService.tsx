import { useState } from "react";
import { LOCAL_STORAGE, MockUp } from "Utils";

export type ITodoState = {
  id: number;
  taskName: string;
  status: number;
  createdAt: string;
  dueDate: string;
  importance: number;
};

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
