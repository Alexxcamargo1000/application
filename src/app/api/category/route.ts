/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { currentUser } from '@clerk/nextjs'
import { NextResponse } from 'next/server'
import prisma from '@/libs/prisma'
import { z } from 'zod'

export async function POST(request: Request) {
  const bodySchema = z.object({
    name: z.string(),
  })
  const body = await request.json()
  const { name } = bodySchema.parse(body)

  const user = await currentUser()

  if (!user?.id) {
    throw new Error('Usuário nao logado')
  }

  const newCategory = await prisma.category.create({
    data: {
      name,
      userId: user.id,
    },
  })

  return NextResponse.json(newCategory)
}

export async function GET(request: Request) {
  try {
    const user = await currentUser()

    if (!user?.id) {
      throw NextResponse.json({ message: 'usuário invalido' })
    }

    const categories = await prisma.category.findMany({
      where: {
        userId: user.id,
      },
    })

    return NextResponse.json(categories)
  } catch (error: any) {
    return []
  }
}
