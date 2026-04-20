import type { ApiRespone, User, UserRegister } from "../../../Type"
const API = 'http://localhost:3001/api/auth/'

export const userRegister = async (data: any): Promise<ApiRespone<UserRegister[]>> => {
    try {
        const response = await fetch(`${API}register`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        const result = await response.json()
        return {
            data: result,
            message: "success",
            status: response.status
        }
    }
    catch (err) {
        console.log('Lỗi rồi:', err)
        return {
            data: [],
            message: "Không thể kết nối đén server",
            status: 500,
        }
    }
}
export const userLogin = async (data: any): Promise<ApiRespone<User[]>> => {
    try {
        const response = await fetch(`${API}login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })

        const result = await response.json()

        if (!response.ok) {
            return {
                data: [],
                message: result.message || "Đăng nhập thất bại",
                status: response.status
            }
        }

        return {
            data: result,
            message: result.message || "success",
            status: response.status
        }

    } catch (err) {
        console.log('Lỗi rồi:', err)
        return {
            data: [],
            message: "Không thể kết nối đến server",
            status: 500
        }
    }
}