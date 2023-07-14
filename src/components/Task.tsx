'use client'

import { useStory } from '@/store'
import { Task as TaskType } from '@prisma/client'
import * as Checkbox from '@radix-ui/react-checkbox'
import { Check } from 'lucide-react'
import { useState } from 'react'
import { AlertDialogRemoveTask } from './AlertDialogRemoveTask'

interface TaskProps extends TaskType {
  onCheckedChange: (isChecked: boolean, taskId: string) => void
}

export function Task(props: TaskProps) {
  const [isHover, setIsHover] = useState(false)

  const { isLoading } = useStory((store) => {
    return {
      isLoading: store.isLoadingTask,
    }
  })

  const handleHover = () => {
    setIsHover(true)
  }

  const handleLeave = () => {
    setIsHover(false)
  }

  return (
    <li
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      className="p-4 relative flex items-center justify-start group"
    >
      <Checkbox.Root
        className="group flex flex-1 items-start justify-between  gap-2 disabled:cursor-progress"
        disabled={isLoading}
        checked={props.ischecked}
        onCheckedChange={() =>
          props.onCheckedChange(!props.ischecked, props.id)
        }
      >
        <div className=" flex  gap-2 items-start ">
          <div className="h-6 w-6 min-w-[24px] flex  items-center justify-center rounded bg-zinc-800">
            <Checkbox.Indicator>
              <Check className="h-4 w-4 " />
            </Checkbox.Indicator>
          </div>
          <p className="text-zinc-100 max-sm:max-w-[320px] text-start group-data-[state=checked]:text-zinc-700 group-data-[state=checked]:line-through">
            {props.content}{' '}
          </p>
        </div>
      </Checkbox.Root>
      <AlertDialogRemoveTask isHover={isHover} taskId={props.id} />
    </li>
  )
}
