"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { name: "Dashboard", href: "/", icon: "⌂" },
  { name: "My Tasks", href: "/tasks", icon: "✓" },
  { name: "Timetable", href: "/timetable", icon: "▦" },
  { name: "Study History", href: "/history", icon: "◷" },
  { name: "Scratchpad", href: "/scratchpad", icon: "✎" },
  { name: "My Files", href: "/files", icon: "▤" },
  { name: "Settings", href: "/settings", icon: "⚙" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-icon">S</div>
        <div>
          <h2>StudyOS</h2>
          <span>STUDENT WORKSPACE</span>
        </div>
      </div>

      <div className="menu-label">WORKSPACE</div>

      <nav className="navigation">
        {menuItems.map((item) => {
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link ${active ? "active" : ""}`}
            >
              <span className="nav-icon">{item.icon}</span>
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="sidebar-bottom">
        <div className="profile-avatar">S</div>
        <div>
          <strong>My Workspace</strong>
          <span>Student Account</span>
        </div>
      </div>
    </aside>
  );
}