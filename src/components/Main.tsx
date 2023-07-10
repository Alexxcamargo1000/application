import { useStory } from "@/store";
import { CurrentCategory } from "./CurrentCategory";
import { FormTask } from "./Form";
import { Task } from "./Task";
import { useEffect } from "react";

export function Main() {

  const {tasks, load} = useStory((store) => {
    return {
      tasks: store.tasks,
      load: store.load
    }
  })

  useEffect(()=> {
    load()
  }, [load])

  return (
    <div className='flex-1'>
    <div className='max-w-[90rem] w-full h-screen flex justify-center pt-28'>
      <div className='max-w-xl w-full'>
       <CurrentCategory/>
        
        <FormTask/>

        <ul className='mt-16 max-h-list overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-900'>

        {tasks.map(task => (
          <Task key={task.id} {...task} />
        ))}


        </ul>

        <div className='flex w-full justify-end pr-4 mt-6'>
          <span className='text-sm text-zinc-600'>2/3</span>
        </div>
      </div>

    </div>
  </div>
  )
}