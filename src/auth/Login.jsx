import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

function Login({ user, setUser }) {
    if (user) {
        return (
            <div className="login-page">
                <div className="login-container">
                    <div className="login-header">
                        <h2>Already Signed In</h2>
                        <p>You are already signed in as {user}.</p>
                        <button className="viewDetails" onClick={() => navigate("/")}>Go Home</button>
                        <button className="viewDetails" onClick={() => setUser(null)}>Sign Out </button>
                    </div>
                </div>
            </div>
        );
    }

    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || "/"

    const [form, setForm] = useState({ email: "", password: "" });

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value, });
    }

    function handleSubmit(e) {
        e.preventDefault();

        console.log("Login:", form);
        setUser(form.email);
        navigate(from, { replace: true });


    }

    return (
        <div className="login-page">
            <div className="login-container">
                <div className="login-header">
                    <h2>Welcome</h2>
                    <p>Sign in to continue with your order.</p>
                </div>

                <form className="login-form" onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>

                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                    />
                    <label htmlFor="password">Password</label>

                    <input
                        id="password"
                        name="password"
                        type="password"
                        value={form.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                        required
                    />
                    <button type="submit">Sign In</button>
                </form>

                <div className="login-footer">
                    {/* <p>
                        Don't have an account?{" "}
                        <Link to="/register">
                            Create an account
                        </Link>
                    </p> */}
                </div>
            </div>
        </div>


    );
}

export default Login;