import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { useStory } from "@/store"
import axios from "axios"
import { X } from "lucide-react"

interface AlertDialogRemoveTaskProps {
  isHover: boolean,
  taskId: string,
}
 
export function AlertDialogRemoveTask(props: AlertDialogRemoveTaskProps) {

  const {deleteTask} = useStory((store) => {
    return {
      deleteTask: store.deleteTask
    }
  })

  async function handleDeleteTask() {

    await deleteTask(props.taskId)

  }

  return (
    <AlertDialog >
      <AlertDialogTrigger asChild>
        <Button
          data-active={props.isHover}
          className="z-50 relative data-[active=true]:flex hidden animate-fade right-0 h-fit  bg-red-600 hover:bg-red-700 p-1 rounded" 
        >
            <X className="h-4 w-4 leading-loose"/>
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-zinc-950 text-zinc-100">
        <AlertDialogHeader>
          <AlertDialogTitle>Deseja remover essa tarefa?</AlertDialogTitle>
          <AlertDialogDescription>
            Essa ação não pode ser desfeita. Isso excluirá permanentemente seu
              conta e remover seus dados de nossos servidores.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="text-zinc-900" >Cancel</AlertDialogCancel>
          <AlertDialogAction 
            onClick={handleDeleteTask}
            className="bg-teal-600 hover:bg-teal-700"
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}