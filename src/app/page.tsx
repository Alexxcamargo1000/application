'use client'

import { Aside } from '@/components/aside'
import { CurrentCategory } from '@/components/CurrentCategory'
import { FormTask } from '@/components/Form'
import { Main } from '@/components/Main'
import { Task } from '@/components/Task'
import { useStory } from '@/store'
import { useEffect } from 'react'



export default function Home() {




  return (
    <main className='flex h-screen bg-zinc-950 text-zinc-100'>
      <Aside/>

      <Main/>
    </main>

  )
}
