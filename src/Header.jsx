import { useContext, createContext } from "react"
import { cartContext } from "./CartProvider.jsx"

export function Header() {
    const { cart } = useContext(cartContext);

    return <div className='Header'>
        <h1 style={{ color: "#f7ff8b" }}>Addis Eats</h1>
        <i class="fa fa-cutlery" aria-hidden="true" style={{ fontSize: "30px" }}></i>
        {cart.length > 0 && (<span className="cart-count"><i class="fa fa-shopping-cart" aria-hidden="true"></i>: {cart.length}</span>)}
    </div>
}