import React, { useState } from "react";

const ResetPasswordPage = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [success, setSuccess] = useState(false);

    const handleChangePassword = (e) => {
        e.preventDefault();

        // Simulate a successful password change
        setSuccess(true);
    };

    const redirectToLogin = () => {
        // Redirect to login page after successful password reset (simulation)
        window.location.href = "/customer/signin";
    };

    return (
        <div>
            <h2>Reset Password</h2>
            <form onSubmit={handleChangePassword}>
                <div>
                    <label>New Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>
                <button type="submit" onClick={redirectToLogin}>Change Password</button>
            </form>
            {success && (
                <div className="success-message" style={{ backgroundColor: "green", padding: "10px", borderRadius: "5px", color:"white" }}>
    <p>Password changed successfully!</p>
</div>

            )}
        </div>
    );
};

export default ResetPasswordPage;
