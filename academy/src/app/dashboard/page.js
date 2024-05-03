"use client";
import ClassCard from "../components/ClassCard"
import Navbar from "../components/navbar/Navbar"
import { StudentList } from "../components/studentlist/StudentList";
import React from "react";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <ClassCard id="1" />
    </div>
  );
};

export default Dashboard;
