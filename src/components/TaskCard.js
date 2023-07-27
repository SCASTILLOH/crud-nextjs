import { useTasks } from "@/context/TaskContext"
import { useRouter } from "next/navigation"
import { toast } from 'react-hot-toast'

function TaskCard({ task }) {
  const router = useRouter()
  const { deleteTask } = useTasks()

  return (
    <div style={{
      background: "#202020",
      color: 'white'
    }} onClick={() => router.push(`/edit/${task.id}`)}>
      <h1>
        {task.title}
      </h1>
      <button onClick={(e) => {
        e.stopPropagation()
        const confirm = window.confirm('are you sure?')
        if (confirm) deleteTask(task.id)
        toast.success('Deleted succesfully')
      }}>Delete</button>
      <p>{task.description}</p>
    </div >
  )
}

export default TaskCard
