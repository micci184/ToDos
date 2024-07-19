import React, { useState } from "react";

import CustomSelect from "./CustomSelect";
import { Status } from "./TodoItem";

type TodoFormProps = {
  addTodo: (title: string, content: string, status: Status) => void;
};

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState<Status>("Incomplete");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTodo(title, content, status);
    setTitle("");
    setContent("");
    setStatus("Incomplete");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-sm mx-auto px-6 sm:px-2 md:px-8 lg:px-10"
    >
      <label className="block text-sm text-gray-500 dark:text-gray-300 mt-8">
        Select status
      </label>
      <CustomSelect
        value={status}
        onChange={setStatus}
        options={["Incomplete", "Progress", "Done"]}
      />
      <label className="block text-sm text-gray-500 dark:text-gray-300">
        Input task name
      </label>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="block w-full mt-2 placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
      />
      <label className="block text-sm text-gray-500 dark:text-gray-300 mt-4">
        Input task content
      </label>
      <input
        type="text"
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="block w-full mt-2 placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
      />
      <button className="w-full mt-2 px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
        Add
      </button>
    </form>
  );
};

export default TodoForm;
