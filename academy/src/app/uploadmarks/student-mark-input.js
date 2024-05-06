import { TextField } from '@mui/material';

const StudentMarkInput = ({ questionNumber, studentName, mark, onChange }) => {
  return (
    <div className="flex items-center space-x-4">
      <p>{studentName}</p>
      <TextField
        label={`Mark for Question ${questionNumber}`}
        variant="outlined"
        type="number"
        value={mark}
        onChange={(e) => onChange(questionNumber, e.target.value)}
      />
    </div>
  );
};

export default StudentMarkInput;
