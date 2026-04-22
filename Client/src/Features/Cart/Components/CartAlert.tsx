type StatusTypes = "Success" | "Error"
interface Props {
    message: string;
    status: StatusTypes;
}
export const CartAlert = ({ message, status }: Props) => {
    const msgType = status == "Error" ? "text-fg-danger-strong bg-danger-soft" : "  text-fg-success-strong bg-success-soft"
    return (
        <div>
            <div className={`p-4 mb-4 text-sm rounded-base ${msgType}`} role="alert">
                <span className="font-medium">{status}</span> {message}
            </div>
        </div>
    )
}