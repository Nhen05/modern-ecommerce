import { useSearchParams } from "react-router-dom";
import useProducts from "../Hook/useProducts";

const ProductPage = () => {
    const [searchParams] = useSearchParams();
    const categoryName = searchParams.get("category");
    const { products, loading, error } = useProducts(categoryName);
    return (
        <div className="container-fluid">
            <div id="default-carousel" className="relative w-full" data-carousel="slide">
                <div className="relative h-56 overflow-hidden rounded-base md:h-96">
                    <div className=" duration-700 ease-in-out" data-carousel-item>
                        <img src="https://png.pngtree.com/thumb_back/fh260/background/20230630/pngtree-d-rendering-of-online-shopping-concept-on-mobile-e-commerce-platform-image_3702174.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>
                </div>
                <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-base bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-5 h-5 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 19-7-7 7-7" /></svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-base bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-5 h-5 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7" /></svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>
            <div className="container mx-auto px-4 my-10">{
                categoryName ? <h2 className="text-2xl font-bold mb-6 capitalize">
                    Sản Phẩm theo mục: {categoryName}
                </h2> :
                    <h2 className="text-2xl font-bold mb-6 capitalize">
                        Tất cả sản phẩm
                    </h2>
            }
                {loading && <p className="text-center py-10">Đang tải sản phẩm...</p>}
                {error && <p className="text-center text-red-500 py-10">{error}</p>}

                {/* Grid Layout chuẩn Tailwind */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.length > 0 ? (
                        products.map((product) => (
                            <div key={product.id} className="group bg-white border border-gray-200 rounded-2xl p-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                                <a href={`ProductDetail/${product.id}`}>   
                                {/* 1. Hình ảnh sản phẩm */}
                                <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-100 mb-4">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500 p-2"
                                    />
                                    <span className="absolute top-2 left-2 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-lg">
                                        HOT
                                    </span>
                                </div>

                                {/* 2. Thông tin sản phẩm */}
                                <div className="space-y-2">
                                    <p className="text-[10px] text-gray-500 uppercase tracking-widest">{product.category}</p>
                                    <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 h-10 group-hover:text-blue-600 transition-colors">
                                        {product.title}
                                    </h3>
                                    <div className="flex items-center justify-between mt-4">
                                        <span className="text-lg font-bold text-gray-900">${product.price}</span>
                                        <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                </a>
                            </div>
                        ))
                    ) : (
                        !loading && <p className="col-span-full text-center text-gray-500">Không có sản phẩm nào.</p>
                    )}
                </div>
            </div>
        </div>
    )
}
export default ProductPage;