import { useState, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import Button from "../Button";
import Card from "../Card";

export default function Tasks() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("All");

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { text: input, completed: false }]);
      setInput("");
    }
  };

  const toggleComplete = (index) => {
    const updated = tasks.map((t, i) =>
      i === index ? { ...t, completed: !t.completed } : t
    );
    setTasks(updated);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const filteredTasks =
    filter === "All"
      ? tasks
      : tasks.filter((t) => (filter === "Active" ? !t.completed : t.completed));

  return (
    <div className="space-y-4">
      <Card title="Task Manager">
        <div className="flex gap-2 mb-4">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="border p-2 rounded w-full"
            placeholder="Add a new task..."
          />
          <Button onClick={addTask}>Add</Button>
        </div>

        <div className="flex gap-2 mb-4">
          {["All", "Active", "Completed"].map((f) => (
            <Button
              key={f}
              variant={filter === f ? "primary" : "secondary"}
              onClick={() => setFilter(f)}
            >
              {f}
            </Button>
          ))}
        </div>

        <ul className="space-y-2">
          {filteredTasks.map((task, i) => (
            <li key={i} className="flex justify-between items-center bg-gray-100 dark:bg-gray-700 p-2 rounded">
              <span
                className={`cursor-pointer ${task.completed ? "line-through" : ""}`}
                onClick={() => toggleComplete(i)}
              >
                {task.text}
              </span>
              <Button variant="danger" onClick={() => deleteTask(i)}>
                Delete
              </Button>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
