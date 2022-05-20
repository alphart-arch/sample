
let students :student[]= [];

export const get = (request) =>{
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