"use client";

import { createContext, useContext, useState } from "react";

const StudyContext = createContext();

export function StudyProvider({ children }) {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Complete Mathematics assignment",
      subject: "Mathematics",
      date: "2026-11-08",
      completed: false,
    },
    {
      id: 2,
      title: "Revise Computer Networks",
      subject: "Computer Science",
      date: "2026-11-09",
      completed: false,
    },
    {
      id: 3,
      title: "Read English chapter 4",
      subject: "English",
      date: "2026-11-07",
      completed: true,
    },
  ]);

  const [schedule, setSchedule] = useState([
    {
      id: 1,
      subject: "Mathematics",
      time: "09:00 AM",
      duration: "1 hour",
    },
    {
      id: 2,
      subject: "Computer Science",
      time: "11:00 AM",
      duration: "2 hours",
    },
    {
      id: 3,
      subject: "English",
      time: "03:00 PM",
      duration: "1 hour",
    },
  ]);

  const addTask = (task) => {
    setTasks((previous) => [
      ...previous,
      { ...task, id: Date.now(), completed: false },
    ]);
  };

  const toggleTask = (id) => {
    setTasks((previous) =>
      previous.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((previous) =>
      previous.filter((task) => task.id !== id)
    );
  };

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  return (
    <StudyContext.Provider
      value={{
        tasks,
        schedule,
        setSchedule,
        addTask,
        toggleTask,
        deleteTask,
        completedTasks,
      }}
    >
      {children}
    </StudyContext.Provider>
  );
}

export function useStudy() {
  return useContext(StudyContext);
}