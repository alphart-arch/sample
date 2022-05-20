import type { Request } from "@sveltejs/kit";
import PrismaClient from "$lib/prisma";

const prisma = new PrismaClient();

export const api = async (request: Request, data?: Record<string, unknown>) => {
  let body = {};
  let status = 500;

  switch (request.method.toUpperCase()) {
    case "GET":
      body = await prisma.student.findMany();
      status = 200;
      break;
    case "POST":
      body = await prisma.student.create({
        data: {
          //created_at: data.created_at as Date,
          //done: data.done as boolean,
          //text: data.text as string
          name:data.name as string,
          age:data.age as number,
          email:data.email as string,
          dob:data.dob as Date,
          Address:data.address as string

        }
      })
      status = 200;
      break;
    case "DELETE":
      body = await prisma.student.delete({
        where: {
          uid: request.params.uid
        }
      })
      // todos = todos.filter(todo => todo.uid !== request.params.uid)
      status = 200;
      break;
    case "PATCH":
      body = await prisma.student.update({
        where: {
          uid: request.params.uid
        },
        data: {
          //done: data.done,
          //text: data.text
          uid:data.uid,
          name:data.name,
          age:data.age,
          email:data.email,
          dob:data.dob,
          Address:data.address
        }
      })
      status = 200;
      break;
  
    default:
      break;
  }

  if (request.method.toUpperCase() !== "GET" &&
    request.headers.accept !== "application/json") {
    return {
      status: 303,
      headers: {
        location: "/"
      }
    };
  }

  return {
    status,
    body
  }
}