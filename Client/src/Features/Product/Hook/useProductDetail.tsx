import { useState, useEffect} from "react";
import { getProductById } from "../Services/ProductService";
import type { Product } from "../../../Type";
const useProductDetail = (id:number ) => {
    const [product , setProduct] = useState<Product | null>(null)
    const [loading , setLoading ] =  useState<boolean>(false)
    const [error , setError ] = useState<string>('');
    useEffect(()=>{
        if(!id) return ;
        const fetchData = async()=>{
            setError('')
            setLoading(true)
            try{
                const res = await getProductById(id)
                if(res.status == 200){
                    setProduct(res.data)
                }
                else{
                    setError('Không thể lấy dữ liệu')
                }
            }
            catch(err){
                setError('Lỗi khi gọi api lấy dữ liệu ')
            }
            finally{
                setLoading(false)
            }
        }
        fetchData()
    },[id])
    return {
        product,
        loading,
        error

    }
}
export default useProductDetail