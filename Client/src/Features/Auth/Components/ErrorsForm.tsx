import type { loginFormError } from '../../../Type';
import { useEffect, useState } from 'react';
interface Props {
    formError: loginFormError;
    loading: boolean;
    msg: string;
}
const ErrorForm = ({ formError, loading, msg }: Props) => {
    const [isHide, setIsHide] = useState<boolean>(false)
    useEffect(() => {
        if (Object.keys(formError).length > 0 || msg || loading) {
            setIsHide(false)
            const timer = setTimeout(() => {
                setIsHide(true)
            }, 1800)
            return()=> clearTimeout(timer)
        }
    }, [formError, loading, msg])

    return (
        <div>
            {
                Object.keys(formError).length > 0 && (
                    <div className={`${isHide ? "hidden" : ""} p-4 mb-4 text-sm text-yellow-800 bg-yellow-100 rounded-lg`}>
                        <span className="font-medium">Cảnh báo:</span>
                        <ul className="mt-2 list-disc list-inside">
                            {Object.values(formError).map((msg, index) => (
                                <li key={index}>{msg}</li>
                            ))}
                        </ul>
                    </div>
                )
            }
            {
                loading && (
                    <div className={` ${isHide ? "hidden" : ""} p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-100" role="alert"`}>
                        <span className="font-medium">Đang xử lý: </span>
                        Đang đăng nhập, vui lòng chờ...
                    </div>
                )
            }
            {
                msg && (
                    <div
                        className={`${isHide ? "hidden" : ""} p-4 mb-4 text-sm rounded-lg ${msg.toLowerCase().includes("success")
                            ? "text-green-800 bg-green-100"
                            : msg.toLowerCase().includes("not found")
                                ? "text-red-800 bg-red-100"
                                : "text-yellow-800 bg-yellow-100"
                            }`}
                        role="alert"
                    >
                        <span className="font-medium">
                            {msg.toLowerCase().includes("sucess")
                                ? "Thành công: "
                                : msg.toLowerCase().includes("not found")
                                    ? "Lỗi: "
                                    : "Thông báo: "}
                        </span>
                        {msg}
                    </div>
                )
            }
        </div>
    )
}
export default ErrorForm