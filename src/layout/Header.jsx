import { useContext, createContext } from "react"
import { cartContext } from "../cart/CartProvider.jsx"
import { Navigation } from "./Navigation.jsx"
import useCartStore from "../store/cartStore.js";

export function Header() {
    // const { cart } = useContext(cartContext);
    const {cart, addItem, removeItem} = useCartStore();

    return (<div className='Header'>
        <div className="Title">
            <h1 style={{ color: "#f7ff8b" }}>Addis Eats</h1>
            <i class="fa fa-cutlery" aria-hidden="true" style={{ fontSize: "30px" }}></i>
            {/* {cart.length > 0 && (<span className="cart-count"><i class="fa fa-shopping-cart" aria-hidden="true"></i>: {cart.length}</span>)} */}
            <span className="cart-count"><i class="fa fa-shopping-cart" aria-hidden="true"></i>: {cart.length}</span>
            {/* <button onClick={addItem}>Add</button>
            <button onClick={removeItem}>Dec</button> */}
        </div>
        <div>
            <Navigation />
        </div>
    </div>
    )
}