import React, { useState } from "react";
import TaskTimer from "./TaskTimer";
import { FaEdit, FaTrash } from "react-icons/fa";

function SubHabit({ name, timers, onDelete }) {
  const [newLabel, setNewLabel] = useState("");
  const [newInterval, setNewInterval] = useState(3600);
  const [completedTasks, setCompletedTasks] = useState([]);

  const addTimer = () => {
    const newTimer = {
      label: newLabel,
      interval: newInterval,
      startTime: new Date().getTime() / 1000, // Current timestamp
    };
    timers.push(newTimer);
    setNewLabel("");
    setNewInterval(3600);
  };

  const completeTimer = (timerIndex) => {
    const timer = timers[timerIndex];
    alert(`Timer "${name}" with start time "${timer.label}" is reminded!`);
    setCompletedTasks([
      ...completedTasks,
      { label: timer.label, subHabitName: name },
    ]);
    timers.splice(timerIndex, 1);
  };

  const editTimer = (timerIndex, newLabel, newInterval) => {
    timers[timerIndex].label = newLabel;
    timers[timerIndex].interval = newInterval;
  };

  const deleteTimer = (timerIndex) => {
    timers.splice(timerIndex, 1);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md mb-4">
      <h3 className="text-lg font-semibold mb-2">{name}</h3>
      <div>
        <input
          type="text"
          className="border border-gray-300 rounded px-3 py-2"
          placeholder="Timer Label"
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
        <button onClick={addTimer}>Add Timer</button>
      </div>
      {timers.map((timer, index) => (
        <div key={index} className="timer-item">
          <TaskTimer
            id={index}
            label={timer.label}
            interval={timer.interval}
            startTime={timer.startTime}
            onComplete={() => completeTimer(index)}
            onEdit={() => editTimer(index, newLabel, newInterval)}
            onDelete={() => deleteTimer(index)}
          />
        </div>
      ))}
      <h4>COMPLETED REMINDERS</h4>
      {completedTasks.map((task, index) => (
        <div key={index}>{task.subHabitName}</div>
      ))}
      <FaTrash onClick={onDelete} className="delete-icon" />
    </div>
  );
}

export default SubHabit;
