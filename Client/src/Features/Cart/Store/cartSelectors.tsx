import { useCartStore } from "./useCartStore"
export const cartSelector = ()=>{
    const cart = useCartStore((s)=> s.cart)
    const increaseQty = useCartStore((s)=>s.increaseQty)
    const totalQty = useCartStore((s)=>s.totalQty)
    const addToCart = useCartStore((s)=>s.addToCart)
    const decreaseQty = useCartStore((s)=>s.decreaseQty)
    const remove = useCartStore((s)=> s.removeFromCart)
    const clearCart =  useCartStore((s)=>s.clearCart)
    const getAllCart = useCartStore((s)=> s.getAllCart)
    return{
        cart,
        increaseQty,
        decreaseQty,
        totalQty,
        addToCart,
        remove,
        clearCart,
        getAllCart
    }
}