import {useState} from 'react';

export function OrderForm() {

    const [form, setForm] = useState({
        name: '',
        phone: '',
        area: ''
    })

    function handleChange(e){
        setForm({
            ...form, [e.target.name]: e.target.value
    })
        console.log(form.name)
    }

    function handleSubmit(e){
        e.preventDefault();
        if(!/^(?:\+251|0)9\d{8}$/.test(form.phone)){
            alert("Please enter a valid phone number.")
            return;
        }

        alert("Order Submitted")
    }
    const valid = /^(?:\+251|0)9\d{8}$/.test(form.phone);
    return (
        <div>
            <h2>Customer Information</h2>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input name="name" type="text" 
                    onChange={handleChange} placeholder="Enter your name" required/>
                <label>Phone NO:</label>
                <input name="phone" type="text"
                    onChange={handleChange} placeholder="Enter your phone number" required/>
                <label>Area:</label>
                <input name="area" type="text"
                    onChange={handleChange} placeholder="Enter your " required/>
                <button disabled={!valid} type='submit'>Submit</button>
            </form>
            <p>name: {form.name}, phone: {form.phone}</p>
        </div>
    )
}