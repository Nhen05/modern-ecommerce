import { useState, useEffect } from "react";
import { getProducts} from "../Services/ProductService";
import type { Product } from "../../../Type";

type SortKey = "price_desc" | "price_asc" | "newest";

const useProductFilter = () => {
  const [sort, setSort] = useState<SortKey | "">("");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  // call api with useeffect
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError("");

      try {
        let res = await getProducts();
        if (res.status === 200) {
          setProducts(res.data);
        } else {
          setError("Không thể tải dữ liệu");
        }
      } catch {
        setError("Lỗi server");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  // tạo funtion 
  const sortFunctions: Record<SortKey, (data: Product[]) => Product[]> = {
    price_desc: (data) => [...data].sort((a, b) => b.price - a.price),
    price_asc: (data) => [...data].sort((a, b) => a.price - b.price),
    newest: (data) => [...data].sort((a, b) => b.id - a.id),
  };

  // apply sort
  const finalProducts = sort && sortFunctions[sort] ? sortFunctions[sort](products)
      : products;

  return {
    products: finalProducts,
    sort,
    setSort,
    loading,
    error,
  };
};

export default useProductFilter;