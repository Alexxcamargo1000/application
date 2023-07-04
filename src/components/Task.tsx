'use client'

import * as Checkbox from '@radix-ui/react-checkbox';
import { Check } from 'lucide-react';

export function Task() {
  return (
    <li className='p-4 flex items-center justify-center'>
    <Checkbox.Root className='group flex items-start justify-center gap-2'>
      <div className='h-6 w-6 min-w-[24px] flex  items-center justify-center rounded bg-zinc-800'>

      <Checkbox.Indicator>
        <Check className='h-4 w-4 '/>
      </Checkbox.Indicator>
      </div>
      <p className='text-zinc-100 max-sm:max-w-[320px] text-start group-data-[state=checked]:text-zinc-700 group-data-[state=checked]:line-through'>veniam minim ex nulla  minim ex nulla inveniam minim ex nulla in</p>
    </Checkbox.Root>
  </li>
  )
}