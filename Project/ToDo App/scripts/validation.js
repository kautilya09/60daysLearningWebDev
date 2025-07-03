//all validations are here
function validateName(str){
    const regex = /^[a-zA-Z ]{2,30}$/;
    return regex.test(str)?"":"Invalid Task Name";
}
// export default validateName;
function validatedesc(str){
    const regex = /^[a-zA-Z0-9](20,50)$/;
}