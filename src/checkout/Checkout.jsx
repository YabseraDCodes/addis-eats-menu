import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../cart/CartProvider";
import { Navigate, useLocation } from "react-router-dom";

function Checkout() {
    const { cart, total } = useContext(cartContext);

    const [form, setForm] = useState({ name: "",   phone: "", address: ""});

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value});
    }

    function handleSubmit(e) {
        e.preventDefault();

        console.log("Delivery details:", form);
        alert("Order submitted successfully!");

    }

    const validPhone = /^(?:\+251|0)9\d{8}$/.test(form.phone);

    return (
        <div className="checkout-page">
            <div className="checkout-container">
                <div className="checkout-header">
                    <h2>Delivery Details</h2>
                    <p>Enter your information to complete your order.</p>
                </div>

                <div className="checkout-content">
                    <form
                        className="checkout-form"
                        onSubmit={handleSubmit}
                    >
                        <label>Name</label>
                        <input id="name"  name="name" type="text" value={form.name}onChange={handleChange}
                            placeholder="Enter your name" required/>

                        <label>Phone Number</label>
                        <input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="09XXXXXXXX or +2519XXXXXXXX"
                            required
                        />

                        <label htmlFor="address">Delivery Address</label>
                        <textarea
                            id="address"
                            name="address"
                            value={form.address}
                            onChange={handleChange}
                            placeholder="Enter your delivery address"
                            rows="4"
                            required
                        />

                        <button
                            type="submit" disabled={ !validPhone || !form.name || !form.area || !form.address ||cart.length === 0 }>
                            Place Order
                        </button>
                    </form>

                    <div className="checkout-summary">
                        <h3>Order Summary</h3>

                        {cart.length === 0 ? (
                            <div>
                                <p>Your cart is empty.</p>

                                <Link to="/" className="cart-browse-btn">
                                    Browse Menu
                                </Link>
                            </div>
                        ) : (
                            <>
                                <div className="checkout-summary-items">
                                    {cart.map((item, index) => (
                                        <div
                                            className="checkout-summary-item"
                                            key={item.id ?? index}
                                        >
                                            <span>{item.name}</span>

                                            <strong>
                                                ETB {Number(item.price).toFixed(2)}
                                            </strong>
                                        </div>
                                    ))}
                                </div>

                                <div className="checkout-total">
                                    <span>Total</span>

                                    <strong>
                                        ETB {Number(total).toFixed(2)}
                                    </strong>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>


    );
}

export default Checkout;