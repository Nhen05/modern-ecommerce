
import type { ApiRespone ,Product } from "../../../Type";
const API = 'https://fakestoreapi.com/products';

export const getProducts = async (): Promise<ApiRespone<Product[]>> => {
    try {
        const response = await fetch(API);
        const data: Product[] = await response.json();
        return {
            data: data,
            message: response.ok ? 'Thành Công' : 'Có lỗi xảy ra',
            status: response.status,
        };
    } catch (err) {
        console.log('Lỗi rồi:', err);
        return {
            data: [],
            message: 'Không thể kết nối đến server',
            status: 500,
        };
    }
};
export const getProductById = async (id: number): Promise<ApiRespone<Product>> => {
    try {
        const res = await fetch(`${API}/${id}`);

        if (!res.ok) {
            throw new Error('Không tìm thấy sản phẩm');
        }
        const data: Product = await res.json();
        return {
            data: data,
            message: 'Thành công',
            status: res.status
        };
    } catch (err: any) {
        console.log('Có lỗi:', err);

        return {
            data: {} as Product,
            message: err.message || 'Có lỗi xảy ra',
            status: 500
        };
    }
};
export const getProductByCategory = async (categoryName: string): Promise<ApiRespone<Product[]>> => {
    try {
        const res = await fetch(`${API}/category/${categoryName}`)
        if (!res.ok) {
            throw new Error('Không tìm thấy danh mục sản phẩm này')
        }
        const data: Product[] = await res.json();
        return {
            data: data,
            message: 'Lấy sản phẩm theo danh mục thành công',
            status: res.status
        }
    }
    catch (error:any) {
        console.log('Lỗi :', error)
        return {
            data: [],
            message: error.message || 'Có lỗi xảy ra',
            status: 500
        }
    }
}