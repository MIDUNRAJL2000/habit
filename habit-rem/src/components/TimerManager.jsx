import React, { useState } from "react";
import TaskTimer from "./TaskTimer";

function TimerManager() {
  const [timers, setTimers] = useState([
    { id: 1, label: "Task 1", interval: 3600, completed: false },
    { id: 2, label: "Task 2", interval: 7200, completed: false },
    { id: 3, label: "Task 3", interval: 18000, completed: false },
  ]);
  const [editingTimer, setEditingTimer] = useState(null);
  const [newLabel, setNewLabel] = useState("");
  const [newInterval, setNewInterval] = useState(3600);

  const addTimer = () => {
    const id = Date.now();
    setTimers([
      ...timers,
      { id, label: newLabel, interval: newInterval, completed: false },
    ]);
    setNewLabel("");
    setNewInterval(3600);
  };

  const editTimer = (id) => {
    const editedTimers = timers.map((timer) => {
      if (timer.id === id) {
        timer.label = newLabel;
        timer.interval = newInterval;
      }
      return timer;
    });
    setTimers(editedTimers);
    setEditingTimer(null);
    setNewLabel("");
    setNewInterval(3600);
  };

  const deleteTimer = (id) => {
    const updatedTimers = timers.filter((timer) => timer.id !== id);
    setTimers(updatedTimers);
  };

  const completeTask = (id) => {
    const updatedTimers = timers.map((timer) => {
      if (timer.id === id) {
        timer.completed = true;
      }
      return timer;
    });
    setTimers(updatedTimers);
    alert(`Task "${timers.find((timer) => timer.id === id).label}" completed!`);
  };
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Timer Manager</h2>
      <input
        type="text"
        placeholder="Task Label"
        value={newLabel}
        onChange={(e) => setNewLabel(e.target.value)}
      />
      <input
        type="number"
        className="border border-gray-300 rounded px-3 py-2"
        placeholder="Time Interval (seconds)"
        value={newInterval}
        onChange={(e) => setNewInterval(e.target.value)}
      />
      <button onClick={addTimer}>Add Task</button>
      {timers.map((timer) => (
        <div key={timer.id}>
          {editingTimer === timer.id ? (
            <div>
              <input
                type="text"
                value={newLabel}
                onChange={(e) => setNewLabel(e.target.value)}
              />
              <input
                type="number"
                value={newInterval}
                onChange={(e) => setNewInterval(e.target.value)}
              />
              <button onClick={() => editTimer(timer.id)}>Save</button>
            </div>
          ) : (
            <TaskTimer
              key={timer.id}
              id={timer.id}
              label={timer.label}
              interval={timer.interval}
              onEdit={() => {
                setEditingTimer(timer.id);
                setNewLabel(timer.label);
                setNewInterval(timer.interval);
              }}
              onDelete={() => deleteTimer(timer.id)}
              onComplete={() => completeTask(timer.id)}
            />
          )}
        </div>
      ))}
      {/* <h2>Completed Tasks</h2>
      {timers
        .filter((timer) => timer.completed)
        .map((completedTimer) => (
          <div key={completedTimer.id}>{completedTimer.label}</div>
        ))} */}
    </div>
  );
}

export default TimerManager;
