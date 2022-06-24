import type { Request } from "@sveltejs/kit";
export let students :student[]= [];


export const api = (request:Request,STUDENT?:student) =>{
    let body={};
    let status=500;
    switch(request.method.toUpperCase()){
        case "GET":
            body=students;
            status=200;
            break;
        case "POST":
            students.push(STUDENT);
            return{
                status:303,
                header:{
                    location:"/"
                }
            }
            break;
        default:
            break;
    }
    return{
        status,
        body
    }
    
}