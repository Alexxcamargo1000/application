'use client'
import { PlusCircle } from "lucide-react";
import axios from "axios";
import { FormEvent, useState } from "react";
import { useStory } from "@/store";
import { Task } from "@prisma/client";


export function FormTask() {
  const [task, setTask] = useState('')
  const {category, createNewTask, isLoading} = useStory((store) => {
    return {
      category: store.currentCategory,
      createNewTask: store.createNewTask,
      isLoading: store.isLoadingTask
    }
  }) 

  



  async function handleCreateNewTask(e: FormEvent) {
    e.preventDefault()
    
    if(!category?.name) {
      return
    }
    createNewTask(task, category.name)
    setTask('')
  } 

  return (
    <form data-loading={isLoading} onSubmit={handleCreateNewTask} className='w-full  max-sm:px-6 data-[loading=true]:opacity-50 data-[loading=true]:cursor-not-allowed'>
    <div className='w-full bg-zinc-900 flex items-center gap-3 px-3 py-1 rounded-lg focus-within:ring-2 focus-within:ring-teal-600 '>
      <input
        type="text"
        value={task}
        onChange={(e) => {setTask(e.target.value)}}
        className='flex-1 bg-transparent focus:outline-none py-3 focus:ring-transparent border-0 placeholder:text-zinc-500'
        placeholder='Adicione uma tarefa'
      />
      <button disabled={isLoading} type="submit" className='text-zinc-50 disabled:cursor-not-allowed' ><PlusCircle /> </button>
    </div>
  </form>
  )
}