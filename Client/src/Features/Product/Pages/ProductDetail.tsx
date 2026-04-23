import useProductDetail from "../Hook/useProductDetail";
import { useParams, useLocation } from "react-router";
import useCart from '../../Cart/Hook/useCart'
import { CartAlert } from '../../Cart/Components/CartAlert'
const ProductDetail = () => {
    const params = useParams()
    const productId = params.id
    const location = useLocation()
    const pathName = location.pathname.split("/").filter(x => x)
    console.log('Location is:', pathName)
    const {
        product,
        loading,
        error
    } = useProductDetail(productId ? Number(productId) : 0);
    const { handleAddCart, alert, clearAlert } = useCart()
    return (
        <div className="container">
            {loading && <p className="text-center py-10">Đang tải sản phẩm...</p>}
            {error && <p className="text-center text-red-500 py-10">{error}</p>}
            <div className="bg-white min-h-screen">
                <div className="pt-6 pb-16">
                    <nav aria-label="Breadcrumb" className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                        <ol className="flex items-center space-x-2 text-sm">
                            <li>
                                <a href="/" className="font-medium text-gray-600 hover:text-indigo-600">Home</a>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 20" fill="currentColor" className="h-5 w-4 text-gray-300">
                                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                </svg>
                            </li>
                            <li className="font-medium text-gray-500">{product?.title}</li>
                        </ol>
                    </nav>

                    <div className="mx-auto mt-8 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                        <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 lg:gap-y-10">
                            <div className="aspect-square bg-gray-50 rounded-2xl overflow-hidden border border-gray-100">
                                <img
                                    src={product?.image}
                                    alt={product?.title}
                                    className="w-full h-full object-contain p-8 hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            <div className="mt-10 lg:mt-0">
                                <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                                    {product?.title}
                                </h1>

                                <p className="mt-4 text-4xl font-semibold text-gray-900">
                                    ${product?.price}
                                </p>
                                <div className="mt-6 flex items-center gap-4">
                                    <div className="flex text-yellow-400 text-2xl">
                                        ★★★★☆
                                    </div>
                                    <div>
                                        <span className="font-medium text-lg">{product?.rating.rate}</span>
                                        <span className="text-gray-500 ml-2">{product?.rating.count}</span>
                                    </div>
                                </div>
                                <div className="mt-8">
                                    <h3 className="text-sm uppercase tracking-widest font-medium text-gray-500 mb-2">Description</h3>
                                    <p className="text-base text-gray-600 leading-relaxed">
                                        {product?.description}
                                    </p>
                                </div>
                                <div className="mt-10">
                                    <button
                                        onClick={() => {
                                            if (!product) return;
                                            handleAddCart({
                                                id: product.id,
                                                title: product.title,
                                                img: product.image,
                                                price: product.price
                                            })
                                        }}
                                        type="button"
                                        className="w-full bg-indigo-600 hover:bg-indigo-700 transition-colors text-white font-semibold py-4 px-8 rounded-2xl text-lg flex items-center justify-center gap-3"
                                    >
                                        <span className="cursor-pointer">Thêm vào giỏ hàng</span>
                                    </button>
                                    {
                                        alert && (
                                            <CartAlert
                                                message={alert.message}
                                                status={alert.status}
                                                onClose={clearAlert}
                                            />
                                        )
                                    }
                                </div>
                                <div className="mt-12 pt-8 border-t border-gray-200">
                                    <h3 className="text-sm font-medium text-gray-900 mb-4">Highlights</h3>
                                    <ul className="space-y-3 text-sm text-gray-600">
                                        <li className="flex items-start gap-3">
                                            <span className="text-green-500 mt-0.5">✓</span>
                                            Fits up to 15" laptop
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-green-500 mt-0.5">✓</span>
                                            Durable and water-resistant material
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-green-500 mt-0.5">✓</span>
                                            Multiple compartments for organization
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default ProductDetail;