import { create, StateCreator } from "zustand";
import { persist, PersistOptions } from "zustand/middleware";

export type Status = "Done" | "Progress" | "Incomplete";

export type TodoItemProps = {
  index?: number;
  title: string;
  content: string;
  status: Status;
};

type Store = {
  todoItems: TodoItemProps[];
  addTodo: (title: string, content: string, status: Status) => void;
  deleteTodo: (index: number) => void;
  updateTodo: (
    index: number,
    title: string,
    content: string,
    status: Status
  ) => void;
};

type MyPersist = (
  config: StateCreator<Store>,
  options: PersistOptions<Store>
) => StateCreator<Store>;

export const useStore = create<Store>(
  (persist as MyPersist)(
    (set) => ({
      todoItems: [],
      addTodo: (title: string, content: string, status: Status) =>
        set((state) => ({
          todoItems: [...state.todoItems, { title, content, status }],
        })),
      deleteTodo: (index: number) =>
        set((state) => ({
          todoItems: state.todoItems.filter((_, i) => i !== index),
        })),
      updateTodo: (
        index: number,
        title: string,
        content: string,
        status: Status
      ) =>
        set((state) => ({
          todoItems: state.todoItems.map((todo, i) =>
            i === index ? { ...todo, title, content, status } : todo
          ),
        })),
    }),
    {
      name: "todo-storage", // ローカルストレージのキー名
    }
  )
);
