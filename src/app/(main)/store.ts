import create from "zustand";

export type Status = "Done" | "Progress" | "Incomplete";

export type TodoItemProps = {
  title: string;
  content: string;
  status: Status;
};

type Store = {
  todoItems: TodoItemProps[];
  addTodo: (title: string, content: string, status: Status) => void;
  deleteTodo: (index: number) => void;
};

export const useStore = create<Store>((set) => ({
  todoItems: [],
  addTodo: (title, content, status) =>
    set((state) => ({
      todoItems: [...state.todoItems, { title, content, status }],
    })),
  deleteTodo: (index) =>
    set((state) => ({
      todoItems: state.todoItems.filter((_, i) => i !== index),
    })),
}));
