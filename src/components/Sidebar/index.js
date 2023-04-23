import React from "react";
import "./sidebar.css";

const SideBar = () => {
  return (
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
      </ul>
    </div>
  );
};

export default SideBar;
