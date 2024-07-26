"use client";

import React from "react";

import TodoForm from "@/components/Todo/TodoForm";
import TodoItemList from "@/components/Todo/TodoItemList";
import { useStore } from "@/store"; // 変更

export default function Home() {
  const todoItems = useStore((state) => state.todoItems);
  const deleteTodo = useStore((state) => state.deleteTodo);
  const updateTodo = useStore((state) => state.updateTodo);

  return (
    <div>
      <h1 className="text-center text-2xl text-slate-600 font-bold mb-4 pt-4">
        ToDos
      </h1>
      <div className="mb-8">
        <TodoForm />
      </div>
      <TodoItemList
        data={todoItems}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
}
