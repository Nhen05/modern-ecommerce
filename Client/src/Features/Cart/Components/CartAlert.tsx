
import { useEffect } from 'react';
type StatusTypes = "Success" | "Error";
interface Props {
    message: string;
    status: StatusTypes;
    onClose: () => void;
}
export const CartAlert = ({ message, status, onClose }: Props) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose()
        }, 1500)
        return () => clearTimeout(timer)
    }, [])
    const msgType =
        status === "Error"
            ? "text-red-600 bg-red-100"
            : "text-green-600 bg-green-100"
    console.log("message class type is:", msgType)
    return (
        <div className="mt-4">
            <div className={`p-4 mb-4 text-sm rounded-base ${msgType}`} role="alert">
                <span className="font-medium">{status}</span> {message}
            </div>
        </div>
    )
}