import { create, StateCreator } from "zustand";
import { persist, PersistOptions } from "zustand/middleware";

export type Status = "Done" | "Progress" | "Incomplete";

export type TodoItemProps = {
  title: string;
  content: string;
  status: Status;
  index?: number; // 追加
};

type Store = {
  todoItems: TodoItemProps[];
  addTodo: (title: string, content: string, status: Status) => void;
  deleteTodo: (index: number) => void;
  updateTodo: (todo: TodoItemProps) => void;
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
      updateTodo: (updatedTodo: TodoItemProps) =>
        set((state) => ({
          todoItems: state.todoItems.map((todo, i) =>
            i === updatedTodo.index ? { ...todo, ...updatedTodo } : todo
          ),
        })),
    }),
    {
      name: "todo-storage", // ローカルストレージのキー名
    }
  )
);
