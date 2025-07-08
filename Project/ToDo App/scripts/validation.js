//all validations are here
export const validate = {
    validateName(str) {
        const regex = /^[a-zA-Z ]{2,30}$/;
        return regex.test(str) ? "" : "Invalid Task Name";
    },

    validateDesc(str) {
        const regex = /^[a-zA-Z0-9 ]{10,50}$/;
        return regex.test(str) ? "" : "Invalid Task Description";
    }
}