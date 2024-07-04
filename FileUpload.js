import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import "./FileUpload.css";

const FileUpload = () => {
  const [files, setFiles] = useState([]);
  const navigate = useNavigate();

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      setFiles([
        ...files,
        ...acceptedFiles.map((file) => ({
          file,
          editing: false,
          name: file.name,
        })),
      ]);
    },
    maxFiles: 5,
  });

  const handleDelete = (index) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    const newFiles = [...files];
    newFiles[index].editing = !newFiles[index].editing;
    setFiles(newFiles);
  };

  const handleNameChange = (index, event) => {
    const newFiles = [...files];
    newFiles[index].name = event.target.value;
    setFiles(newFiles);
  };

  const handleStart = () => {
    navigate("/questions", { state: { files } });
  };

  return (
    <div className="file-upload">
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <p>Drag and drop here or click to upload a file</p>
      </div>
      <ul>
        {files.map((fileWrapper, index) => (
          <li key={index}>
            {fileWrapper.editing ? (
              <input
                type="text"
                value={fileWrapper.name}
                onChange={(e) => handleNameChange(index, e)}
              />
            ) : (
              <span>{fileWrapper.name}</span>
            )}
            <button onClick={() => handleEdit(index)}>
              {fileWrapper.editing ? "Save" : "Edit"}
            </button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <button className="start-button" onClick={handleStart}>
        Start
      </button>
    </div>
  );
};

export default FileUpload;
