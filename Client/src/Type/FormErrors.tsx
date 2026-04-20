export interface loginFormError{
    email?:string;
    passowrd?:string
}
export interface regisFormError extends loginFormError{
    userName?:string;
    confirmPassword?:string;
}