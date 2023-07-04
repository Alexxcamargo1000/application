'use client'
import { PlusCircle } from "lucide-react";

export function FormTask() {

  return (
    <form className='w-full  max-sm:px-6'>
    <div className='w-full bg-zinc-900 flex items-center gap-3 px-2 py-1 rounded-lg focus-within:ring-2 focus-within:ring-teal-600 '>
      <input
        type="text"
        className='flex-1 bg-transparent focus:ring-transparent border-0 placeholder:text-zinc-500'
        placeholder='Adicione uma tarefa'
      />
      <button type="submit" className='text-zinc-50'><PlusCircle /> </button>
    </div>
  </form>
  )
}