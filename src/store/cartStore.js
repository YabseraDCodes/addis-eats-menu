import { create } from "zustand";
import { cartReducer } from "../cart/cartReducer";


const useCartStore = create((set, get) => ({
    cart: [],
    total: 0,
    addItem: (dish) => set((state) => ({ cart: [...state.cart, dish], total: state.total + dish.price })),
    removeItem: (id) => {
        const currentCart = get().cart;
        const deletedPrice = currentCart.filter((item) => item.id === id);
        set((state) => ({ cart: state.cart.filter((item) => item.id != id), total: state.total - deletedPrice }))
    },
    clearCart: () => set((state) => ({ cart: [], total: 0 })),
}))

export default useCartStore;