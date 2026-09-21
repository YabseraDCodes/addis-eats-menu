import { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "./CartProvider";
import useCartStore from "../store/cartStore";

function Cart() {
    // const { cart, dispatch, total } = useContext(cartContext);
    const {cart, total, addItem, removeItem, clearCart} = useCartStore();

    return (
        <div className="cart-page">
            <div className="cart-container">
                <div className="cart-header">
                    <h2>Current Order</h2>
                    <span>{cart.length} item{cart.length !== 1 ? "s" : ""}</span>
                </div>

                {cart.length === 0 ? (
                    <div className="cart-empty">
                        <h3>Your cart is empty</h3>
                        <p>Add some dishes to your order.</p>

                        <Link to="/" className="cart-browse-btn">
                            Browse Menu
                        </Link>
                    </div>
                ) : (
                    <>
                        <div className="cart-items">
                            {cart.map((item, index) => (
                                <div
                                    className="cart-item"
                                    key={item.id ?? index}
                                >
                                    <div className="cart-item-info">
                                        <h3>{item.name}</h3>

                                        {item.description && (
                                            <p>{item.description}</p>
                                        )}

                                        {item.spicy && (
                                            <span className="spicy-badge">
                                                Spicy
                                            </span>
                                        )}
                                    </div>

                                    <div className="cart-item-right">
                                        <strong>
                                            ETB {Number(item.price).toFixed(2)}
                                        </strong>

                                        <button
                                            type="button"
                                            onClick={() =>
                                                removeItem(item.id)
                                            }
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="cart-summary">
                            <div className="cart-total">
                                <span>Total</span>
                                <strong>
                                    ETB {Number(total).toFixed(2)}
                                </strong>
                            </div>

                            <div className="cart-actions">
                                <button
                                    type="button"
                                    className="clear-cart-btn"
                                    onClick={clearCart}
                                >
                                    Clear Cart
                                </button>

                                <Link
                                    to="/checkout"
                                    className="checkout-btn"
                                >
                                    Continue to Checkout
                                </Link>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>


    );
}

export default Cart;