import { useState } from "react";
import dayjs from "dayjs";
import { ToastContainer, toast } from "react-toastify";
import {
  Box,
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import styled from "@emotion/styled";

const StyledButton = styled(Button)(() => ({
  color: "#4e73df",
  fontWeight: "600",
  variant: "contained",
}));

const StudentList = ({ data }) => {
 

  return (
    <div>
      <Typography variant="h4">Student List</Typography>
      <ul>
        {students.map((student, index) => (
          <li key={index}>
            {student.name} - Roll No: {student.rollno}
          </li>
        ))}
      </ul>
    </div>
  );
};

const AttendancePage = () => {
  const students = [
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
  ];
  const [attendance, setAttendance] = useState([]);

  const currentDate = dayjs(new Date()).format("DD/MMM/YYYY");

  const handleRadioChange = (index, value) => {
    const updatedAttendance = [...attendance];
    updatedAttendance[index] = value;
    setAttendance(updatedAttendance);
  };

  const getLabelColor = (index) => {
    const status = attendance[index];
    return status === "Present" ? "#4e73df" : "red";
  };

  const handleClearAttendance = () => {
    setAttendance(Array(students.length).fill(""));
  };

  const handleAllPresent = () => {
    setAttendance(Array(students.length).fill("Present"));
  };

  const handleAttendance = () => {
    const presentCount = attendance.filter((status) => status === "Present").length;
    const totalStudents = students.length;
    const attendancePercentage = ((presentCount / totalStudents) * 100).toFixed(2);

    const absentArray = students.filter((student, index) => attendance[index] !== "Present");
    let absentees = absentArray.map((student) => ({
      name: student.name,
      rollno: student.rollno,
    }));
    if (absentees.length === 0) {
      absentees = ["All Present"];
    }

    const attendanceObject = {
      date: currentDate,
      absentees: absentees,
      attendancePercentage: attendancePercentage,
    };
    console.log("data", attendanceObject);
    toast.success("Attendance submitted successfully");
  };

  return (
    <Box>
      <ToastContainer />
      <Typography
        variant="h6"
        component="h2"
        textAlign="center"
        gutterBottom
        sx={{ color: "#4e73df", fontWeight: "600" }}
      >
        {currentDate}
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Roll No</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Attendance</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((student, index) => (
            <TableRow key={index}>
              <TableCell>
                <Typography
                  variant="body1"
                  component="span"
                  style={{
                    color: getLabelColor(index),
                    fontWeight: "bold",
                  }}
                >
                  {student.rollno}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  variant="body1"
                  component="span"
                  style={{
                    color: getLabelColor(index),
                    fontWeight: "bold",
                  }}
                >
                  {student.name}
                </Typography>
              </TableCell>
              <TableCell>
                <RadioGroup
                  value={attendance[index] || ""}
                  onChange={(event) =>
                    handleRadioChange(index, event.target.value)
                  }
                  row
                >
                  <FormControlLabel
                    value="Present"
                    control={<Radio />}
                    label="Present"
                  />
                  <FormControlLabel
                    value="Absent"
                    control={<Radio color="error" />}
                    label="Absent"
                  />
                </RadioGroup>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Box mt={2} display="flex" justifyContent="space-between">
        <StyledButton variant="outlined" onClick={handleAllPresent}>
          All Present
        </StyledButton>
        <StyledButton variant="outlined" onClick={handleAttendance}>
          Submit Attendance
        </StyledButton>
        <StyledButton variant="outlined" onClick={handleClearAttendance}>
          Clear All
        </StyledButton>
      </Box>
    </Box>
  );
};

export default AttendancePage;
