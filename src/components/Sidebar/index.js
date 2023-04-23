<<<<<<< HEAD
=======
import React from "react";
>>>>>>> 3844ea6 (Interface fixed, working on google maps)
import "./sidebar.css";

const SideBar = () => {
  return (
<<<<<<< HEAD
    <div className="sidebar-container">
      <ul className="list">
        <li className="option">Option 1</li>
        <li className="option">Option 2</li>
        <li className="option">Option 3</li>
=======
    <div style={{ width: "200px", backgroundColor: "#f0f0f0" }}>
      <ul style={{ listStyle: "none", padding: 0, marginTop: "1rem" }}>
        <li
          style={{
            padding: "8px",
            cursor: "pointer",
            backgroundColor: "#fff",
            borderBottom: "1px solid #ddd",
          }}
        >
          Option 1
        </li>
        <li
          style={{
            padding: "8px",
            cursor: "pointer",
            backgroundColor: "#fff",
            borderBottom: "1px solid #ddd",
          }}
        >
          Option 2
        </li>
        <li
          style={{
            padding: "8px",
            cursor: "pointer",
            backgroundColor: "#fff",
          }}
        >
          Option 3
        </li>
>>>>>>> 3844ea6 (Interface fixed, working on google maps)
      </ul>
    </div>
  );
};

export default SideBar;
