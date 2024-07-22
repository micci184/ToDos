"use client";

import React, { useState } from "react";
import TodoForm from "@/components/Todo/TodoForm";
import { useStore } from "@/store";
import TodoItemList from "@/components/Todo/TodoItemList";

export default function Home() {
  const todoItems = useStore((state) => state.todoItems);
  const deleteTodo = useStore((state) => state.deleteTodo);

  return (
    <div>
      <h1 className="text-center text-2xl text-slate-600 font-bold mb-4 pt-4">
        ToDos
      </h1>
      <div className="mb-8">
        <TodoForm />
      </div>
      <TodoItemList data={todoItems} deleteTodo={deleteTodo} />
    </div>
  );
}
