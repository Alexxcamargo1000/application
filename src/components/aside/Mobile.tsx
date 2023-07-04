'use client'
import { Plus, PlusCircle, X } from "lucide-react";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { useState } from "react";

export function Mobile() {


  return (
    <DropdownMenu.Root >
      <DropdownMenu.Trigger className="group cursor-pointer lg:hidden data-[state=open] flex items-center justify-center absolute bottom-2 left-2 w-12 h-12  rounded-full bg-teal-500">
        <PlusCircle className="text-zinc-900 group-data-[state=open]:rotate-45 transition-transform" />
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal className="">
        <DropdownMenu.Content sideOffset={5} className="bg-zinc-900 w-72 shadow-lg ring-1 ring-zinc-800 text-zinc-100 p-4 translate-x-4 rounded-lg data-[state=open]:animate-fade">
          <DropdownMenu.Label className="flex gap-2 items-center px-4 py-5">
            {/* Image */}
            <div className='w-14 h-14 rounded-full bg-slate-400' />
            <div className='flex flex-col'>
              <span className='text-xs text-zinc-600'>bem vindo!</span>
              <span className='text-sm text-zinc-100'>Alex Camargo</span>
            </div>

          </DropdownMenu.Label>

          <DropdownMenu.Label className="my-6">
            <span className='font-semibold text-xl text-center block'>Categorias</span>
          </DropdownMenu.Label>

          <DropdownMenu.Group asChild >
            <ul className=" max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-800 pr-1 text-zinc-300 text-sm  capitalize divide-y divide-teal-800 ">
              <DropdownMenu.Item asChild>
                <li className="p-3 focus:outline-none focus:ring-1 focus:ring-teal-500">
                  <button className='w-full h-full text-left hover:opacity-70'>Casa</button>
                </li>
              </DropdownMenu.Item>
              <DropdownMenu.Item asChild>
                <li className="p-3 focus:outline-none focus:ring-1 focus:ring-teal-500">
                  <button className='w-full h-full text-left hover:opacity-70'>Casa</button>
                </li>
              </DropdownMenu.Item>
              <DropdownMenu.Item asChild>
                <li className="p-3 focus:outline-none focus:ring-1 focus:ring-teal-500">
                  <button className='w-full h-full text-left hover:opacity-70'>Casa</button>
                </li>
              </DropdownMenu.Item>
            </ul>



          </DropdownMenu.Group>

          <button className='font-semibold w-full rounded-md flex items-center gap-2 justify-center bg-teal-600 py-3 mt-4 hover:bg-teal-700 transition-colors'>
            Criar uma nova
            <Plus />
          </button>
          <DropdownMenu.Arrow className="fill-zinc-900" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}