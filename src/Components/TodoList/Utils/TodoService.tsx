import { useState, useEffect, useCallback } from "react";
import { LOCAL_STORAGE, MockUp } from "Utils";
import filtering from "./filtering";

export type ITodoState = {
  id: number;
  taskName: string;
  status: number;
  createdAt: string;
  dueDate: string;
  importance: number;
};

const initialTodos: ITodoState[] = MockUp;

interface TodoServiceReturn {
  todoState: ITodoState[];
  toggleStatus: (id: number) => void;
  toggleImportance: (id: number, nextImportance: number) => void;
  createTodo: (todo: ITodoState) => void;
  removeTodo: (id: number) => void;
  filterTodo: (filterName: string) => void;
  setTodoState: (state: ITodoState[]) => void;
}

export const TodoService = (): TodoServiceReturn => {
  const [todoState, setTodoState] = useState<ITodoState[]>(initialTodos);

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    saveData();
  }, [todoState]);

  const saveData = useCallback(() => {
    LOCAL_STORAGE.set("todos", todoState);
  }, [todoState]);

  const loadData = useCallback(() => {
    const data = LOCAL_STORAGE.get("todos");
    const temp = data ? data : MockUp;
    setTodoState(temp);
  }, []);

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

  const createTodo = useCallback(
    (todo: ITodoState) => {
      const nextId = todoState.reduce(
        (accumulator: number, currentValue: ITodoState) => {
          if (currentValue.id >= accumulator) {
            return currentValue.id;
          }
          return accumulator;
        },
        0
      );
      setTodoState(prevTodo =>
        prevTodo.concat({
          ...todo,
          id: nextId + 1,
        })
      );
    },
    [todoState]
  );

  const filterTodo = (filterName: string) => {
    setTodoState(filtering(filterName, todoState));
  };

  return {
    todoState,
    toggleStatus,
    toggleImportance,
    createTodo,
    removeTodo,
    filterTodo,
    setTodoState,
  };
};
