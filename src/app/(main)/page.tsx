"use client";

import React, { useState } from "react";

import TodoForm from "@/components/Todo/TodoForm";
import { Status, TodoItemProps } from "@/components/Todo/TodoItem";
import TodoItemList from "@/components/Todo/TodoItemList";

export default function Home() {
  const [todoItems, setTodoItems] = useState<TodoItemProps[]>([]);

  // Add Todo task
  const addTodo = (title: string, content: string, status: Status) => {
    setTodoItems([
      ...todoItems,
      {
        title,
        content,
        status,
        deleteTodo: () => deleteTodo(todoItems.length),
      },
    ]);
  };

  // Delete Todo task
  const deleteTodo = (index: number) => {
    setTodoItems(todoItems.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1 className="text-center text-2xl text-slate-600 font-bold mb-4 pt-4">
        ToDos
      </h1>
      <div className="mb-8">
        <TodoForm addTodo={addTodo} />
      </div>
      <TodoItemList data={todoItems} deleteTodo={deleteTodo} />
    </div>
  );
}
