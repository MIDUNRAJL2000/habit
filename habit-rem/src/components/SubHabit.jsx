import React, { useState } from "react";
import TaskTimer from "./TaskTimer";
import { FaEdit, FaTrash } from "react-icons/fa";

function SubHabit({ timerz, name, timers, onDelete }) {
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
    alert(`Timer "${name}" with start time "${timer.startTime}" is reminded!`);
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

  console.log("tinjg", timers);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md mb-4 mt-8">
      {/* <span>{timers}</span> */}
      {timers.map((timer, index) => (
        <div key={index} className="timer-item">
          <TaskTimer
            timerz={timerz}
            id={index}
            label={timer.label}
            interval={timer.interval}
            startTime={timer.startTime}
            onComplete={() => completeTimer(index)}
            onEdit={() => editTimer(index, newLabel, newInterval)}
            id={index}
          />
        </div>
      ))}
      {completedTasks.map((task, index) => (
        <div key={index}>{task.subHabitName}</div>
      ))}
    </div>
  );
}

export default SubHabit;
