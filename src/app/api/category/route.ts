import { currentUser, useAuth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import prisma from '@/libs/prisma'
import {z} from 'zod'

export async function POST(
  request: Request,
) { 

  const bodySchema = z.object({
    name: z.string(),
  })
  const body = await request.json();
  const { name  } = bodySchema.parse(body)

  console.log("name", name);

  const user = await currentUser()

  if(!user?.id) {
    throw new Error("Usuário nao logado");
  }

  const category = await prisma.category.findUnique({
    where: {
      name
    },
    include: {
      tasks: {
        where: {
          userId: user.id
        }
      }
    }
  })
  
  if(category?.name) {
    return NextResponse.json({message: "ja existe uma categoria" })
  }

 const newCategory = await prisma.category.create({
    data: {
      name,
      userId: user.id
    }
  })




  return NextResponse.json(newCategory)
  

}

export async function GET( request: Request) {
  try {

    const user = await currentUser();

    if(!user?.id) {
       throw NextResponse.json({message: "usuário invalido"})
    }

    const categories = await prisma.category.findMany({
      where: {
        userId: user.id
      }
    })

    

    return NextResponse.json(categories)
    
  } catch (error: any) {
    return []
  }
}