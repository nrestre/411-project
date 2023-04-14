import React from "react";
//import logo from "../assets/logo.png"; // import your logo image file

const Header = () => {
    return (
        <header
            style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#f0f0f0",
                padding: "16px",
            }}
        >
            <img
                //src={logo} // replace with your logo image source
                alt="Logo"
                style={{ width: "40px", height: "40px", marginRight: "16px" }}
            />
            <h1 style={{ margin: 0 }}>StudyBuddy</h1>
        </header>
    );
};

export default Header;