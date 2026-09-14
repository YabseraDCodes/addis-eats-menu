import { useContext, createContext } from "react"
import { cartContext } from "./CartProvider.jsx"
import { Navigation } from "./Navigation.jsx"

export function Header() {
    const { cart } = useContext(cartContext);

    return (<div className='Header'>
        <div className="Title">
            <h1 style={{ color: "#f7ff8b" }}>Addis Eats</h1>
            <i class="fa fa-cutlery" aria-hidden="true" style={{ fontSize: "30px" }}></i>
            {cart.length > 0 && (<span className="cart-count"><i class="fa fa-shopping-cart" aria-hidden="true"></i>: {cart.length}</span>)}
        </div>
        <div>
            <Navigation />
        </div>
    </div>
    )
}