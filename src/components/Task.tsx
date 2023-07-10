'use client'

import { Task as TaskType } from '@prisma/client';
import * as Checkbox from '@radix-ui/react-checkbox';
import { Check } from 'lucide-react';

interface TaskProps extends TaskType {

}

export function Task(props: TaskProps) {
  return (
    <li className='p-4 flex items-center justify-start'>
    <Checkbox.Root className='group flex items-start justify-center gap-2' checked={props.ischecked}>
      <div className='h-6 w-6 min-w-[24px] flex  items-center justify-center rounded bg-zinc-800'>

      <Checkbox.Indicator>
        <Check className='h-4 w-4 '/>
      </Checkbox.Indicator>
      </div>
      <p className='text-zinc-100 max-sm:max-w-[320px] text-start group-data-[state=checked]:text-zinc-700 group-data-[state=checked]:line-through'>{props.content}</p>
    </Checkbox.Root>
  </li>
  )
}