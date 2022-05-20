

export const post = (request) =>{
    const name=request.body.get("name");
    const email=request.body.get("email");
    return{
        body: {
            email,
            name,
        },
    };
};