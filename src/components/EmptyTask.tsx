import Image from 'next/image'
export function EmptyTask() {
  return (
    <div className="w-full flex items-center justify-center">
      <div className='space-y-6'>
        <h2 className='text-2xl mb-16 max-w-sm font-medium '>Selecione uma Task ou crie uma nova</h2>
        <Image
          className=' mx-auto'
          src="/taskPreview.svg"
          alt=''
          width={300}
          height={300}
        />

      </div>
    </div>
  )
}