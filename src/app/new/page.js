"use client";
import { useTasks } from "@/context/TaskContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

function Page({ params }) {
  const { tasks, createTask, updateTask } = useTasks();
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const router = useRouter();

  const onSubmit = (data) => {
    if (params.id) {
      updateTask(params.id, data);
      toast.success('Updated succesfully')
    } else {
      createTask(data.title, data.description);
      toast.success('Created succesfully')
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
    <div className="flex justify-center h-full items-center">
      <form className="bg-gray-700 p-10" onSubmit={handleSubmit(onSubmit)}>
        <h2>Add Task</h2>
        <input className="bg-gray-800 py-3 px-4 mb-2 block focus:outline-none w-full "
          placeholder="write a title"
          {...register("title", { required: true })}
        />
        {errors.title && (<span className="text-red-400 block mb-2">This field is required</span>)}
        <textarea className="bg-gray-800 py-3 px-4 mb-2 block focus:outline-none w-full "
          placeholder="write a description"
          {...register("description", { required: true })}
        />
        {errors.description && (<span className="text-red-400 block mb-2">This field is required</span>)}
        <button className="bg-green-500 hover:bg-green-400 px-4 py-2 rounded-sm disabled:opacity-30">Save</button>
      </form>
    </div>
  );
}

export default Page;
