export type CartItem = {
    id: number | string;
    title: string;
    quantity: number;
    img: string;
    price: number;
}

export type CartStore = {
    cart: CartItem[];
    addToCart: (item: Omit<CartItem, "quantity">) => void;
    removeFromCart: (id: number | string) => void;
    increaseQty: (id: number | string) => void;
    decreaseQty: (id: number | string) => void;
    clearCart: () => void;
    totalQty: () => number;
    getAllCart: () => CartItem[];
}