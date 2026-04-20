import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import useAuth from "../Hook/useAuth";
import authValidation from "../../../Lib/validations/authValidation";
import type { loginFormError } from "../../../Type";

const useLogin = () => {
    const { validationForm } = authValidation();
    const { setLogin, setTypeAuth, loading, msg } = useAuth();

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [formError, setFormError] = useState<loginFormError>({});
    let savedEmail = localStorage.getItem('email');
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const errors = validationForm({ email, password });
        setFormError(errors);

        if (Object.keys(errors).length > 0) return;
        setLogin({ email, password });
        setTypeAuth("login");
    };

    useEffect(() => {
        if (msg.toLowerCase().includes("success")) {
            if (!savedEmail) {
                localStorage.setItem('email', email)
            }
            setTimeout(() => navigate("/"), 500);
        }
    }, [msg]);

    return {
        email,
        password,
        setEmail,
        setPassword,
        formError,
        handleSubmit,
        loading,
        msg,
        savedEmail
    };
};

export default useLogin;