'use client'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useStory } from "@/store"
import { Plus } from "lucide-react"
import { FormEvent, useState } from "react"


interface CreateNewCategoryProps {
  className:  string
} 

export function CreateNewCategory({className}: CreateNewCategoryProps) {
  const [name, setName] = useState("")
  const {createNewCategory} = useStory((store) => {
    return {
      createNewCategory: store.createCategory
    }
  })


  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if(!name) {
      return
    }

    createNewCategory(name)
    console.log("oi");
    setName('')
    
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className={className} variant="default">
          Criar uma nova
          <Plus className="w-4 h-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-zinc-950 text-zinc-50">
        <DialogHeader>
          <DialogTitle>Criar nova categoria</DialogTitle>
          <DialogDescription>
            De um nome para sua categoria é crie suas tarefas!
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="category" className="text-right">
                Categoria
              </Label>
              <Input 
                id="category" 
                placeholder="Nome da categoria" 
                className="col-span-3 bg-zinc-900 border-zinc-900 focus:outline-none focus:ring-1 focus:ring-teal-600 placeholder:text-zinc-500" 
                value={name}
                onChange={(e) => setName(e.target.value) }
              />
            </div>
          </div>
          <DialogFooter>
            <DialogTrigger asChild>
              <Button type="submit" className="bg-teal-600 hover:bg-teal-700">Salvar</Button>
            </DialogTrigger>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
