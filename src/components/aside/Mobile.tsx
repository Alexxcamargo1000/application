'use client'
import { PlusCircle } from 'lucide-react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { useStory } from '@/store'
import { CreateNewCategory } from '../CreateNewCategory'

export function Mobile() {
  const { categories, setCurrentCategory } = useStory((story) => {
    return {
      load: story.load,
      categories: story.categories,
      setCurrentCategory: story.setCurrentCategory,
    }
  })
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="group cursor-pointer lg:hidden data-[state=open] flex items-center justify-center absolute bottom-2 left-2 w-12 h-12  rounded-full bg-teal-500">
        <PlusCircle className="text-zinc-900 group-data-[state=open]:rotate-45 transition-transform" />
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          sideOffset={5}
          className="bg-zinc-900 w-72 shadow-lg ring-1 ring-zinc-800 text-zinc-100 p-4 translate-x-4 rounded-lg data-[state=open]:animate-fade"
        >
          <DropdownMenu.Label className="my-6">
            <span className="font-semibold text-xl text-center block">
              Categorias
            </span>
          </DropdownMenu.Label>

          <DropdownMenu.Group asChild>
            <ul className=" max-h-80  overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-800 pr-1 text-zinc-300 text-sm  capitalize divide-y divide-teal-800 ">
              {categories.map((category) => (
                <DropdownMenu.Item key={category.id} asChild>
                  <li className="p-3 focus:outline-none focus:ring-1 focus:ring-teal-500">
                    <button
                      onClick={() => setCurrentCategory(category.id)}
                      className="w-full h-full text-left hover:opacity-70"
                    >
                      {category.name}
                    </button>
                  </li>
                </DropdownMenu.Item>
              ))}
            </ul>
          </DropdownMenu.Group>

          <CreateNewCategory className="font-semibold w-full rounded-md flex items-center gap-2 justify-center leading-none bg-teal-600 py-3 mt-4 hover:bg-teal-700 transition-colors" />
          <DropdownMenu.Arrow className="fill-zinc-900" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
