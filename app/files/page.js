"use client";

import { useState } from "react";

export default function Files() {
  const [files, setFiles] = useState([]);

  function handleUpload(e) {
    const selected = Array.from(e.target.files || []);

    const newFiles = selected.map((file) => ({
      id: Date.now() + Math.random(),
      name: file.name,
      size: (file.size / 1024).toFixed(1) + " KB",
      type: file.type || "Unknown file",
    }));

    setFiles((previous) => [...previous, ...newFiles]);
    e.target.value = "";
  }

  function removeFile(id) {
    setFiles((previous) =>
      previous.filter((file) => file.id !== id)
    );
  }

  return (
    <div className="page-container">
      <div className="page-heading">
        <p className="welcome-text">YOUR DOCUMENT SPACE</p>
        <h1>My Files 📁</h1>
        <p className="subheading">
          Organize your study documents and resources.
        </p>
      </div>

      <div className="content-card">
        <h2>Upload Study Materials</h2>

        <label className="upload-area">
          <span>📤</span>
          <strong>Choose files from your computer</strong>
          <small>PDFs, documents, images and notes</small>
          <input
            type="file"
            multiple
            onChange={handleUpload}
          />
        </label>
      </div>

      <div className="content-card">
        <h2>My Documents ({files.length})</h2>

        {files.length === 0 ? (
          <p className="empty-message">
            No files uploaded yet. Choose a file to get started.
          </p>
        ) : (
          files.map((file) => (
            <div className="task-row" key={file.id}>
              <div className="task-info">
                <strong>📄 {file.name}</strong>
                <span>{file.size} · {file.type}</span>
              </div>

              <button
                className="delete-button"
                onClick={() => removeFile(file.id)}
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}