"use client";

import { useState } from "react";
import { useStudy } from "../../context/StudyContext";

export default function Timetable() {
  const { schedule, setSchedule } = useStudy();

  const [subject, setSubject] = useState("");
  const [time, setTime] = useState("");
  const [duration, setDuration] = useState("1 hour");
  const [day, setDay] = useState("Monday");

  function addSession(e) {
    e.preventDefault();

    if (!subject.trim() || !time) return;

    setSchedule((previous) => [
      ...previous,
      {
        id: Date.now(),
        subject,
        time,
        duration,
        day,
      },
    ]);

    setSubject("");
    setTime("");
    setDuration("1 hour");
  }

  function removeSession(id) {
    setSchedule((previous) =>
      previous.filter((session) => session.id !== id)
    );
  }

  return (
    <div className="page-container">
      <div className="page-heading">
        <p className="welcome-text">PLAN YOUR TIME</p>
        <h1>Study Timetable 📅</h1>
        <p className="subheading">
          Organize your study sessions and daily goals.
        </p>
      </div>

      <div className="content-card">
        <h2>Add Study Session</h2>

        <form onSubmit={addSession} className="task-form">
          <input
            placeholder="Subject name"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />

          <select value={day} onChange={(e) => setDay(e.target.value)}>
            {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((d) => (
              <option key={d}>{d}</option>
            ))}
          </select>

          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />

          <select
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          >
            <option>30 minutes</option>
            <option>1 hour</option>
            <option>2 hours</option>
            <option>3 hours</option>
          </select>

          <button className="primary-button" type="submit">
            + Add Session
          </button>
        </form>
      </div>

      <div className="content-card">
        <h2>Your Weekly Schedule</h2>

        {schedule.length === 0 ? (
          <p className="empty-message">No study sessions added yet.</p>
        ) : (
          ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((d) => {
            const sessions = schedule.filter((s) => s.day === d);

            return (
              <div key={d} className="schedule-day">
                <h3>{d}</h3>

                {sessions.length === 0 ? (
                  <p className="empty-message">No sessions planned.</p>
                ) : (
                  sessions.map((session) => (
                    <div className="task-row" key={session.id}>
                      <div className="task-info">
                        <strong>{session.subject}</strong>
                        <span>{session.time} · {session.duration}</span>
                      </div>

                      <button
                        className="delete-button"
                        onClick={() => removeSession(session.id)}
                      >
                        Remove
                      </button>
                    </div>
                  ))
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}