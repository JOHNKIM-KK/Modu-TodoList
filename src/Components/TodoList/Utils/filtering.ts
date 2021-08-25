import { ITodoState } from "./TodoService";

const filtering = (
  filterName: string,
  todoState: ITodoState[]
): ITodoState[] => {
  const newTodoState = [...todoState];
  switch (filterName) {
    case "importance":
      newTodoState.sort(
        (firstTodo, secondTodo) => secondTodo.importance - firstTodo.importance
      );
      break;
    case "recent":
      newTodoState.sort((firstTodo, secondTodo) => {
        return firstTodo.createdAt > secondTodo.createdAt
          ? -1
          : firstTodo.createdAt < secondTodo.createdAt
          ? 1
          : 0;
      });
      break;
    case "createdDate":
      newTodoState.sort((firstTodo, secondTodo) => {
        return firstTodo.createdAt < secondTodo.createdAt
          ? -1
          : firstTodo.createdAt > secondTodo.createdAt
          ? 1
          : 0;
      });
      break;
    case "dueDate":
      newTodoState.sort((firstTodo, secondTodo) => {
        return firstTodo.dueDate < secondTodo.dueDate
          ? -1
          : firstTodo.dueDate > secondTodo.dueDate
          ? 1
          : 0;
      });
      break;
  }
  return newTodoState;
};

export default filtering;
