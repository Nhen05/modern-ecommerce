import { cartSelector } from "../Store/cartSelectors";
import type { CartItem } from "../Types";
const useCart = () => {
    const { addToCart, alert ,clearAlert } = cartSelector();
    const handleAddCart = (data: Omit<CartItem,"quantity">) => {
        addToCart(data)
    }
    return {
        handleAddCart,
        alert,
        clearAlert
    }
}
export default useCart