import { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../cart/CartProvider";
import { useForm } from "react-hook-form";
import { validate } from "./validate";

function Checkout() {
    const { cart, total } = useContext(cartContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: "",
            phone: "",
            address: "",
        },
    });

    function onSubmit(data) {
        console.log("Delivery details:", data);
        alert("Order submitted successfully!");
    }

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
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <label htmlFor="name">Name</label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Enter your name"
                            {...register("name", {
                                validate: (_, formValues) => {
                                    const errors = validate(formValues);
                                    return errors.name || true;
                                },
                            })}
                        />

                        {errors.name && (
                            <p className="error">{errors.name.message}</p>
                        )}

                        <label htmlFor="phone">Phone Number</label>
                        <input
                            id="phone"
                            type="tel"
                            placeholder="09XXXXXXXX or +2519XXXXXXXX"
                            {...register("phone", {
                                validate: (_, formValues) => {
                                    const errors = validate(formValues);
                                    return errors.phone || true;
                                },
                            })}
                        />

                        {errors.phone && (
                            <p className="error">{errors.phone.message}</p>
                        )}

                        <label htmlFor="address">Delivery Address</label>
                        <textarea
                            id="address"
                            rows="4"
                            placeholder="Enter your delivery address"
                            {...register("address", {
                                validate: (_, formValues) => {
                                    const errors = validate(formValues);
                                    return errors.address || true;
                                },
                            })}
                        />

                        {errors.address && (
                            <p className="error">{errors.address.message}</p>
                        )}

                        <button
                            type="submit"
                            disabled={cart.length === 0}
                        >
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
                                                ETB{" "}
                                                {Number(item.price).toFixed(2)}
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
