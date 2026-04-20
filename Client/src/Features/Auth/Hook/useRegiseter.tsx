import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import useAuth from "./useAuth";
import authValidation from "../../../Lib/validations/authValidation";
import type { regisFormError } from "../../../Type";
const useRegister = () => {
    const navigate = useNavigate();
    const { setRegister, setTypeAuth, msg, loading } = useAuth();
    const { validationForm } = authValidation();
    const [userName, setUserName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')
    const [formError, setFormError] = useState<regisFormError>({})
    useEffect(() => {
        if (msg.toLowerCase().includes('success')) {
            setTimeout(() => {
                navigate("/Login")
            }, 1500)
        }

    }, [msg])
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const errors = validationForm({
            userName,
            email,
            password,
            confirmPassword
        })
        if (password !== confirmPassword) {
            setFormError({
                confirmPassword: 'Mật khẩu không trùng khớp'
            })
            setPassword('')
            setConfirmPassword('')
            return;
        }
        setFormError(errors)
        if (Object.keys(errors).length > 0) return;
        setRegister({
            userName,
            email,
            password
        })
        setTypeAuth("register")
    }
    return {
        userName,
        setUserName,
        email,
        setEmail,
        password,
        setPassword,
        confirmPassword,
        setConfirmPassword,
        handleSubmit,
        formError,
        loading,
        msg
    }
}
export default useRegister