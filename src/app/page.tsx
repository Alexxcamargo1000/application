'use client'
import { Aside } from '@/components/aside'
import { Main } from '@/components/Main'

export default function Home() {
  return (
    <main className="flex h-screen bg-zinc-950 text-zinc-100">
      <Aside />
      <Main />
    </main>
  )
}
