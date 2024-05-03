"use client";
import style from "../../styles/Classroom.module.css";
import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import { StudentList } from "@/components/studentlist/StudentList";
import React from "react";

const ClassroomDetails = ({ params }) => {
  let id = params.classroomId;
  return (
    <div>
      <Navbar />
      <div className={style.classroomcontainer}>
        <Sidebar />
        <StudentList />
      </div>
    </div>
  );
};

export default ClassroomDetails;
