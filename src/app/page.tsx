'use client'
import { Aside } from '@/components/aside'
import { FormTask } from '@/components/Form'
import { Task } from '@/components/Task'

export default function Home() {
  return (
    <main className='flex h-screen bg-zinc-950 text-zinc-100'>
      <Aside/>
      <div className='flex-1'>
        <div className='max-w-[90rem] w-full h-screen flex justify-center pt-28'>
          <div className='max-w-xl w-full'>
            <div className='mb-6 max-sm:px-6'>
              <span className='text-teal-600 text-xl font-semibold'>Casa</span>
            </div>
            
            <FormTask/>

            <ul className='mt-16 max-h-list overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-900'>

              <Task />
              <Task />
              <Task />
              <Task />
              <Task />
              <Task />
              <Task />
              <Task />
              <Task />

            </ul>

            <div className='flex w-full justify-end pr-4 mt-6'>
              <span className='text-sm text-zinc-600'>2/3</span>
            </div>
          </div>

        </div>
      </div>
    </main>

  )
}
