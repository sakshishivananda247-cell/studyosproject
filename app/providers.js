"use client";

import { StudyProvider } from "../context/StudyContext";

export default function Providers({ children }) {
  return (
    <StudyProvider>
      {children}
    </StudyProvider>
  );
}