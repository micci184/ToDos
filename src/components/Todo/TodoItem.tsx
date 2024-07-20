import React from "react";
import { FaTrash } from "react-icons/fa";

export type Status = "Done" | "Progress" | "Incomplete";

export type TodoItemProps = {
  title: string;
  content: string;
  status: Status;
  deleteTodo?: () => void;
};

const TodoItem: React.FC<TodoItemProps> = ({ title, content, status, deleteTodo }) => {
  let statusColor;
  switch (status) {
    case "Done":
      statusColor = "bg-green-500";
      break;
    case "Progress":
      statusColor = "bg-yellow-500";
      break;
    case "Incomplete":
      statusColor = "bg-gray-500";
      break;
    default:
      statusColor = "bg-gray-500";
  }

  return (
    <div className="flex max-w-custom mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
      <div className={`flex items-center justify-center w-12 ${statusColor}`}>
        <svg
          className="w-6 h-6 text-white fill-current"
          viewBox="0 0 40 40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z" />
        </svg>
      </div>

      <div className="flex-grow px-4 py-2 -mx-3">
        <div className="mx-3">
          <p className="me-1 mb-0 text-gray-700">{title}</p>
          <p className="text-sm text-gray-600 dark:text-gray-200">{content}</p>
          <p className="text-xs text-gray-400">Status: {status}</p>
        </div>
      </div>

      <div className="flex items-center px-4 py-2 ml-auto">
        <button onClick={deleteTodo} className="text-gray-500">
          <FaTrash size={20} />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
