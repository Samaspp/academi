// components/Sidebar.js
import "./Sidebar.css";
import React from "react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li className="sidebar-li">
          <Link href="/student">Dashboard</Link>
        </li>
        
      </ul>
    </div>
  );
};

export default Sidebar;
