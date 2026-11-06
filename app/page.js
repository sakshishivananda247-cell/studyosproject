"use client";

import Link from "next/link";
import { useStudy } from "../context/StudyContext";

export default function Dashboard() {
  const { tasks, completedTasks, toggleTask } = useStudy();

  const pendingTasks = tasks.filter((task) => !task.completed);

  const progress =
    tasks.length === 0
      ? 0
      : Math.round((completedTasks / tasks.length) * 100);

  return (
    <div>
      <header className="top-header">
        <div>
          <p className="welcome-text">YOUR STUDENT WORKSPACE</p>
          <h1>Good morning! 👋</h1>
          <p className="subheading">
            Let's make today productive.
          </p>
        </div>
        <div className="date-display">
          {new Date().toLocaleDateString("en-IN", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </div>
      </header>

      <section className="hero-card">
        <div>
          <span className="hero-label">YOUR DAILY GOAL</span>
          <h2>Small steps, big achievements.</h2>
          <p>Stay focused and make progress every day.</p>
          <Link href="/tasks" className="hero-button">
            View My Tasks →
          </Link>
        </div>
        <div className="hero-emoji">📚</div>
      </section>

      <section className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon blue">✓</div>
          <p>Total Tasks</p>
          <h2>{tasks.length}</h2>
          <span>All your study tasks</span>
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
          <h2>{pendingTasks.length}</h2>
          <span>Tasks remaining</span>
        </div>

        <div className="stat-card">
          <div className="stat-icon purple">↗</div>
          <p>Progress</p>
          <h2>{progress}%</h2>
          <span>Task completion</span>
        </div>
      </section>

      <section className="dashboard-grid">
        <div className="content-card">
          <div className="section-heading">
            <div>
              <h2>Today's Tasks</h2>
              <p>Keep moving towards your goals.</p>
            </div>
            <Link href="/tasks" className="view-link">
              View all →
            </Link>
          </div>

          {tasks.length === 0 ? (
            <p className="empty-message">
              No tasks yet. Add your first task!
            </p>
          ) : (
            <div className="task-list">
              {tasks.slice(0, 5).map((task) => (
                <div className="task-row" key={task.id}>
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                  />
                  <div className="task-info">
                    <strong
                      className={
                        task.completed ? "completed-task" : ""
                      }
                    >
                      {task.title}
                    </strong>
                    <span>{task.subject}</span>
                  </div>
                  <span className={`task-status ${
                    task.completed ? "done" : "pending"
                  }`}>
                    {task.completed ? "Done" : "Pending"}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="content-card progress-card">
          <h2>Study Progress</h2>
          <p>Your overall task completion</p>

          <div className="progress-circle"
            style={{ "--progress": `${progress}%` }}
          >
            <div className="progress-inner">
              <strong>{progress}%</strong>
              <span>Completed</span>
            </div>
          </div>

          <p className="progress-note">
            {completedTasks} out of {tasks.length} tasks completed.
          </p>
        </div>
      </section>

      <section className="quick-links">
        <h2>Quick Access</h2>
        <div className="quick-grid">
          <Link href="/tasks" className="quick-card">
            <span>📝</span>
            <strong>Add a Task</strong>
            <small>Organize your work</small>
          </Link>

          <Link href="/timetable" className="quick-card">
            <span>📅</span>
            <strong>Timetable</strong>
            <small>Plan your study time</small>
          </Link>

          <Link href="/scratchpad" className="quick-card">
            <span>✏️</span>
            <strong>Scratchpad</strong>
            <small>Write your ideas</small>
          </Link>
        </div>
      </section>
    </div>
  );
}