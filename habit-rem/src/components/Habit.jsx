import React, { useState } from "react";
import SubHabit from "./SubHabit";

function Habit({ name, subHabits, onEdit, onDelete, habitIndex }) {
  const [newSubHabit, setNewSubHabit] = useState("");

  const addSubHabit = () => {
    subHabits.push({
      name: newSubHabit,
      timers: [],
    });
    setNewSubHabit("");
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md mb-4">
      <h2 className="text-lg font-semibold mb-2">{name}</h2>

      <button
        className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
        onClick={() => onEdit(habitIndex)}
      >
        Edit Habit
      </button>
      <button
        className="bg-red-500 text-white px-3 py-1 rounded"
        onClick={() => onDelete(habitIndex)}
      >
        Delete Habit
      </button>

      <div>
        <input
          className="border border-gray-300 rounded px-3 py-2"
          type="text"
          placeholder=""
          value={newSubHabit}
          onChange={(e) => setNewSubHabit(e.target.value)}
        />
        <button onClick={addSubHabit}>Add Timer</button>
      </div>
      {/* {subHabits.map((subHabit, index) => (
        <SubHabit key={index} name={subHabit.name} timers={subHabit.timers} />
      ))} */}
    </div>
  );
}
export default Habit;
