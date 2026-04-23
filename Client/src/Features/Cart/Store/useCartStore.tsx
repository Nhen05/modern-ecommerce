import { create } from "zustand";
import { persist } from "zustand/middleware"
import type { CartStore } from "../Types";
export const useCartStore = create<CartStore>()(
    persist(
        (set, get) => ({
            cart: [],
            alert: null,
            setAlert: (alert) => set({ alert }),
            clearAlert: () => set({ alert: null }),
            removeFromCart: (id) =>
                set((state) => {
                    return {
                        cart: state.cart.filter((p) => p.id !== id),
                        alert: {
                            status: "Success",
                            message: "Xóa sản giỏ hàng thành công",
                        }
                    }
                })
            ,
            decreaseQty: (id) =>
                set((state) => {
                    return {
                        cart: state.cart.map((p) => (
                            p.id === id ? { ...p, quantity: p.quantity > 1 ? p.quantity - 1 : 1 } : p
                        )),
                        alert: {
                            status: "Success",
                            message: "Giảm số lượng thành công",
                        }
                    }
                }),
            increaseQty: (id) =>
                set((state) => {
                    return {
                        cart: state.cart.map((p) =>
                            p.id === id ? { ...p, quantity: p.quantity + 1 } : p
                        ),
                        alert: {
                            status: "Success",
                            message: "Tăng số lượng thành công",
                        }
                    }
                }),
            addToCart: (item) =>
                set((state) => {
                    const itemExist = state.cart.find((p) => p.id == item.id)
                    if (itemExist) {
                        return {
                            cart: state.cart.map((p) =>
                                p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p
                            ),
                            alert: {
                                status: "Success",
                                message: "Sản phẩm đã có trong giỏ hàng tăng số lượng thành công",
                            }
                        }
                    }
                    return {
                        cart: [...state.cart, { ...item, quantity: 1 }],
                        alert: {
                            status: "Success",
                            message: "Thêm vào giỏ hàng thành công",
                        }
                    }
                }),
            getAllCart: () => (get().cart),
            totalQty: () => {
                const currenItem = get().cart;
                return currenItem.reduce((total, item) => (
                    total + (item.quantity || 0)
                ), 0)
            },
            clearCart: () => set({ cart: [] })
        }),

        {
            name: "cart-store"
        }

    )
)