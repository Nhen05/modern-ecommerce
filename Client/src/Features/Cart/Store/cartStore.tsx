import { create } from "zustand";
import { persist } from "zustand/middleware"
import type { CartStore } from "../Types";
export const useCartStore = create<CartStore>()(
    persist(
        (set, get) => ({
            cart: [],
            addToCart: (item) =>
                set((state) => {
                    const exist = state.cart.find((p) => p.id === item.id);
                    if (exist) {
                        return {
                            cart: state.cart.map((p) =>
                                p.id === item.id
                                    ? { ...p, quantity: (p.quantity || 0) + 1 }
                                    : p
                            ),
                        };
                    }
                    return {
                        cart: [...state.cart, { ...item, quantity: 1 }],
                    };
                }),

            removeFromCart: (id) =>
                set((state) => ({
                    cart: state.cart.filter((p) => p.id !== id), // Phải là state.cart.filter
                })),

            increaseQty: (id) =>
                set((state) => ({
                    cart: state.cart.map((p) =>
                        p.id === id ? { ...p, quantity: p.quantity + 1 } : p
                    ),
                })),

            decreaseQty: (id) =>
                set((state) => ({
                    cart: state.cart
                        .map((p) =>
                            p.id === id ? { ...p, quantity: p.quantity - 1 } : p
                        )
                        .filter((p) => p.quantity > 0),
                })),
            totalQty: () => {
                const currentItem = get().cart
                return currentItem.reduce((total, item) => total + (item.quantity || 0), 0)
            },
            getAllCart: () => {
                return get().cart
            },

            clearCart: () => set({ cart: [] }),
        }),
        {
            name: 'cart-storage',
        }
    )
);