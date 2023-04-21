import react, { useState } from 'react';
import './App.css';
//import Login from "./components/Login";
//import MainApp from "./MainApp";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Weather from "./components/Weather";
import Map from "./components/Map";
import List from "./components/List";



function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Example: state variable to track login status

    // Example: function to handle successful login
    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    return (
        <div>
            <Header />
            <div style={{ display: "flex", flex: 1 }}>
                <SideBar />
                <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
                    <Weather />
                    <Map />
                    <List />
                </div>
            </div>
        </div>
    );
}

export default App;
