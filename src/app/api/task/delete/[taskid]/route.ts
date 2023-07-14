/* eslint-disable @typescript-eslint/no-explicit-any */
import { currentUser } from '@clerk/nextjs'
import { NextResponse } from 'next/server'

import prisma from '@/libs/prisma'

interface IParams {
  taskid?: string
}

export async function DELETE(
  request: Request,
  { params }: { params: IParams },
) {
  try {
    const { taskid } = params
    console.log(taskid)

    const user = await currentUser()

    if (!user?.id) {
      throw NextResponse.json({ message: 'usuário invalido' })
    }

    await prisma.task.delete({
      where: {
        id: taskid,
      },
    })

    return NextResponse.json({ message: 'deletado' })
  } catch (error: any) {
    throw NextResponse.json({ message: 'erro interno' })
  }
}
