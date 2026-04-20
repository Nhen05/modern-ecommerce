type LoginProps = {
    whichForm: "Login";
    email: string;
    password: string;
    setEmail: (data: string) => void;
    setPassword: (data: string) => void;
};

type RegisterProps = {
    whichForm: "Register";
    email: string;
    password: string;
    userName: string;
    confirmPassword: string;
    loading: boolean;
    setEmail: (data: string) => void;
    setPassword: (data: string) => void;
    setUserName: (data: string) => void;
    setConfirmPassword: (data: string) => void;
};

type Props = LoginProps | RegisterProps;

const InputFields = (props: Props) => {
    // LOGIN FORM
    if (props.whichForm === "Login") {
        return (
            <div>
                <div>
                    <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={props.email}
                        onChange={(e) => props.setEmail(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                        placeholder="name@company.com"
                    />
                </div>

                <div>
                    <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Mật Khẩu
                    </label>
                    <input
                        type="password"
                        id="password"
                        value={props.password}
                        onChange={(e) => props.setPassword(e.target.value)}
                        placeholder="••••••••"
                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    />
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-start">
                        <div className="ml-3 text-sm">
                            <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">
                                Nhớ đến tôi
                            </label>
                        </div>
                    </div>
                    <a
                        href="#"
                        className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                        Quên mật khẩu?
                    </a>
                </div>

                <button
                    type="submit"
                    className="w-full text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                    Đăng Nhập
                </button>

                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Bạn chưa có tài khoản?{" "}
                    <a
                        href="/Register"
                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                        Đăng ký
                    </a>
                </p>
            </div>
        );
    }

    // REGISTER FORM
    return (
        <div>
            {/* Username */}
            <div>
                <label
                    htmlFor="username"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Tên Người Dùng
                </label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={props.userName}
                    onChange={(e) => props.setUserName(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    placeholder="johndoe"
                   
                />
            </div>

            {/* Email */}
            <div>
                <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={props.email}
                    onChange={(e) => props.setEmail(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    placeholder="name@company.com"
                   
                />
            </div>

            {/* Password */}
            <div>
                <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Mật Khẩu
                </label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={props.password}
                    onChange={(e) => props.setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                   
                />
            </div>

            {/* Confirm Password */}
            <div>
                <label
                    htmlFor="confirmPassword"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Xác Nhận Mật Khẩu
                </label>
                <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={props.confirmPassword}
                    onChange={(e) => props.setConfirmPassword(e.target.value)}
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                   
                />
            </div>
            <button
                type="submit"
                disabled={props.loading}
                className="w-60  mt-5 mb-2 flex justify-center items-center mx-auto  text-white hover:cursor-pointer bg-green-700 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {props.loading ? "Đang tạo tài khoản..." : "Tạo Tài Khoản"}
            </button>

            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Đã có tài khoản?{" "}
                <a
                    href="/Login"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                    Đăng Nhập
                </a>
            </p>
        </div>
    );
};

export default InputFields;