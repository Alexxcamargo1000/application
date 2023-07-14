import { SignIn } from '@clerk/nextjs'
import Image from 'next/image'
export default function Page() {
  return (
    <div className="bg-zinc-950 h-screen w-screen grid grid-cols-2 grid-rows-1 max-md:grid-cols-1 ">
      <div className="flex flex-col items-center justify-center max-md:hidden">
        <h1 className="max-w-sm leading-tight text-zinc-300 text-5xl mb-12 font-extrabold">
          Aplicação para criar <span className="text-teal-600">tarefas</span>
        </h1>
        <Image src="/taskPreview.svg" alt="" width={400} height={400} />
      </div>
      <div className="flex items-center justify-center">
        <SignIn />
      </div>
    </div>
  )
}
