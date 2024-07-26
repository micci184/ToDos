"use client";

import React, { useState } from "react";

import TodoForm from "@/components/Todo/TodoForm";
import TodoItemList from "@/components/Todo/TodoItemList";
import { useStore, TodoItemProps, Status } from "@/store";

export default function Home() {
  const todoItems = useStore((state) => state.todoItems);
  const deleteTodo = useStore((state) => state.deleteTodo);
  const updateTodo = useStore((state) => state.updateTodo);
  const addTodo = useStore((state) => state.addTodo);
  const [currentTodo, setCurrentTodo] = useState<TodoItemProps | null>(null);

  // 更新用の関数を追加
  const handleUpdateTodo = (
    index: number,
    title: string,
    content: string,
    status: Status
  ) => {
    updateTodo({ index, title, content, status });
    setCurrentTodo(null); // 更新後、フォームをクリア
  };

  return (
    <div>
      <h1 className="text-center text-2xl text-slate-600 font-bold mb-4 pt-4">
        ToDos
      </h1>
      <div className="mb-8">
        {/* TodoFormにaddTodoおよびcurrentTodoを渡す */}
        <TodoForm addTodo={addTodo} currentTodo={currentTodo} />
      </div>
      <TodoItemList
        data={todoItems}
        deleteTodo={deleteTodo}
        updateTodo={(todo) => setCurrentTodo(todo)} // 更新用の関数を渡す
      />
    </div>
  );
}
