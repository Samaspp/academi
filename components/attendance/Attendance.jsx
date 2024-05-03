// pages/attendance.js
/*
import React, { students } from 'react';

const Attendance = () => {
  const [attendanceList, setAttendanceList] = students([
    let students = [
        {
          name: "Siddharth",
          rollno: 10,
        },
        {
          name: "Riya",
          rollno: 20,
        },
        {
          name: "Samasya",
          rollno: 30,
        },
        {
          name: "Megha",
          rollno: 40,
        },
  ]);

  const toggleAttendance = (id) => {
    setAttendanceList(attendanceList.map(student => {
      if (student.id === id) {
        return { ...student, present: !student.present };
      }
      return student;
    }));
  };

  return (
    <div>
      <h1>Attendance Page</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Present</th>
          </tr>
        </thead>
        <tbody>
          {attendanceList.map(student => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>
                <input
                  type="checkbox"
                  checked={student.present}
                  onChange={() => toggleAttendance(student.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Attendance;
*/
