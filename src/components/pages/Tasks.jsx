import { useState, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import Button from "../Button";
import Card from "../Card";

export default function Tasks() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("All");

  // Migrate existing tasks to have IDs if they don't
  useEffect(() => {
    const migratedTasks = tasks.map((task) =>
      task.id ? task : { ...task, id: Date.now() + Math.random() }
    );
    if (migratedTasks.some((task, index) => task.id !== tasks[index].id)) {
      setTasks(migratedTasks);
    }
  }, []);

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { id: Date.now(), text: input, completed: false }]);
      setInput("");
    }
  };

  const toggleComplete = (id) => {
    const updated = tasks.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t
    );
    setTasks(updated);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
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
          {filteredTasks.map((task) => (
            <li key={task.id} className="flex justify-between items-center bg-gray-100 dark:bg-gray-700 p-2 rounded">
              <span
                className={`cursor-pointer text-gray-900 dark:text-gray-100 ${task.completed ? "line-through" : ""}`}
                onClick={() => toggleComplete(task.id)}
              >
                {task.text}
              </span>
              <Button variant="danger" onClick={() => deleteTask(task.id)}>
                Delete
              </Button>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
