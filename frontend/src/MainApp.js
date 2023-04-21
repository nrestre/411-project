import './App.css';
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Weather from "./components/Weather";
import Map from "./components/Map";
import List from "./components/List";


function MainApp() {
    return (
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
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

export default MainApp;
