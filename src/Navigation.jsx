import { Link } from "react-router-dom";

export function Navigation() {
    return (
        <nav className="navigation">
            <Link to="/">Home</Link>
            <Link to="/Menu">Menu</Link>
            <Link to="/Cart">Cart</Link>
            <Link to="/Login">Login</Link>
            <Link to="/Checkout">Checkout</Link>
        </nav>
    );
}