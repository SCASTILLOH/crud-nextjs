"use client"
import { useTasks } from "@/context/TaskContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


function Page({ params }) {
  const { tasks, createTask, updateTask } = useTasks()
  const [task, setTask] = useState({ title: '', description: '' });
  const router = useRouter()

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value })
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    if (params.id) {
      updateTask(params.id, task)
    } else {
      createTask(task.title, task.description);
    }
    router.push('/')
  }

  useEffect(() => {
    if (params.id) {
      const taskFound = tasks.find(task => task.id === params.id)
      if (taskFound) {
        setTask({ title: taskFound.title, description: taskFound.description })
      }
    }
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder="write a title" onChange={handleChange} value={task.title} />
      <textarea
        name="description"
        placeholder="write a description"
        onChange={handleChange}
        value={task.description}
      />
      <button>Save</button>
    </form>
  );
}

export default Page;
