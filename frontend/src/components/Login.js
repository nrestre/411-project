import React from "react";
import "./Login.css"; // Import CSS file for custom styles

const Login = ({ onLogin }) => {
    // Function to handle Google login
    const handleGoogleLogin = () => {

        //Http request to backend
        // Call function for handling Google login
        // Example: handleGoogleLogin()
        onLogin();
    };

    return (
        <div className="login-container">
            <h1>Login Page</h1>
            <button className="login-button" onClick={handleGoogleLogin}>
                Login with Google
            </button>
        </div>
    );
};

export default Login;