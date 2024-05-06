{"use client"
import { useState } from 'react';
import Layout from './layout';
import { db } from '../../../firebase.config'; // Import Firebase config
import { collection } from 'firebase/firestore';

const UploadMarks = () => {
  const [subject, setSubject] = useState('');
  const [numberOfQuestions, setNumberOfQuestions] = useState(0);
  const [students, setStudents] = useState([
    { name: 'Megha', rollNo: 39, marks: [] },
    { name: 'Riya', rollNo: 49, marks: [] },
    { name: 'Samasya', rollNo: 50, marks: [] },
    { name: 'Siddharth', rollNo: 51, marks: [] }
  ]);

  const handleUploadMarks = async () => {
    try {
      // Create a new document in the 'questionpapers' collection
      const questionPaperRef = await db.collection('questionapers').add({
        subjectId: subject,
        date: new Date(),
      });
      console.log(questionPaperRef)

      // Create a new subcollection 'marks' inside the document created in 'questionPapers' collection
      const marksCollectionRef = questionPaperRef.collection('marks');

      // Iterate through each student and upload marks to Firestore
      for (const student of students) {
        await marksCollectionRef.doc(student.rollNo.toString()).set({
          name: student.name,
          rollNo: student.rollNo,
          marks: student.marks,
        });
      }

      alert('Marks uploaded successfully!');
    } catch (error) {
      console.error('Error uploading marks:', error);
      alert('Failed to upload marks. Please try again.');
    }
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleNumberOfQuestionsChange = (e) => {
    const count = parseInt(e.target.value);
    setNumberOfQuestions(count);
    // Initialize marks for each student
    const updatedStudents = students.map(student => {
      const marks = Array(count).fill('');
      return { ...student, marks };
    });
    setStudents(updatedStudents);
  };

  const handleStudentChange = (index, field, e) => {
    const updatedStudents = [...students];
    updatedStudents[index][field] = e.target.value;
    setStudents(updatedStudents);
  };

  const handleMarkChange = (studentIndex, questionIndex, e) => {
    const updatedStudents = [...students];
    updatedStudents[studentIndex].marks[questionIndex] = parseInt(e.target.value);
    setStudents(updatedStudents);
  };

  const renderTable = () => {
    return (
      <table className="border-collapse border w-full">
        <thead>
          <tr>
            <th className="border border-gray-400 p-2">Name</th>
            <th className="border border-gray-400 p-2">Roll No</th>
            {[...Array(numberOfQuestions).keys()].map((_, index) => (
              <th key={index} className="border border-gray-400 p-2">Question {index + 1}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {students.map((student, studentIndex) => (
            <tr key={studentIndex}>
              <td className="border border-gray-400 p-2">
                <input
                  type="text"
                  className="w-full"
                  value={student.name}
                  onChange={(e) => handleStudentChange(studentIndex, 'name', e)}
                />
              </td>
              <td className="border border-gray-400 p-2">
                <input
                  type="text"
                  className="w-full"
                  value={student.rollNo}
                  onChange={(e) => handleStudentChange(studentIndex, 'rollNo', e)}
                />
              </td>
              {student.marks.map((mark, questionIndex) => (
                <td key={questionIndex} className="border border-gray-400 p-2">
                  <input
                    type="number"
                    className="w-full"
                    value={mark || ''}
                    onChange={(e) => handleMarkChange(studentIndex, questionIndex, e)}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <Layout>
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-bold mb-6">Upload Marks</h1>
        <div className="mb-4">
          <label className="block font-bold mb-2">Subject:</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={subject}
            onChange={handleSubjectChange}
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2">Number of Questions:</label>
          <input
            type="number"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={numberOfQuestions}
            onChange={handleNumberOfQuestionsChange}
          />
        </div>
        <h2 className="text-xl font-bold mb-2">Students:</h2>
        {renderTable()}
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={handleUploadMarks}
        >
          Upload Marks
        </button>
      </div>
    </Layout>
  );
};

export default UploadMarks;
*/}