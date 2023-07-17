/* eslint-disable @typescript-eslint/no-explicit-any */
import { currentUser } from '@clerk/nextjs'
import { NextResponse } from 'next/server'
import prisma from '@/libs/prisma'

interface IParams {
  categoryId?: string
}

export async function GET(request: Request, { params }: { params: IParams }) {
  try {
    const { categoryId } = params

    const user = await currentUser()

    if (!user?.id) {
      throw NextResponse.json({ message: 'usuário invalido' })
    }

    if (!categoryId) {
      throw NextResponse.json({ message: 'Categoria id está faltando' })
    }

    const category = await prisma.category.findUnique({
      where: {
        id: categoryId,
      },
    })

    if (!category?.id) {
      throw NextResponse.json({ message: 'Categoria não existe' })
    }

    const tasks = await prisma.task.findMany({
      where: {
        userId: user.id,
        categoryId: category?.id,
      },
    })

    return NextResponse.json(tasks)
  } catch (error: any) {
    throw NextResponse.json({ message: 'erro interno' })
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: IParams },
) {
  try {
    const { categoryId } = params

    const user = await currentUser()

    if (!user?.id) {
      throw NextResponse.json({ message: 'usuário invalido' })
    }

    if (!categoryId) {
      throw NextResponse.json({ message: 'Categoria id está faltando' })
    }

    const category = await prisma.category.findUnique({
      where: {
        id: categoryId,
      },
    })

    if (!category?.id) {
      throw NextResponse.json({ message: 'Categoria não existe' })
    }

    await prisma.task.deleteMany({
      where: {
        userId: user.id,
        categoryId: category.id,
      },
    })

    await prisma.category.delete({
      where: {
        id: category.id,
      },
    })

    return NextResponse.json({ message: 'finalizado' })
  } catch (error: any) {
    throw NextResponse.json({ message: 'erro interno' })
  }
}
