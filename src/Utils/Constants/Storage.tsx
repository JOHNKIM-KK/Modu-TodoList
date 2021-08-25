import { ITodoState } from "Components/TodoList/";

interface IStorage {
  get: (key: string) => ITodoState[] | null;
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
          const temp = JSON.parse(getKey);
          return temp;
        }
        return null;
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
