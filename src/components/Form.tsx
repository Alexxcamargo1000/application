'use client'
import { PlusCircle } from "lucide-react";
import axios from "axios";
import { FormEvent, useState } from "react";
import { useStory } from "@/store";


export function FormTask() {
  const [task, setTask] = useState('')
  const {categoryName} = useStory(store => {
    return {
      categoryName: store.currentCategory
    }
  }) 

  async function createNewTask( content : string, categoryName: string) {

    const category = await axios({
      method: "post",
      url: "/api/task",
      data: {
        content,
        categoryName
      },
    });
    
    console.log(category.data);
    
  }

  function handleCategory(e: FormEvent) {
    e.preventDefault()
    

    createNewTask(task, categoryName)
  } 

  return (
    <form onSubmit={handleCategory} className='w-full  max-sm:px-6'>
    <div className='w-full bg-zinc-900 flex items-center gap-3 px-2 py-1 rounded-lg focus-within:ring-2 focus-within:ring-teal-600 '>
      <input
        type="text"
        value={task}
        onChange={(e) => {setTask(e.target.value)}}
        className='flex-1 bg-transparent focus:ring-transparent border-0 placeholder:text-zinc-500'
        placeholder='Adicione uma tarefa'
      />
      <button type="submit" className='text-zinc-50'><PlusCircle /> </button>
    </div>
  </form>
  )
}