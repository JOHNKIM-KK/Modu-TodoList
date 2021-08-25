import { useState, useEffect, useCallback } from "react";
import { LOCAL_STORAGE, MockUp } from "Utils";
import filtering from "./TodoFiltering";

export type ITodoState = {
  id: number;
  taskName: string;
  status: number;
  createdAt: string;
  dueDate: string;
  importance: number;
};

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
    importance: 1, // 0~2
  },
];

const initialTodos: ITodoState[] = [
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
    importance: 2, // 0~2
  },
  {
    id: 3,
    taskName: "아무거나 읽기",
    status: 1,
    createdAt: "2021-02-03",
    dueDate: "2021-07-07",
    importance: 3, // 0~2
  },
  {
    id: 4,
    taskName: "이것저것 하기",
    status: 1,
    createdAt: "2021-02-03",
    dueDate: "2021-07-07",
    importance: 2, // 0~2
  },
];

interface TodoServiceReturn {
  todoState: ITodoState[];
  toggleStatus: (id: number) => void;
  toggleImportance: (id: number, nextImportance: number) => void;
  createTodo: (todo: ITodoState) => void;
  removeTodo: (id: number) => void;
  filterTodo: (filterName: string) => void;
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
    // const data = LOCAL_STORAGE.get("todos");
    // const temp = data ? data : MockUp;
    // setTodoState(temp);
    localStorage.setItem("todos", JSON.stringify(todoState));
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
      const nextId =
        (todoState.length ? todoState[todoState.length - 1].id : 0) + 1;
      setTodoState(prevTodo =>
        prevTodo.concat({
          ...todo,
          id: nextId,
        })
      );
    },
    [todoState]
  );

  const filterTodo = (filterName: string) => {
    console.log(filterName);
    const newTodoState = [...todoState];
    switch (filterName) {
      case "importance":
        console.log(
          newTodoState.sort(
            (firstTodo, secondTodo) =>
              secondTodo.importance - firstTodo.importance
          )
        );
        setTodoState(
          newTodoState.sort(
            (firstTodo, secondTodo) =>
              secondTodo.importance - firstTodo.importance
          )
        );
        break;
      default:
    }
  };

  useEffect(() => {
    console.log(todoState);
  }, [todoState]);

  return {
    todoState,
    toggleStatus,
    toggleImportance,
    createTodo,
    removeTodo,
    filterTodo,
  };
};
