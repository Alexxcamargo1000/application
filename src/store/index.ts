import { create } from 'zustand'
import type { Task, Category } from "@prisma/client"
import axios from 'axios'


interface TaskStoreProps {
  task: Task | null,
  tasks: Task[] | [],

}

interface CategoryStoreProps {
  categories: Category[] | [],
  tasks: Task[] | [],
  currentCategory: Category | null,

  setCurrentCategory: (id: string) => void,
  load: () => Promise<void>
  loadTask: (currentCategory: Category) =>  Promise<void>
}



export const useStory = create<CategoryStoreProps>((set, get) => {
  return {
    categories: [],
    currentCategory: null,
    tasks: [],
    load: async () => {

      const categories = await axios({
        url: '/api/category',
        method: 'get'
      })



      set({
        categories: categories.data,
      })
    },

    loadTask: async (currentCategory: Category) => {
  
      const tasks = await axios({
        url: `/api/task?categoryId=${currentCategory.id}`,
        method: 'get'
      })

      set({
        tasks: tasks.data
      })

    },

      setCurrentCategory: (id: string) => {
        const categories = get().categories

        const currentCategory = categories.find(category => category.id === id)


         
          set({
            currentCategory: currentCategory,
          }) 
          
          if(currentCategory) {
            get().loadTask(currentCategory)
          }
  

        
       

      },


    
  }
  })