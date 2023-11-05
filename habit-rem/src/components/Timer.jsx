import React, { useState, useEffect } from "react";

function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return `${hours}h ${minutes}m ${secs}s`;
}

function Timer({ id, label, interval, onEdit, onDelete, onComplete }) {
  const [time, setTime] = useState(interval);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let timer;
    if (!isPaused) {
      timer = setInterval(() => {
        if (time === 0) {
          clearInterval(timer);
          onComplete(id);
        } else {
          setTime((prevTime) => prevTime - 1);
        }
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isPaused, time, interval, id, onComplete]);

  const pauseResume = () => {
    setIsPaused(!isPaused);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md mb-4">
      <h2 className="text-lg font-semibold mb-2">{label} Timer</h2>
      <p>Time: {formatTime(time)}</p>
      <button onClick={onEdit}>Edit</button>
      <button onClick={onDelete}>Delete</button>
      <button onClick={pauseResume}>{isPaused ? "Resume" : "Pause"}</button>
    </div>
  );
}
export default Timer;
