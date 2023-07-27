import { useTasks } from "@/context/TaskContext"
import { useRouter } from "next/navigation"
import { toast } from 'react-hot-toast'

function TaskCard({ task }) {
  const router = useRouter()
  const { deleteTask } = useTasks()

  return (
    <div className="bg-gray-700 hover:bg-slate-600 cursor-pointer px-20 py-5 m-2 " onClick={() => router.push(`/edit/${task.id}`)}>
      <div className="flex justify-between">
        <h1 className="font-bold text-3xl py-4">
          {task.title}
        </h1>
        <button className="bg-red-700 hover:bg-red-700 px-3 py-1  items-center" onClick={(e) => {
          e.stopPropagation()
          const confirm = window.confirm('are you sure?')
          if (confirm) deleteTask(task.id)
          toast.success('Deleted succesfully')
        }}>Delete</button>
      </div>
      <p>{task.description}</p>
      <span className="text-gray-400 text-xs">{task.id}</span>
    </div >
  )
}

export default TaskCard
