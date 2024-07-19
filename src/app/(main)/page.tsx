"use client";

import React, { useState } from "react";

import TodoForm from "@/components/Todo/TodoForm";
import { Status,TodoItemProps } from "@/components/Todo/TodoItem";
import TodoItemList from "@/components/Todo/TodoItemList";

export default function Home() {
  const [todoItems, setTodoItems] = useState<TodoItemProps[]>([    
  ]);

  const addTodo = (title: string, content: string, status: Status) => {
    setTodoItems([...todoItems, { title, content, status }]);
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
