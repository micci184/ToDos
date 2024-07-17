import TodoForm from "@/components/Todo/TodoForm";
import TodoItem from "@/components/Todo/TodoItem";

const todoItem = {
  title: "Sample",
  content: "Your account was registered!",
};

export default function Home() {
  return (
    <div>
      <h1 className="text-center text-2xl text-slate-600 font-bold mb-4 pt-4">
        ToDos
      </h1>
      <div className="mt-2">
        <TodoItem title={todoItem.title} content={todoItem.content} />
      </div>
      <div className="mt-2">
        <TodoItem title={todoItem.title} content={todoItem.content} />
      </div>
      <div className="mt-2">
        <TodoItem title={todoItem.title} content={todoItem.content} />
      </div>
      <div className="mt-2">
        <TodoForm />
      </div>
    </div>
  );
}
