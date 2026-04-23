import useAuth from "../../Auth/Hook/useAuth"
import { useNavigate } from "react-router"
const useLogout = () => {
    const nagative = useNavigate()
    const { setTypeAuth, msg } = useAuth()
    const logoutHandle = () => {
        setTypeAuth('logout')
        nagative("/login")

    }
    return {
        logoutHandle,
        msg

    }
}
export default useLogout