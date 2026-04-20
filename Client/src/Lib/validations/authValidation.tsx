type FormData = {
    [key: string]: string
}
const regex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const authValidation = () => {
    const validationForm = (data: FormData) => {
        const errors: FormData = {}
        Object.entries(data).forEach(([key, value]) => {
            if (!value.trim()) {
                errors[key] = `Vui lòng nhập ${key}`
            }
            if (key == "email" && !isEmail(value)) {
                errors[key] = "Email không hợp lệ !"
            }
            if (key == "password") {
                const pwErr = isStrongPw(value)
                if (pwErr) {
                    errors[key] = pwErr
                }
            }
        })
        return errors
    }
    return {
        validationForm,
    }
}
const isEmail = (email: string): boolean => {
    return !!email.match(regex);
}
const isStrongPw = (password: string): string => {
    return password.length < 6 ? "Mật khẩu không được dưới 6 ký tự"
        : ''
}
export default authValidation