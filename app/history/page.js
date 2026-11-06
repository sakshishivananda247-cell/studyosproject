"use client";

import { useStudy } from "../../context/StudyContext";

export default function History() {
  const { tasks, completedTasks } = useStudy();

  const pendingTasks = tasks.length - completedTasks;

  const progress = tasks.length
    ? Math.round((completedTasks / tasks.length) * 100)
    : 0;

  const completed = tasks.filter((task) => task.completed);

  return (
    <div className="page-container">
      <div className="page-heading">
        <p className="welcome-text">YOUR ACHIEVEMENTS</p>
        <h1>Study History 📊</h1>
        <p className="subheading">
          Track your completed work and study progress.
        </p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon blue">▤</div>
          <p>Total Tasks</p>
          <h2>{tasks.length}</h2>
          <span>Tasks created</span>
        </div>

        <div className="stat-card">
          <div className="stat-icon green">✓</div>
          <p>Completed</p>
          <h2>{completedTasks}</h2>
          <span>Tasks finished</span>
        </div>

        <div className="stat-card">
          <div className="stat-icon orange">◷</div>
          <p>Pending</p>
          <h2>{pendingTasks}</h2>
          <span>Tasks remaining</span>
        </div>

        <div className="stat-card">
          <div className="stat-icon purple">↗</div>
          <p>Completion</p>
          <h2>{progress}%</h2>
          <span>Overall progress</span>
        </div>
      </div>

      <div className="content-card">
        <h2>Completed Tasks 🏆</h2>

        {completed.length === 0 ? (
          <p className="empty-message">
            No completed tasks yet. Keep studying!
          </p>
        ) : (
          completed.map((task) => (
            <div className="task-row" key={task.id}>
              <div className="task-info">
                <strong>{task.title}</strong>
                <span>{task.subject} · Deadline: {task.date}</span>
              </div>

              <span className="task-status done">Completed</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}