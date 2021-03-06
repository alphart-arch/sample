//import { api } from "./_api";
import type { RequestHandler } from "@sveltejs/kit";
import { api } from "./_api";

export let  students :student[]=[];

export const get = (request) =>{
    
    return api(request);
        /*return{
        status:200,
        body:students
   }*/
}
export const post:RequestHandler<{}, FormData> = (request) =>{
    const name=request.body.get("name");
    const email=request.body.get("email");
    const age=request.body.get("age");
    const dob=request.body.get("dob");
    const address=request.body.get("address");
    /*students.push({
        name,age,email,dob,address
    });
    console.log("students",students)
    
    
    return{
        status:303,
        students,
        headers:{
            location:"/",
        }    
    };
  */
     return api(request,{
        name,
        email,
        age,
        dob,
        address
    })
};
