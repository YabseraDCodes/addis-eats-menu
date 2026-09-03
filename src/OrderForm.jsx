import { useState } from 'react';

export function OrderForm({ totalPrice }) {

    const [form, setForm] = useState({
        name: '',
        phone: '',
        area: ''
    })

    function handleChange(e) {
        setForm({
            ...form, [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        // if (!/^(?:\+251|0)9\d{8}$/.test(form.phone)) {
        //     alert("Please enter a valid phone number.")
        //     return;
        // }

        alert("Order Submitted")
    }
    const validPhone = /^(?:\+251|0)9\d{8}$/.test(form.phone);
    return (
        <div className="order-form-container">
            <h2 className="order-form-title">Customer Information</h2>
            <form className="order-form" onSubmit={handleSubmit}>
                <label>Name:</label>
                <input name="name" type="text" value={form.name}
                    onChange={handleChange} placeholder="Enter your name" required />
                <label>Phone NO:</label>
                <input name="phone" type="text" value={form.phone}
                    onChange={handleChange} placeholder="09XXXXXXXX or +2519XXXXXXXX" required />
                <label>Area:</label>
                <input name="area" type="text" value={form.area}
                    onChange={handleChange} placeholder="Enter your " required />
                <button disabled={!validPhone} type='submit'>Submit</button>
            </form>
            <div className="order-form-preview">
                <h3>Order Summary</h3>
                <p>
                    <strong>Name:</strong> {form.name}
                </p>
                <p>
                    <strong>Phone:</strong> {form.phone}
                </p>
                <p>
                    <strong>Area:</strong> {form.area}
                </p>
                <h2 className="orderTotal">Total Price: {totalPrice}</h2>
            </div>
        </div>
    )
}