"use client";

import { useState } from "react";

export default function Scratchpad() {
  const [notes, setNotes] = useState("");
  const [saved, setSaved] = useState(false);

  return (
    <div className="page-container">
      <div className="page-heading">
        <p className="welcome-text">YOUR PERSONAL SPACE</p>
        <h1>Scratchpad ✏️</h1>
        <p className="subheading">
          Write down ideas, reminders and study notes.
        </p>
      </div>

      <div className="content-card">
        <h2>My Notes</h2>

        <textarea
          className="scratchpad-area"
          placeholder="Start writing your ideas here..."
          value={notes}
          onChange={(e) => {
            setNotes(e.target.value);
            setSaved(false);
          }}
        />

        <div className="scratchpad-footer">
          <span>{notes.length} characters</span>

          <button
            className="primary-button"
            onClick={() => {
              localStorage.setItem("studyos-notes", notes);
              setSaved(true);
            }}
          >
            Save Notes
          </button>
        </div>

        {saved && <p className="success-message">Notes saved successfully!</p>}
      </div>
    </div>
  );
}