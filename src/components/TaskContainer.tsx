import { useStory } from "@/store";
import { Task } from "./Task";
import axios from "axios";
import { X } from "lucide-react";

export function TaskContainer() {

  const { tasks, updateTask, isLoading, finishedTask, numberTaskCompleted } = useStory((store) => {
    return {
      tasks: store.tasks,
      isLoading: store.isLoadingTask,
      updateTask: store.updateTask,
      finishedTask: store.finishedTask,
      numberTaskCompleted: store.numberTaskCompleted,

    }
  })

  async function handleUpdateTask(isChecked: boolean, taskId: string) {
    await updateTask(isChecked, taskId)
  }

  async function handleFinishedTask() {
    
  }



  return (
    <>
      <ul className='mt-16 max-h-[calc(100vh-25rem)] overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-900'>

        { tasks.map(task => (
          <Task key={task.id} {...task} onCheckedChange={handleUpdateTask} />
        ))}


      </ul>

      <div className='flex w-full justify-end pr-4 mt-6'>
        <span className='text-sm text-zinc-600'>{numberTaskCompleted}/{tasks.length}</span>
      </div>

      {numberTaskCompleted === tasks.length && tasks.length !== 0  && (
        <div>
          <button onClick={finishedTask} disabled={isLoading} className="px-4 py-2 leading-loose  text-sm font-semibold flex items-center gap-2 bg-red-600 hover:bg-red-700 transition-colors animate-fade rounded disabled:opacity-50 disabled:cursor-not-allowed">
            Finalizar tarefa
          </button>
        </div>
      )}
    </>
  )
}