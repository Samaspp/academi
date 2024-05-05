// pages/uploadAssignment.js
import { useState } from "react";

const AssignmentUploadForm = ({ onSubmit }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      onSubmit(file);
    }
  };

  return (
    <div>
      <h1>Upload Assignment</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

const UploadAssignmentPage = () => {
  const [uploadStatus, setUploadStatus] = useState("");

  const handleUpload = (file) => {
    // Simulating upload process (you can replace this with actual API call)
    setTimeout(() => {
      setUploadStatus(`Assignment ${file.name} uploaded successfully.`);
    }, 2000);
  };

  return (
    <div>
      <AssignmentUploadForm onSubmit={handleUpload} />
      {uploadStatus && <p>{uploadStatus}</p>}
    </div>
  );
};

export default UploadAssignmentPage;
