//all validations are here
export function validateName(str){
    const regex = /^[a-zA-Z ]{2,30}$/;
    return regex.test(str)?"":"Invalid Task Name";
}

function validatedesc(str){
    const regex = /^[a-zA-Z0-9](20,50)$/;
    return regex.test(str)?"":""
}