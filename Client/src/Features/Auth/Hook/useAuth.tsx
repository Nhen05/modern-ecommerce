import { useState, useEffect } from "react"
import type { User, UserRegister } from "../../../Type"
import { userLogin, userRegister } from "../../Auth/Services/authService"
const useAuth = () => {
    type AuthType = "login" | "register" | "logout";
    const [register, setRegister] = useState<UserRegister | null>(null)
    const [login, setLogin] = useState<User | null>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>('')
    const [typeAuth, setTypeAuth] = useState<AuthType>("register")
    const [msg, setMsg] = useState<any>('')
    useEffect(() => {
        if (typeAuth === "login" && !login) return;
        if (typeAuth === "register" && !register) return;

        const fetchAuth = async () => {
            console.log("CALL API")

            setLoading(true)
            setError('')
            try {
                if (typeAuth === "login") {
                    const res = await userLogin(login!)
                    setMsg(res.message)
                } else if (typeAuth === "register") {
                    const res = await userRegister(register!)
                    setMsg(res.message)
                } else {
                    localStorage.removeItem('email')
                    setMsg('Đăng xuất tài khoản thành công')
                }
            } catch {
                setError('Lỗi khi thực hiện !')
            } finally {
                setLoading(false)
            }
        }

        fetchAuth()
    }, [typeAuth, login, register])
    return {
        setLogin,
        setRegister,
        setTypeAuth,
        loading,
        error,
        msg
    }
}
export default useAuth