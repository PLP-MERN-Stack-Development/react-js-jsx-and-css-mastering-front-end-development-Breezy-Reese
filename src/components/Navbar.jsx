import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-200 dark:bg-gray-900">
      <div className="text-xl font-bold">Task Manager</div>
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/tasks">Tasks</Link>
        <Link to="/api-data">API Data</Link>
        <button onClick={toggleTheme}>
          {theme === "dark" ? "🌞" : "🌙"}
        </button>
      </div>
    </nav>
  );
}
