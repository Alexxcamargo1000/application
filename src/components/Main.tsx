import { useStory } from '@/store'
import { CurrentCategory } from './CurrentCategory'
import { FormTask } from './Form'
import { useEffect } from 'react'
import { TaskContainer } from './TaskContainer'
import { EmptyTask } from './EmptyTask'

export function Main() {
  const { load, currentCategory } = useStory((store) => {
    return {
      currentCategory: store.currentCategory,
      load: store.load,
    }
  })

  useEffect(() => {
    load()
  }, [load])

  return (
    <div className="flex-1 flex items-center">
      <div className="max-w-[90rem] w-full h-screen flex justify-center pt-20">
        <div className="max-w-xl w-full ">
          <CurrentCategory />
          {currentCategory === null ? (
            <EmptyTask />
          ) : (
            <>
              <FormTask />
              <TaskContainer />
            </>
          )}
        </div>
      </div>
    </div>
  )
}
