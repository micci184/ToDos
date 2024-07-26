import React from "react";
import { SubmitHandler,useForm } from "react-hook-form";

import { Status, useStore } from "@/store";

import CustomSelect from "./CustomSelect";

type FormValues = {
  title: string;
  content: string;
  status: Status;
};

const TodoForm: React.FC = () => {
  const addTodo = useStore((state) => state.addTodo);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<FormValues>();

  const statusValue = watch("status", "Incomplete");

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    addTodo(data.title, data.content, data.status);
    reset({ title: "", content: "", status: "Incomplete" });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-sm mx-auto px-2 sm:px-2 md:px-2 lg:px-2"
    >
      <label className="block text-sm text-gray-500 dark:text-gray-300 mt-8">
        Select status
      </label>
      <CustomSelect
        value={statusValue}
        onChange={(value) => setValue("status", value)}
        options={["Incomplete", "Progress", "Done"]}
      />
      <label className="block text-sm text-gray-500 dark:text-gray-300">
        Input task name
      </label>
      <input
        type="text"
        placeholder="Title"
        {...register("title", { required: "Title is required" })}
        className="block w-full mt-2 placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
      />
      {errors.title && <p className="text-red-500">{errors.title.message}</p>}
      <label className="block text-sm text-gray-500 dark:text-gray-300 mt-4">
        Input task content
      </label>
      <input
        type="text"
        placeholder="Content"
        {...register("content", { required: "Content is required" })}
        className="block w-full mt-2 placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
      />
      {errors.content && (
        <p className="text-red-500">{errors.content.message}</p>
      )}
      <button className="w-full mt-6 px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
        Add
      </button>
    </form>
  );
};

export default TodoForm;
