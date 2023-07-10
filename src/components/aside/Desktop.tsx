'use client'
import { Plus } from "lucide-react";
import { UserButton } from "../UserButton";
import { Category } from "@prisma/client";
import { useStory } from "@/store";
import { useEffect } from "react";


export function Desktop() {

  const {categories, load, setCurrentCategory} = useStory(story => {
    return {
      load: story.load,
      categories: story.categories,
      setCurrentCategory: story.setCurrentCategory
    }
  })

  useEffect(() => {
    load()
  }, [load])

  return (
    <aside className= 'hidden  bg-zinc-900 lg:flex max-h-screen flex-col border-r border-zinc-700 w-full max-w-xs '>
    <div className='flex gap-2 items-center px-4 py-5   '>
        <UserButton />
      {/* Image */}     
    </div>

    <div className='flex-1 mt-8  px-4 py-5 o overflow-hidden overflow-y-auto scrollbar-thin scrollbar-track-zinc-900 scrollbar-thumb-zinc-800'>
        <span className='font-semibold text-xl text-center block'>Categorias</span>
        {/* <div className='border-b my-2  border-zinc-700 mb-6' /> */}
        <ul className=' text-zinc-300 text-sm max-h-category  capitalize divide-y divide-teal-800 max-h[]'>
          {categories.map(category => (
            <li key={category.id} className='p-3   transition-colors'>
            <button onClick={() => setCurrentCategory(category.id)}  className='w-full h-full text-left hover:opacity-70'>{category.name}</button>
          </li>
          ))}
        </ul>
      </div>

      <button className='font-semibold flex items-center gap-2 justify-center bg-teal-600 h-14 hover:bg-teal-700 transition-colors'>
        Criar uma nova
        <Plus />
      </button>
    </aside>
  )
}