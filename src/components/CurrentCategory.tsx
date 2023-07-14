import { useStory } from '@/store'
import { Button } from './ui/button'

export function CurrentCategory() {
  const { currentCategory, finishedTask, isLoadingTask } = useStory((story) => {
    return {
      currentCategory: story.currentCategory,
      finishedTask: story.finishedTask,
      isLoadingTask: story.isLoadingTask,
    }
  })
  return (
    <div className="mb-6 max-sm:px-6 flex justify-between items-center">
      {currentCategory?.name && (
        <>
          <span className="text-teal-600 text-xl font-semibold">
            {currentCategory.name}
          </span>
          <Button
            onClick={() => finishedTask()}
            disabled={isLoadingTask}
            variant="destructive"
          >
            Excluir
          </Button>
        </>
      )}
    </div>
  )
}
