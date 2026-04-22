import { cartSelector } from "../Store/cartSelectors";
const useCart = () => {
    const { addToCart } = cartSelector();
    const handleAddCart = (data: any) => {
        addToCart(data)
    }
    return {
        handleAddCart
    }
}
export default useCart