import React, { useState } from "react";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import axios from "axios";

const CustomerForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post("/api/v1/customers/forgot-password", { email });
            setMessage(response.data.message);
            setError("");
        } catch (error) {
            setMessage("");
            setError(error.response.data.message);
        }
    };

    return (
        <div>
            <h2>Forgot Password</h2>
            <p>Please enter your email address to reset your password.</p>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email Address:</label>
                    <input type="email" value={email} onChange={handleChange} />
                </div>
                {/* Use Link component to navigate to ResetPasswordPage */}
                <Link to="/customer/reset-password">Reset Password</Link>
            </form>
            {message && <div>{message}</div>}
            {error && <div>{error}</div>}
        </div>
    );
};

export default CustomerForgotPassword;
