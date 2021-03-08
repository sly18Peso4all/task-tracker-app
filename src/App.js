import React, { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      termin: "Doctor's appointment",
      date: 39,
      reminder: true,
      id: 1,
    },
    {
      termin: "Doctor's appointment",
      date: 3944,
      reminder: true,
      id: 2,
    },
    {
      termin: "Doctor's appointment",
      date: 39,
      reminder: true,
      id: 3,
    },
    {
      termin: "Doctor's appointment",
      date: 39,
      reminder: false,
      id: 4,
    },
  ]);

  // Delete Task
  const deleteTasK = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header title="Task Tracker" />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTasK} onToggle={toggleReminder} />
      ) : (
        "No task to show..."
      )}
    </div>
  );
}

export default App;
