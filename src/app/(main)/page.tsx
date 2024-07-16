import TodoForm from "@/components/Todo/TodoForm";
import TodoItem from "@/components/Todo/TodoItem";

export default function Home() {
  return (
    <div>
      <h1 className="text-center text-2xl text-slate-600 font-bold mb-4 pt-4">
        ToDos
      </h1>
      <div className="mt-2">
        <TodoItem />
      </div>
      <div className="mt-2">
        <TodoItem />
      </div>
      <div className="mt-2">
        <TodoItem />
      </div>
      <div className="mt-2">
        <TodoForm />
      </div>
    </div>
  );
}
