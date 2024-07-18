import TodoForm from "@/components/Todo/TodoForm";
import TodoItemList from "@/components/Todo/TodoItemList";
import { TodoItemProps } from "@/components/Todo/TodoItem";

const todoItems: TodoItemProps[] = [
  {
    title: "Sample 1",
    content: "Your account was registered!",
    status: "Done",
  },
  {
    title: "Sample 2",
    content: "Your account was verified!",
    status: "Progress",
  },
  {
    title: "Sample 3",
    content: "Your account was updated!",
    status: "Incomplete",
  },
];

export default function Home() {
  return (
    <div>
      <h1 className="text-center text-2xl text-slate-600 font-bold mb-4 pt-4">
        ToDos
      </h1>
      <TodoItemList data={todoItems} />
      <div className="mt-2">
        <TodoForm />
      </div>
    </div>
  );
}
