import { create } from "zustand";
import { persist } from "zustand/middleware"
import type { CartStore } from "../Types";
export const useCartStore = create<CartStore>()(
    persist(
        (set, get) => ({
            cart: [],
            removeFromCart: (id) =>
                set((state) => {
                    return {
                        cart: state.cart.filter((p) => p.id !== id)
                    }
                })
            ,
            decreaseQty: (id) =>
                set((state) => {
                    return {
                        cart: state.cart.map((p) => (
                            p.id === id ? { ...p, quantity: p.quantity > 1 ? p.quantity - 1 : 1 } : p
                        ))
                    }
                }),
            increaseQty: (id) =>
                set((state) => {
                    return {
                        cart: state.cart.map((p) =>
                            p.id === id ? { ...p, quantity: p.quantity + 1 } : p
                        )
                    }
                }),
            addToCart: (item) =>
                set((state) => {
                    const itemExist = state.cart.find((p) => p.id == item.id)
                    if (itemExist) {
                        return {
                            cart: state.cart.map((p) =>
                                p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p
                            )
                        }
                    }
                    return {
                        cart: [...state.cart, { ...item, quantity: 1 }]
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