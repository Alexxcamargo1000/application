import { create } from 'zustand'
import type { Task, Category } from '@prisma/client'
import axios from 'axios'

interface CategoryStoreProps {
  categories: Category[] | []
  tasks: Task[] | []
  currentCategory: Category | null
  isLoadingTask: boolean
  numberTaskCompleted: number
  setCurrentCategory: (id: string) => void
  createCategory: (name: string) => Promise<void>
  load: () => Promise<void>
  loadTask: (currentCategory: Category) => Promise<void>
  updateTask: (isChecked: boolean, taskId: string) => Promise<void>
  createNewTask: (content: string, categoryName: string) => Promise<void>
  deleteTask: (taskId: string) => Promise<void>
  finishedTask: () => Promise<void>
}

export const useStory = create<CategoryStoreProps>((set, get) => {
  return {
    categories: [],
    currentCategory: null,
    tasks: [],
    isLoadingTask: false,
    numberTaskCompleted: 0,

    createCategory: async (name: string) => {
      const hasCategory = get().categories.find(
        (category) => category.name === name,
      )

      if (hasCategory) {
        return
      }
      const { data } = await axios.post('/api/category', {
        name,
      })

      if (!data) {
        return
      }

      const categories = get().categories
      const category: Category = data

      const newCategories = [...categories, category]
      set({
        categories: newCategories,
      })
    },

    load: async () => {
      const categories = await axios({
        url: '/api/category',
        method: 'get',
      })

      set({
        categories: categories.data,
      })
    },

    loadTask: async (currentCategory: Category) => {
      set({
        isLoadingTask: true,
      })

      const tasks = await axios({
        url: `/api/task?categoryId=${currentCategory.id}`,
        method: 'get',
      })

      set({
        tasks: tasks.data,
        isLoadingTask: false,
      })

      const tasksCompleted = get().tasks.filter((task) => task.ischecked)

      set({
        numberTaskCompleted: tasksCompleted.length,
      })
    },

    setCurrentCategory: (id: string) => {
      const categories = get().categories

      const currentCategory = categories.find((category) => category.id === id)

      set({
        currentCategory,
      })

      if (currentCategory) {
        get().loadTask(currentCategory)
      }
    },

    updateTask: async (isChecked: boolean, taskId: string) => {
      set({
        isLoadingTask: true,
      })
      const currentCategory = get().currentCategory
      if (!currentCategory?.id) {
        return
      }

      await axios.put(`/api/checked`, {
        isChecked,
        id: taskId,
      })

      await get().loadTask(currentCategory)

      const tasksCompleted = get().tasks.filter((task) => task.ischecked)

      set({
        numberTaskCompleted: tasksCompleted.length,
        isLoadingTask: false,
      })
    },

    createNewTask: async (content: string) => {
      const currentCategory = get().currentCategory

      set({
        isLoadingTask: true,
      })

      if (!currentCategory?.name) {
        return
      }

      await axios({
        method: 'post',
        url: '/api/task',
        data: {
          content,
          categoryId: currentCategory.id,
        },
      })

      set({
        isLoadingTask: false,
      })

      get().loadTask(currentCategory)
    },

    deleteTask: async (taskId: string) => {
      const currentCategory = get().currentCategory
      if (!currentCategory) {
        return
      }
      await axios.delete(`/api/task/delete/${taskId}`)

      await get().loadTask(currentCategory)
    },

    finishedTask: async () => {
      set({
        isLoadingTask: true,
      })

      const currentCategory = get().currentCategory
      if (!currentCategory) {
        return
      }
      await axios.delete(`/api/task/${currentCategory.id}`)

      set({
        currentCategory: null,
        isLoadingTask: false,
      })
      await get().load()
    },
  }
})
