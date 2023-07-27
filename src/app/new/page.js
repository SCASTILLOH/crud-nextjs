"use client";
import { useTasks } from "@/context/TaskContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

function Page({ params }) {
  const { tasks, createTask, updateTask } = useTasks();
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const router = useRouter();

  const onSubmit = (data) => {
    if (params.id) {
      updateTask(params.id, data);
    } else {
      createTask(data.title, data.description);
    }
    router.push("/");
  };

  useEffect(() => {
    if (params.id) {
      const taskFound = tasks.find((task) => task.id === params.id);
      if (taskFound) {
        setValue('title', taskFound.title);
        setValue('description', taskFound.description);
      }
    }
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        placeholder="write a title"
        {...register("title", { required: true })}
      />
      {errors.title && (<span>This field is required</span>)}
      <textarea
        placeholder="write a description"
        {...register("description", { required: true })}
      />
      {errors.description && (<span>This field is required</span>)}
      <button>Save</button>
    </form>
  );
}

export default Page;
