import React, { useState } from "react";
import SubHabit from "./SubHabit";
import { FaEdit, FaTrash } from "react-icons/fa";

function TaskManager() {
  const [habits, setHabits] = useState([]);
  const [newHabit, setNewHabit] = useState("");
  const [editingHabitIndex, setEditingHabitIndex] = useState(null);
  const [editedHabitName, setEditedHabitName] = useState("");
  const [newSubHabit, setNewSubHabit] = useState("");
  const [newSubHabitStartTime, setNewSubHabitStartTime] = useState(0);
  const [newSubHabitInterval, setNewSubHabitInterval] = useState(3600);
  const [completedTasks, setCompletedTasks] = useState([]);

  const addHabit = () => {
    setHabits([...habits, { name: newHabit, subHabits: [] }]);
    setNewHabit("");
  };

  const editHabit = (habitIndex, newName) => {
    habits[habitIndex].name = newName;
    setEditingHabitIndex(null);
  };

  const deleteHabit = (habitIndex) => {
    const updatedHabits = [...habits];
    updatedHabits.splice(habitIndex, 1);
    setHabits(updatedHabits);
  };

  const addSubHabit = (habitIndex) => {
    const updatedHabits = [...habits];
    const subHabit = {
      name: newSubHabit,
      timers: [
        {
          label: newSubHabit,
          interval: newSubHabitInterval,
          startTime: newSubHabitStartTime,
        },
      ],
    };
    updatedHabits[habitIndex].subHabits.push(subHabit);
    setHabits(updatedHabits);
    setNewSubHabit("");
    setNewSubHabitStartTime(0);
  };

  const deleteSubHabit = (habitIndex, subHabitIndex) => {
    const updatedHabits = [...habits];
    updatedHabits[habitIndex].subHabits.splice(subHabitIndex, 1);
    setHabits(updatedHabits);
  };

  return (
    <div className="bg-blue-300 min-h-screen p-4">
      <nav className="p-4 mb-6 flex items-center justify-center ">
        <h1 className="text-4xl text-white font-roboto animate-pulse py-6 hover:text-yellow-300">
          "CULTIVATE GOOD HABITS"
        </h1>
      </nav>
      <div className="p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Enter your Habit</h2>
        <div className="flex mb-4">
          <input
            type="text"
            className="border border-gray-300 rounded-lg py-2 px-4 mr-2"
            placeholder="Habit Name"
            value={newHabit}
            onChange={(e) => setNewHabit(e.target.value)}
          />
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-2 px-4 hover:scale-105 focus:outline-none"
            onClick={addHabit}
          >
            Add Habit
          </button>
        </div>
        {habits.map((habit, habitIndex) => (
          <div
            key={habitIndex}
            className="habit-item bg-blue-100 p-4 rounded-lg mb-4"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xl font-semibold">{habit.name}</span>
              <div className="flex gap-4">
                <FaEdit
                  onClick={() => setEditingHabitIndex(habitIndex)}
                  className="edit-icon cursor-pointer"
                />
                <FaTrash
                  onClick={() => deleteHabit(habitIndex)}
                  className="delete-icon cursor-pointer"
                />
              </div>
            </div>
            {editingHabitIndex === habitIndex ? (
              <div className="edit-habit-input">
                <input
                  type="text"
                  className="border border-gray-300 rounded-lg py-2 px-4 mt-2"
                  value={editedHabitName}
                  onChange={(e) => setEditedHabitName(e.target.value)}
                />
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-2 px-4 mt-2 hover:scale-105 focus:outline-none"
                  onClick={() => editHabit(habitIndex, editedHabitName)}
                >
                  Save
                </button>
              </div>
            ) : (
              <div className="sub-habit-section mt-2">
                <input
                  type="text"
                  placeholder="Name"
                  className="border border-gray-300 rounded-lg py-2 px-4"
                  value={newSubHabit}
                  onChange={(e) => setNewSubHabit(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Start Time"
                  className="border border-gray-300 rounded-lg py-2 px-4 mt-2"
                  value={newSubHabitStartTime}
                  onChange={(e) => setNewSubHabitStartTime(e.target.value)}
                />
                <input
                  type="number"
                  placeholder="Time Interval (seconds)"
                  className="border border-gray-300 rounded-lg py-2 px-4 mt-2"
                  value={newSubHabitInterval}
                  onChange={(e) => setNewSubHabitInterval(e.target.value)}
                />
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-2 px-4 mt-2 hover:scale-105 focus:outline-none"
                  onClick={() => addSubHabit(habitIndex)}
                >
                  Add Timer
                </button>
                <h1>COMPLETED REMINDERS</h1>
                {habit.subHabits.map((subHabit, subHabitIndex) => (
                  <SubHabit
                    key={subHabitIndex}
                    name={subHabit.name}
                    timers={subHabit.timers}
                    onDelete={() => deleteSubHabit(habitIndex, subHabitIndex)}
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskManager;
