import React, { useState } from "react";
import SubHabit from "./SubHabit";
import { FaEdit, FaTrash } from "react-icons/fa";

function TaskManager() {
  const [habits, setHabits] = useState([]);
  const [newHabit, setNewHabit] = useState("");
  const [editingHabitIndex, setEditingHabitIndex] = useState(null);
  const [editedHabitName, setEditedHabitName] = useState("");
  const [newSubHabit, setNewSubHabit] = useState("");
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
    updatedHabits[habitIndex].subHabits.push({ name: newSubHabit, timers: [] });
    setHabits(updatedHabits);
    setNewSubHabit("");
  };

  const deleteSubHabit = (habitIndex, subHabitIndex) => {
    const updatedHabits = [...habits];
    updatedHabits[habitIndex].subHabits.splice(subHabitIndex, 1);
    setHabits(updatedHabits);
  };

  const completeTask = (taskLabel) => {
    setCompletedTasks([...completedTasks, taskLabel]);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Habit Reminder</h2>
      <div>
        <input
          type="text"
          placeholder="Habit Name"
          value={newHabit}
          onChange={(e) => setNewHabit(e.target.value)}
        />
        <button onClick={addHabit}>Add Habit</button>
      </div>
      {habits.map((habit, habitIndex) => (
        <div key={habitIndex} className="habit-item">
          <span>{habit.name}</span>
          <FaEdit
            onClick={() => setEditingHabitIndex(habitIndex)}
            className="edit-icon"
          />
          <FaTrash
            onClick={() => deleteHabit(habitIndex)}
            className="delete-icon"
          />
          {editingHabitIndex === habitIndex ? (
            <div className="edit-habit-input">
              <input
                type="text"
                value={editedHabitName}
                onChange={(e) => setEditedHabitName(e.target.value)}
              />
              <button onClick={() => editHabit(habitIndex, editedHabitName)}>
                Save
              </button>
            </div>
          ) : (
            <div className="sub-habit-section">
              <input
                type="text"
                placeholder=""
                value={newSubHabit}
                onChange={(e) => setNewSubHabit(e.target.value)}
              />
              <button onClick={() => addSubHabit(habitIndex)}>Add Timer</button>
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
      {/* {completedTasks.map((taskLabel, index) => (
        <div key={index}>{taskLabel}</div>
      ))} */}
    </div>
  );
}

export default TaskManager;
