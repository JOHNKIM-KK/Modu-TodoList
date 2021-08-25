import { STATUS } from "Utils";
import { ITodoState } from "Components/TodoList";

const { NOT_STARTED, ONGOING, FINISHED } = STATUS;

const MockUp: ITodoState[] = [
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

export default MockUp;
