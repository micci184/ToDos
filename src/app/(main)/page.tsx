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
  const [isEditing, setIsEditing] = useState(false);

  const handleUpdateTodo = (todo: TodoItemProps) => {
    setCurrentTodo(todo);
    setIsEditing(true);
  };

  const cancelEdit = () => {
    setCurrentTodo(null);
    setIsEditing(false);
  };

  return (
    <div>
      <h1 className="text-center text-2xl text-slate-600 font-bold mb-4 pt-4">
        ToDos
      </h1>
      <div className="mb-8">
        <TodoForm
          addTodo={addTodo}
          updateTodo={updateTodo}
          currentTodo={currentTodo}
          isEditing={isEditing}
          cancelEdit={cancelEdit}
        />
      </div>
      <TodoItemList
        data={todoItems}
        deleteTodo={deleteTodo}
        updateTodo={handleUpdateTodo}
      />
    </div>
  );
}
