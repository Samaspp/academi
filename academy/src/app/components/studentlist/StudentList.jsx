import React from "react";
import "./StudentList.css";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

export const StudentList = ({ data }) => {
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
  ];
  return (
    <Box sx={{ height: "320px", overflow: "auto" }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Roll No</TableCell>
            <TableCell>Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((student, index) => (
            <TableRow key={index}>
              <TableCell>
                <Typography variant="body1" component="span">
                  {student?.rollno}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body1" component="span">
                  {student?.name}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};
