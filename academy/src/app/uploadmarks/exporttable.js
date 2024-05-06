'use client'
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const ExportedTable = () => {
  // Retrieve table data from local storage
  const tableData = JSON.parse(localStorage.getItem('tableData'));

  // Render the table using the retrieved data
  return (
    <div>
      <h1>Exported Table Data</h1>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Roll No</TableCell>
              {tableData[0]?.marks.map((_, index) => (
                <TableCell key={index}>Question {index + 1}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((student, studentIndex) => (
              <TableRow key={studentIndex}>
                <TableCell>{student.name}</TableCell>
                <TableCell>{student.rollNo}</TableCell>
                {student.marks.map((mark, questionIndex) => (
                  <TableCell key={questionIndex}>{mark}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ExportedTable;
