import { useState, useEffect } from "react";
import { getProducts, getProductByCategory } from "../Services/ProductService";
import type { Product } from "../../../Type";

const useProducts = (categoryName?: string | null) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        const fetchProducts = async () => {
            setError("");
            setLoading(true);

            try {
                let res;
                if (categoryName) {
                    res = await getProductByCategory(categoryName);
                    console.log("Fetched by category:", categoryName, res.data);
                } else {
                    res = await getProducts();
                    console.log("Fetched all products:", res.data);
                }

                if (res.status === 200) {
                    setProducts(res.data || []);
                }
            } catch (err) {
                console.error(err);
                setError("Lỗi lấy dữ liệu sản phẩm");
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [categoryName]);

    return { products, loading, error };
};

export default useProducts;