/* eslint-disable react/jsx-key */
"use client"
import TaskCard from "@/components/TaskCard"
import { useTasks } from "@/context/TaskContext"

function Page() {

  const { tasks } = useTasks()

  return (
    <div className="flex justify-center">
      {tasks.length ? <div className="w-full">
        {tasks.map(task => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div> : <p className="font-bold text-3xl">You don't have tasks</p>}
    </div>
  )
}

export default Page
