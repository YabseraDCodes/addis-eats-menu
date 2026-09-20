import { createContext, useContext, useMemo, useReducer } from "react";
import { cartReducer } from "../reducers/cartReducer";

export const cartContext = createContext();

export function CartProvider({ children }) {
    const [cart, dispatch] = useReducer(cartReducer, []);
    const total = cart.reduce((sum, item) => sum + item.price || 0, 0);
    const value = useMemo(()=>{cart, dispatch, total}, [cart, total])
    return (
        <cartContext.Provider value={useMemo(() => ({cart, dispatch, total}),[cart, total] )}>
            {children}
        </cartContext.Provider>
    );
}
