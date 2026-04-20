import { useState, useEffect } from "react";
import type { Product } from "../../../Type";
import { getProducts } from "../Services/ProductService";
const useProductSearch = () => {
    const [Products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>('')
    const [search, setSearch] = useState<string>('')
    const [Debounced, setDebounced] = useState<string>('')
    useEffect(() => {
        const fecthData = async () => {
            setError('')
            setLoading(true)
            try {
                const res = await getProducts()
                if (res.status == 200) {
                    setProducts(res.data)
                } else {
                    setError('Lỗi')
                }
            }
            catch (err) {
                setError('Lỗi khi khi lấy dữ liệu')
            }
            finally {
                setLoading(false)
            }
        }
        fecthData()
    }, [])
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebounced(search)
        }, 500)
        return () => clearTimeout(timer)
    }, [search])
    const productSearchResult = Products.filter((p) => p.title.toLowerCase().includes(Debounced.toLowerCase())
    )
    return {
        search,
        setSearch,
        loading,
        error,
        productResult:productSearchResult
    }
}
export default useProductSearch