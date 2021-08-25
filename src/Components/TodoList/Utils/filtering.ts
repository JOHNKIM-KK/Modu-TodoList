import { ITodoState } from "./TodoService";

const filtering = (
  filterName: string,
  todoState: ITodoState[],
  setTodoState: React.Dispatch<React.SetStateAction<ITodoState[]>>
): void => {
  switch (filterName) {
    case "importance":
      const newTodoState = [...todoState];
      setTodoState(
        newTodoState.sort(
          (firstTodo, secondTodo) =>
            secondTodo.importance - firstTodo.importance
        )
      );
      break;
    case "dueDate":
      console.log("dueDate");
      break;
  }
};

export default filtering;
