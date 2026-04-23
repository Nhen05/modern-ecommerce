import useLogout from "../../Auth/Hook/useLogout"
const userProfilePage = () => {
    const { logoutHandle, msg } = useLogout()
    const emailName = localStorage.getItem('email')
    return (
        <div className="container   ">
            <p>Xin chào bạn : {emailName}</p>
            <button type="button"
                onClick={logoutHandle}
                className=" my-5 bg-indigo-600 hover:bg-indigo-700 transition-colors text-white font-semibold py-4 px-8 rounded-2xl text-lg flex items-center justify-center gap-3">
                Đăng xuất khỏi tài khoản
            </button>
            {msg && (
                <p>
                    {msg}
                </p>
            )}
        </div>
    )
}
export default userProfilePage