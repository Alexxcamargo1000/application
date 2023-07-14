import { currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { z } from "zod";
import prisma from '@/libs/prisma'

interface IParams {
  id?: string;
}
// export async function PUT( request: Request, { params }: { params: IParams } ) {
//   try {
//     const { id } = params;
//     console.log("parans",params);
//     const bodySchema = z.object({
//       isChecked: z.boolean(),
//     })
//     const body = await request.json();
//     const { isChecked  } = bodySchema.parse(body)
//     console.log({ isChecked, id  } );





//     return NextResponse.json({message: "Atualizado"})

//   } catch (error: any) {
//     console.log(error);

//     throw  NextResponse.json({message: "erro interno"})
//   }
// }

export async function PUT(request: Request) {
  try {

    const bodySchema = z.object({
      isChecked: z.boolean(),
      id: z.string(),
    })
    const body = await request.json();
    const { isChecked, id } = bodySchema.parse(body)

    // const user = await currentUser();

    // if (!user?.id) {
    //   throw NextResponse.json({ message: "usuário invalido" })
    // }

    const task = await prisma.task.findUnique({
      where: {
        id: id
      }
    })

    console.log(task);

    if(!task?.id) {
      return NextResponse.json({message: "nao foi possível atualizar"})
    }

    const taskUpdated = await prisma.task.update({
      where: {
        id: task?.id,
      },
      data: {
        ischecked: isChecked
      }
    })

    return NextResponse.json({m: "ok"})

  } catch (error: any) {
    console.error(error);

    throw NextResponse.json({ message: "erro interno" })
  }
}