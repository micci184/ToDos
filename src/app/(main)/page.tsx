"use client";

import React, { useState } from "react";
import TodoForm from "@/components/Todo/TodoForm";
import TodoItemList from "@/components/Todo/TodoItemList";
import { TodoItemProps } from "@/components/Todo/TodoItem";

export default function Home() {
  const [todoItems, setTodoItems] = useState<TodoItemProps[]>([
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
  ]);

  const addTodo = (title: string, content: string) => {
    setTodoItems([...todoItems, { title, content, status: "Incomplete" }]);
  };

  return (
    <div>
      <h1 className="text-center text-2xl text-slate-600 font-bold mb-4 pt-4">
        ToDos
      </h1>
      <TodoItemList data={todoItems} />
      <div className="mt-2">
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}
