"use client";

import { useState } from "react";
import { useStudy } from "../../context/StudyContext";

export default function Tasks() {
  const { tasks, addTask, toggleTask, deleteTask } = useStudy();

  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [date, setDate] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!title.trim() || !subject.trim() || !date) return;

    addTask({ title, subject, date });

    setTitle("");
    setSubject("");
    setDate("");
  }

  return (
    <div className="page-container">
      <div className="page-heading">
        <p className="welcome-text">STAY ORGANIZED</p>
        <h1>My Tasks 📝</h1>
        <p className="subheading">Manage your assignments and deadlines.</p>
      </div>

      <div className="content-card">
        <h2>Add a New Task</h2>

        <form onSubmit={handleSubmit} className="task-form">
          <input
            placeholder="Task name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <input
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />

          <button type="submit" className="primary-button">
            + Add Task
          </button>
        </form>
      </div>

      <div className="content-card task-page-list">
        <h2>All Tasks ({tasks.length})</h2>

        {tasks.length === 0 ? (
          <p className="empty-message">No tasks yet. Add your first task!</p>
        ) : (
          tasks.map((task) => (
            <div className="task-row" key={task.id}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
              />

              <div className="task-info">
                <strong className={task.completed ? "completed-task" : ""}>
                  {task.title}
                </strong>
                <span>{task.subject} · Deadline: {task.date}</span>
              </div>

              <button
                className="delete-button"
                onClick={() => deleteTask(task.id)}
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}