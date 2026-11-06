"use client";

import { useState } from "react";

export default function Settings() {
  const [name, setName] = useState("Student");
  const [email, setEmail] = useState("student@example.com");
  const [darkMode, setDarkMode] = useState(false);
  const [message, setMessage] = useState("");

  function saveSettings(e) {
    e.preventDefault();

    localStorage.setItem(
      "studyos-settings",
      JSON.stringify({ name, email, darkMode })
    );

    setMessage("Settings saved successfully!");
  }

  return (
    <div className="page-container">
      <div className="page-heading">
        <p className="welcome-text">PERSONALIZE YOUR SPACE</p>
        <h1>Settings ⚙️</h1>
        <p className="subheading">
          Manage your StudyOS preferences.
        </p>
      </div>

      <div className="content-card">
        <h2>Profile Settings</h2>

        <form onSubmit={saveSettings} className="settings-form">
          <label>
            Your Name
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
          </label>

          <label>
            Email Address
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </label>

          <label className="theme-option">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={(e) => setDarkMode(e.target.checked)}
            />
            Enable dark mode preference
          </label>

          <button className="primary-button" type="submit">
            Save Settings
          </button>

          {message && <p className="success-message">{message}</p>}
        </form>
      </div>

      <div className="content-card">
        <h2>About StudyOS</h2>
        <p className="subheading">
          StudyOS is your personal student productivity
          and study planning workspace.
        </p>
        <p>Version 1.0.0</p>
      </div>
    </div>
  );
}