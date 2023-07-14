/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from 'next/server'
import { z } from 'zod'
import prisma from '@/libs/prisma'

export async function PUT(request: Request) {
  try {
    const bodySchema = z.object({
      isChecked: z.boolean(),
      id: z.string(),
    })
    const body = await request.json()
    const { isChecked, id } = bodySchema.parse(body)

    const task = await prisma.task.findUnique({
      where: {
        id,
      },
    })

    console.log(task)

    if (!task?.id) {
      return NextResponse.json({ message: 'nao foi possível atualizar' })
    }

    await prisma.task.update({
      where: {
        id: task?.id,
      },
      data: {
        ischecked: isChecked,
      },
    })

    return NextResponse.json({ message: 'atualizado' })
  } catch (error: any) {
    console.error(error)

    throw NextResponse.json({ message: 'erro interno' })
  }
}
