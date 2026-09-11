import { useContext, createContext } from "react"
import {cartContext} from "./App.jsx"

export function Header(){
    const {cart} = useContext(cartContext);

    return <div className='Header'>
        <h1 style={{color: "#f7ff8b"}}>Addis Eats</h1>
    <i class="fa fa-cutlery" aria-hidden="true" style={{fontSize: "30px"}}></i>
    <p>Cart count: {cart.length}</p>
</div>
}