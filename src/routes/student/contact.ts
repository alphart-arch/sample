//import { api } from "./_api";

export let students :student[]= [];

export const get = (request) =>{
    
    //return api(request);
    return{
        status:200,
        body:students
    }

    
}
export const post = (request) =>{
    const name=request.body.get("name");
    const email=request.body.get("email");
    const age=request.body.get("age");
    const dob=request.body.get("dob");
    const address=request.body.get("address");
    /*return api(request, {
        name:name,
        email:email,
        age:age,
        dob:dob,
        address:address
    })*/
    students.push(
        name,
        age,
        email,
        dob,
        address
    );
    return{
        status:303,
        headers:{
            location:"/"
        }
    };
};
console.log("students",students)
/*return api(request, {
    created_at: new Date(),
    text: request.body.get("text"),
    done: false
  });*/