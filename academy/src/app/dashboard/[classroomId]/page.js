"use client";
import assigment from "../../components/assignment/Assignment";
import attendance from "../../components/attendance/Attendance";
import style from "../../styles/Classroom.module.css";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { StudentList } from "../../components/studentlist/StudentList";
import React, { useState } from "react";
import CalendarPage from "../Calender";
import AttendancePage, {
  Attendance,
} from "@/app/components/attendance/Attendance";
import AssignmentUploadForm from "@/app/components/assignment/Assignmentupload";
import UploadAssignmentPage from "@/app/components/assignment/Assignment";

const ClassroomDetails = ({ params }) => {
  let id = params.classroomId;
  const [showAttendance, setShowAttendance] = useState(false);
  const [showAssignments, setShowAssignments] = useState(false);
  const [showDashboard, setShowDashboard] = useState(true);

  return (
    <div>
      <Navbar />
      <div className={style.classroomcontainer}>
        <Sidebar
          setShowAttendance={setShowAttendance}
          setShowAssignments={setShowAssignments}
          setShowDashboard={setShowDashboard}
        />
        {showDashboard && (
          <div className="flex items-center justify-between w-full flex-grow">
            <StudentList />
            <div className={style.classroomcalendar}>
              <CalendarPage />
            </div>
          </div>
        )}
        {showAttendance && <AttendancePage />}

        {showAssignments && <UploadAssignmentPage />}
      </div>
    </div>
  );
};

export default ClassroomDetails;
