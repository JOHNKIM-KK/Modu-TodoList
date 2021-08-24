import { ITodoState } from "Components/TodoList/Utils/TodoService";

interface IStorage {
  get: (key: string) => string;
  set: (key: string, value: ITodoState[]) => void;
  remove: (key: string) => void;
  clear: (key: string) => void;
}

const storage = (storage: Storage): IStorage => {
  return {
    get(key: string) {
      try {
        const getKey = storage.getItem(key);
        if (getKey) {
          return JSON.parse(getKey);
        }
      } catch (error) {
        return null;
      }
    },
    set(key: string, value: ITodoState[]) {
      storage.setItem(key, JSON.stringify(value));
    },
    remove(key: string) {
      storage.removeItem(key);
    },
    clear() {
      storage.clear();
    },
  };
};

export default storage;
