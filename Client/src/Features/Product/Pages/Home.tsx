import useProductFilter from "../Hook/useProductFilter";
import ProducFilter from "../Components/ProductFilter";
import ProductSearch from "../Components/ProductSearch";
import useProductSearch from "../Hook/useProductSearch";
const Home = () => {
    const {
        products,
        setSort,
        loading,
        error,
        sort, } = useProductFilter();
    const {
        search,
        setSearch,
        productResult} = useProductSearch();
        const isSearch = !!search
    return (
        <div className="container-fluid mb-5">
            {/* slider */}
            <div id="default-carousel" className="relative mb-5 w-full" data-carousel="slide">
                <div className="relative h-56 overflow-hidden rounded-base md:h-96">

                    <div className=" duration-700 ease-in-out" data-carousel-item>
                        <img src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=1600" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
                    </div>

                    <div className=" duration-700 ease-in-out" data-carousel-item>
                        <img src="https://images.unsplash.com/photo-1521335629791-ce4aec67dd47?q=80&w=1600" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
                    </div>

                    <div className=" duration-700 ease-in-out" data-carousel-item>
                        <img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1600" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
                    </div>

                    <div className=" duration-700 ease-in-out" data-carousel-item>
                        <img src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=1600" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
                    </div>

                    <div className=" duration-700 ease-in-out" data-carousel-item>
                        <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1600" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
                    </div>

                </div>
                <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                    <button type="button" className="w-3 h-3 rounded-base" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                    <button type="button" className="w-3 h-3 rounded-base" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                    <button type="button" className="w-3 h-3 rounded-base" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                    <button type="button" className="w-3 h-3 rounded-base" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                    <button type="button" className="w-3 h-3 rounded-base" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
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
            {/* search form */}
            <ProductSearch setSearch={setSearch} />
            {/* products render */}
            <div className="container mx-auto px-4">
                <div className=" flex justify-between my-5">
                    <div>
                        {isSearch ?
                            <h2 className="text-2xl font-bold mb-6 capitalize">
                                Kết Quả Tìm Kiếm
                            </h2>
                            : (
                                <h2 className="text-2xl font-bold mb-6 capitalize">
                                    Tất cả sản phẩm
                                </h2>
                            )}
                    </div>
                    <ProducFilter
                        sort={sort}
                        setSort={setSort}
                    />
                </div>

                {loading && <p className="text-center py-10">Đang tải sản phẩm...</p>}
                {error && <p className="text-center text-red-500 py-10">{error}</p>}

                {/* Grid Layout chuẩn Tailwind */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {
                        isSearch ?
                            productResult.length > 0 ? (
                                productResult.map((product) => (
                                    <div key={product.id} className="group bg-white border border-gray-200 rounded-2xl p-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                                        {/* 1. Hình ảnh sản phẩm */}
                                        <a href={`ProductDetail/${product.id}`}>
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
                                !loading && <p className="col-span-full text-center text-gray-500">Không tìm thấy sản phẩm nào.</p>
                            )
                            :
                            products.length > 0 ? (
                                products.map((product) => (
                                    <div key={product.id} className="group bg-white border border-gray-200 rounded-2xl p-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                                        {/* 1. Hình ảnh sản phẩm */}
                                        <a href={`ProductDetail/${product.id}`}>
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
                                                <a href={`ProductDetail/${product.id}`}>  
                                                <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors">
                                                    Mua Ngay
                                                </button>
                                                </a>
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
export default Home;