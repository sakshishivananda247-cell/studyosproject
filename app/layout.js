import "./globals.css";
import Sidebar from "../components/Sidebar";
import Providers from "./providers";

export const metadata = {
  title: "StudyOS - Student Workspace",
  description: "Your personal student productivity and study planner",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className="app-layout">
            <Sidebar />
            <main className="main-content">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}