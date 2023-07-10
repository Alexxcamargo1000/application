import { useStory } from "@/store"


export function CurrentCategory() {

  const {currentCategory} = useStory(story => {
    return {
      currentCategory: story.currentCategory
    }
  })
  return (
    <div className='mb-6 max-sm:px-6'>
    <span className='text-teal-600 text-xl font-semibold'>{currentCategory?.name}</span>
  </div>
  )
}