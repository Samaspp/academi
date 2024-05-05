// components/Sidebar.js
import "./Sidebar.css";
import React from "react";
import Link from "next/link";

const Sidebar = (props) => {
  return (
    <div className="sidebar">
      <ul>
        <li className="sidebar-li">
        <span onClick={() => {props.setShowDashboard(true);props.setShowAttendance(false);props.setShowAssignments(false)}}>Dashboard</span>
        </li>
        <li className="sidebar-li">
        <span onClick={() => {props.setShowDashboard(false);props.setShowAttendance(true);props.setShowAssignments(false)}}>Attendance</span>
        </li>
        <li className="sidebar-li">
        <span onClick={() => {props.setShowDashboard(false);props.setShowAttendance(false);props.setShowAssignments(true)}}>Assignment</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
