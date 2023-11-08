// import { useState } from "react";
// import SubHabit from "./SubHabit";
// import { FaEdit, FaTrash } from "react-icons/fa";
// import axios from "axios";

// function TaskManager() {
//   const [habits, setHabits] = useState([]);
//   const [newHabit, setNewHabit] = useState("");
//   const [editingHabitIndex, setEditingHabitIndex] = useState(null);
//   const [editedHabitName, setEditedHabitName] = useState("");
//   const [newSubHabit, setNewSubHabit] = useState("");
//   const [newSubHabitStartTime, setNewSubHabitStartTime] = useState(0);
//   const [newSubHabitInterval, setNewSubHabitInterval] = useState(3600);
//   // const [id, setId] = useState([]);

//   const addHabit = () => {
//     if (newHabit) {
//       setHabits([...habits, { name: newHabit, subHabits: [] }]);
//       setNewHabit("");
//     }
//   };
//   // const [formData, setFormData] = useState({
//   //   habitId: "",
//   //   description: "",
//   // });

//   // const addHabit = () => {
//   //   if (formData) {
//   //     axios
//   //       .post("http://localhost:8080/habit/create", formData)
//   //       .then((response) => {
//   //         // Assuming the API response contains the created habit object
//   //         console.log(response.data);
//   //         setHabits([...habits, response.data.description]);
//   //         setNewHabit("");
//   //         setId(response.data.id);
//   //         setFormData({
//   //           ...formData,
//   //           habitId: response.data.id,
//   //         });
//   //       })
//   //       .catch((error) => {
//   //         console.error("Error creating habit:", error);
//   //       });
//   //   }
//   // };

//   // const handleChange = (e) => {
//   //   const { name, value } = e.target;
//   //   setFormData({
//   //     ...formData,
//   //     [name]: value,
//   //   });
//   // };

//   const editHabit = (habitIndex, newName) => {
//     habits[habitIndex].name = newName;
//     setEditingHabitIndex(null);
//   };

//   const deleteHabit = (habitIndex) => {
//     const updatedHabits = [...habits];
//     updatedHabits.splice(habitIndex, 1);
//     setHabits(updatedHabits);
//   };

//   const addSubHabit = (habitIndex) => {
//     const updatedHabits = [...habits];
//     const subHabit = {
//       name: newSubHabit,
//       timers: [
//         {
//           label: newSubHabit,
//           interval: newSubHabitInterval,
//           startTime: newSubHabitStartTime,
//         },
//       ],
//     };
//     setFormData({ description: newHabit });
//     updatedHabits[habitIndex].subHabits.push(subHabit);
//     setHabits(updatedHabits);
//     setNewSubHabit("");
//     setNewSubHabitStartTime(0);
//   };

//   return (
//     <div className="bg-blue-300 min-h-screen p-4">
//       <nav className="p-4 mb-6 flex items-center justify-center ">
//         <h1 className="text-4xl text-white font-roboto animate-pulse py-6 hover:text-yellow-300">
//           "CULTIVATE GOOD HABITS"
//         </h1>
//       </nav>
//       <div className="p-4 bg-white rounded-lg shadow-md">
//         <h2 className="text-xl font-semibold mb-4">Enter your Habit</h2>
//         <div className="flex mb-4">
//           <input
//             type="text"
//             className="border border-gray-300 rounded-lg py-2 px-4 mr-2"
//             placeholder="Habit Name"
//             value={newHabit}
//             name={newHabit}
//             onChange={(e) => setNewHabit(e.target.value)}
//             // name="description"
//             // onChange={handleChange}
//           />
//           <button
//             className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-2 px-4 hover:scale-105 focus:outline-none"
//             onClick={addHabit}
//           >
//             Add Habit
//           </button>
//         </div>
//         {habits.map((habit, habitIndex) => (
//           <div
//             key={habitIndex}
//             className="habit-item bg-blue-100 p-4 rounded-lg mb-4"
//           >
//             {/* <h1>id:{id}</h1> */}
//             <div className="flex items-center justify-between mb-2">
//               <span className="text-xl font-semibold">{habit}</span>
//               <div className="flex gap-4">
//                 <FaEdit
//                   onClick={() => setEditingHabitIndex(habitIndex)}
//                   className="edit-icon cursor-pointer"
//                 />
//                 <FaTrash
//                   onClick={() => deleteHabit(habitIndex)}
//                   className="delete-icon cursor-pointer"
//                 />
//               </div>
//             </div>
//             {editingHabitIndex === habitIndex ? (
//               <div className="edit-habit-input">
//                 <input
//                   type="text"
//                   className="border border-gray-300 rounded-lg py-2 px-4 mt-2"
//                   value={editedHabitName}
//                   onChange={(e) => setEditedHabitName(e.target.value)}
//                 />
//                 <button
//                   className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-2 px-4 mt-2 hover:scale-105 focus:outline-none"
//                   onClick={() => editHabit(habitIndex, editedHabitName)}
//                 >
//                   Save
//                 </button>
//               </div>
//             ) : (
//               <div className="sub-habit-section mt-2">
//                 <input
//                   type="text"
//                   placeholder="Name"
//                   className="border border-gray-300 rounded-lg py-2 px-4"
//                   value={newSubHabit}
//                   name={newSubHabit}
//                   onChange={(e) => setNewSubHabit(e.target.value)}
//                 />
//                 <input
//                   type="text"
//                   placeholder="Start Time"
//                   className="border border-gray-300 rounded-lg py-2 ml-2 px-4 mt-2"
//                   value={newSubHabitStartTime}
//                   onChange={(e) => setNewSubHabitStartTime(e.target.value)}
//                 />
//                 <input
//                   type="number"
//                   placeholder="Time Interval (seconds)"
//                   className="border border-gray-300 rounded-lg ml-2 py-2 px-4 mt-2"
//                   value={newSubHabitInterval}
//                   onChange={(e) => setNewSubHabitInterval(e.target.value)}
//                 />
//                 <button
//                   className="bg-blue-500 hover:bg-blue-600 ml-2 text-white rounded-lg py-2 px-4 mt-2 hover:scale-105 focus:outline-none"
//                   onClick={() => addSubHabit(habitIndex)}
//                 >
//                   Add Timer
//                 </button>
//                 <h1>COMPLETED REMINDERS</h1>

//                 {habit.subHabits &&
//                   habit.subHabits.map((subHabit, subHabitIndex) => (
//                     <SubHabit
//                       key={subHabitIndex}
//                       name={subHabit.name}
//                       timers={subHabit.timers}
//                     />
//                   ))}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default TaskManager;

// // import { useState } from "react";
// // import SubHabit from "./SubHabit";
// // import { FaEdit, FaTrash } from "react-icons/fa";
// // import axios from "axios";

// // function TaskManager() {
// //   const [habits, setHabits] = useState([]);
// //   const [newHabit, setNewHabit] = useState("");
// //   const [editingHabitIndex, setEditingHabitIndex] = useState(null);
// //   const [editedHabitName, setEditedHabitName] = useState("");
// //   const [newSubHabit, setNewSubHabit] = useState("");
// //   const [newSubHabitStartTime, setNewSubHabitStartTime] = useState(0);
// //   const [newSubHabitInterval, setNewSubHabitInterval] = useState(3600);
// //   const [id, setId] = useState("");

// //   const addHabit = () => {
// //     if (newHabit) {
// //       axios
// //         .post("http://localhost:8080/habit/create", { description: newHabit })
// //         .then((response) => {
// //           setHabits([...habits, response.data.description]);
// //           setNewHabit("");
// //           setId(response.data.id);
// //         })
// //         .catch((error) => {
// //           console.error("Error creating habit:", error);
// //         });
// //     }
// //   };

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setNewHabit(value);
// //   };

// //   const editHabit = (habitIndex, newName) => {
// //     habits[habitIndex] = newName;
// //     setEditingHabitIndex(null);
// //   };

// //   const deleteHabit = (habitIndex) => {
// //     const updatedHabits = [...habits];
// //     updatedHabits.splice(habitIndex, 1);
// //     setHabits(updatedHabits);
// //   };

// //   const addSubHabit = (habitIndex) => {
// //     const updatedHabits = [...habits];
// //     const subHabit = {
// //       name: newSubHabit,
// //       timers: [
// //         {
// //           label: newSubHabit,
// //           interval: newSubHabitInterval,
// //           startTime: newSubHabitStartTime,
// //         },
// //       ],
// //     };
// //     updatedHabits[habitIndex].subHabits.push(subHabit);
// //     setHabits(updatedHabits);
// //     setNewSubHabit("");
// //     setNewSubHabitStartTime(0);

// //     axios
// //       .post("http://localhost:8080/timer", {
// //         habitId: id, // Adjust based on your habit ID handling
// //         subHabit: subHabit,
// //       })
// //       .then((response) => {
// //         console.log("Timer added successfully", response.data);
// //       })
// //       .catch((error) => {
// //         console.error("Error adding timer:", error);
// //       });
// //   };

// //   return (
// //     <div className="bg-blue-300 min-h-screen p-4">
// //       <nav className="p-4 mb-6 flex items-center justify-center ">
// //         <h1 className="text-4xl text-white font-roboto animate-pulse py-6 hover:text-yellow-300">
// //           "CULTIVATE GOOD HABITS"
// //         </h1>
// //       </nav>
// //       <div className="p-4 bg-white rounded-lg shadow-md">
// //         <h2 className="text-xl font-semibold mb-4">Enter your Habit</h2>
// //         <div className="flex mb-4">
// //           <input
// //             type="text"
// //             className="border border-gray-300 rounded-lg py-2 px-4 mr-2"
// //             placeholder="Habit Name"
// //             value={newHabit}
// //             name="description"
// //             onChange={handleChange}
// //           />
// //           <button
// //             className="bg-blue-500 hover-bg-blue-600 text-white rounded-lg py-2 px-4 hover:scale-105 focus:outline-none"
// //             onClick={addHabit}
// //           >
// //             Add Habit
// //           </button>
// //         </div>
// //         {habits.map((habit, habitIndex) => (
// //           <div
// //             key={habitIndex}
// //             className="habit-item bg-blue-100 p-4 rounded-lg mb-4"
// //           >
// //             <div className="flex items-center justify-between mb-2">
// //               <span className="text-xl font-semibold">{habit}</span>
// //               <div className="flex gap-4">
// //                 <FaEdit
// //                   onClick={() => setEditingHabitIndex(habitIndex)}
// //                   className="edit-icon cursor-pointer"
// //                 />
// //                 <FaTrash
// //                   onClick={() => deleteHabit(habitIndex)}
// //                   className="delete-icon cursor-pointer"
// //                 />
// //               </div>
// //             </div>
// //             {editingHabitIndex === habitIndex ? (
// //               <div className="edit-habit-input">
// //                 <input
// //                   type="text"
// //                   className="border border-gray-300 rounded-lg py-2 px-4 mt-2"
// //                   value={editedHabitName}
// //                   onChange={(e) => setEditedHabitName(e.target.value)}
// //                 />
// //                 <button
// //                   className="bg-blue-500 hover-bg-blue-600 text-white rounded-lg py-2 px-4 mt-2 hover:scale-105 focus:outline-none"
// //                   onClick={() => editHabit(habitIndex, editedHabitName)}
// //                 >
// //                   Save
// //                 </button>
// //               </div>
// //             ) : (
// //               <div className="sub-habit-section mt-2">
// //                 <input
// //                   type="text"
// //                   placeholder="Name"
// //                   className="border border-gray-300 rounded-lg py-2 px-4"
// //                   value={newSubHabit}
// //                   name="newSubHabit"
// //                   onChange={(e) => setNewSubHabit(e.target.value)}
// //                 />
// //                 <input
// //                   type="text"
// //                   placeholder="Start Time"
// //                   className="border border-gray-300 rounded-lg py-2 ml-2 px-4 mt-2"
// //                   value={newSubHabitStartTime}
// //                   onChange={(e) => setNewSubHabitStartTime(e.target.value)}
// //                 />
// //                 <input
// //                   type="number"
// //                   placeholder="Time Interval (seconds)"
// //                   className="border border-gray-300 rounded-lg ml-2 py-2 px-4 mt-2"
// //                   value={newSubHabitInterval}
// //                   onChange={(e) => setNewSubHabitInterval(e.target.value)}
// //                 />
// //                 <button
// //                   className="bg-blue-500 hover-bg-blue-600 ml-2 text-white rounded-lg py-2 px-4 mt-2 hover:scale-105 focus:outline-none"
// //                   onClick={() => addSubHabit(habitIndex)}
// //                 >
// //                   Add Timer
// //                 </button>
// //                 <h1>COMPLETED REMINDERS</h1>

// //                 {habit.subHabits &&
// //                   habit.subHabits.map((subHabit, subHabitIndex) => (
// //                     <SubHabit
// //                       key={subHabitIndex}
// //                       name={subHabit.name}
// //                       timers={subHabit.timers}
// //                     />
// //                   ))}
// //               </div>
// //             )}
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }
// // export default TaskManager;

import { useState, useEffect } from "react";
import SubHabit from "./SubHabit";
import { FaEdit, FaTrash } from "react-icons/fa";
import axios from "axios";

function TaskManager() {
  const [habits, setHabits] = useState([]);
  const [newHabit, setNewHabit] = useState("");
  const [editingHabitIndex, setEditingHabitIndex] = useState(null);
  const [editedHabitName, setEditedHabitName] = useState("");
  const [newSubHabit, setNewSubHabit] = useState("");
  const [newSubHabitStartTime, setNewSubHabitStartTime] = useState(0);
  const [newSubHabitInterval, setNewSubHabitInterval] = useState(3600);
  const [completedTasks, setCompletedTasks] = useState([]);

  const [idd, setIdd] = useState(null);
  const [time, setTime] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:8080/habit/view");
      console.log(response.data);
      setHabits(response.data);
    };
    fetchData();
  }, [newHabit]);

  console.log(habits, "habits");

  const addHabit = async () => {
    if (newHabit) {
      const newHabitData = { name: newHabit, subHabits: [] };
      setHabits([...habits, { name: newHabit, subHabits: [] }, newHabitData]);
      setNewHabit("");

      try {
        const response = await axios.post(
          "http://localhost:8080/habit/create",
          {
            description: newHabit,
          }
        );
        setIdd(response.data.habitId);
        console.log(response.data.habitId, "hi"); // Optionally log the response data
        console.log(response.data, "hi"); // Optionally log the response data
      } catch (error) {
        console.error("Error creating habit:", error);
      }
    }
  };

  // const addHabit = () => {
  //   setHabits([...habits, { name: newHabit, subHabits: [] }]);
  //   setNewHabit("");
  // };

  const editHabit = (habitIndex, newName) => {
    habits[habitIndex].name = newName;
    setEditingHabitIndex(null);
  };

  const deleteHabit = (habitIndex) => {
    const updatedHabits = [...habits];
    updatedHabits.splice(habitIndex, 1);
    setHabits(updatedHabits);
  };

  const addSubHabit = async (habitIndex) => {
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
    console.log(idd, "bro");
    console.log(newSubHabit, newSubHabitInterval, newSubHabitStartTime);
    try {
      const postResponse = await axios.post(
        `http://localhost:8080/timer/${idd}/timers`,
        {
          name: newSubHabit,
          interval: parseInt(newSubHabitInterval),
          startTime: newSubHabitStartTime,
        }
      );

      console.log("POST response:", postResponse);

      //     // const updatedHabits = [...habits];
      //     // setHabits(updatedHabits);
      //     // setNewSubHabit("");
      //     // setNewSubHabitStartTime(0);
      fetchSubHabits(postResponse.data.id);
    } catch (error) {
      console.error("Error adding sub-habit:", error);
    }
  };

  const fetchSubHabits = async (id) => {
    try {
      const getResponse = await axios.get(
        `http://localhost:8080/timer/${idd}/viewTimer/${id}`
      );
      console.log("GET response:", getResponse);
      setTime(getResponse);
    } catch (error) {
      console.error("Error fetching sub-habits:", error);
    }
  };

  // const addSubHabit = (habitIndex) => {
  //   const updatedHabits = [...habits];
  //   const subHabit = {
  //     name: newSubHabit,
  //     timers: [
  //       {
  //         label: newSubHabit,
  //         interval: newSubHabitInterval,
  //         startTime: newSubHabitStartTime,
  //       },
  //     ],
  //   };
  //   updatedHabits[habitIndex].subHabits.push(subHabit);
  //   setHabits(updatedHabits);
  //   setNewSubHabit("");
  //   setNewSubHabitStartTime(0);
  // };

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
              <div className="flex gap-2">
                <span className="text-xl font-semibold">{habit.habitId}</span>
                <span className="text-xl font-semibold">
                  {habit.description}
                </span>
              </div>
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
                  // value={newSubHabit}
                  onChange={(e) => setNewSubHabit(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Start Time"
                  className="border border-gray-300 rounded-lg py-2 ml-2 px-4 mt-2"
                  onChange={(e) => setNewSubHabitStartTime(e.target.value)}
                  // value={newSubHabitStartTime}
                />
                <input
                  type="number"
                  placeholder="Time Interval (seconds)"
                  className="border border-gray-300 rounded-lg ml-2 py-2 px-4 mt-2"
                  onChange={(e) => setNewSubHabitInterval(e.target.value)}
                  // value={newSubHabitInterval}
                />
                <button
                  className="bg-blue-500 hover:bg-blue-600 ml-2 text-white rounded-lg py-2 px-4 mt-2 hover:scale-105 focus:outline-none"
                  onClick={() => addSubHabit(habit?.habitId)}
                >
                  Add Timer
                </button>
                <h1>COMPLETED REMINDERS</h1>
                {habit?.subHabits?.map((subHabit, subHabitIndex) => (
                  <SubHabit
                    name={time?.name}
                    timers={time.timers}
                    startTime={time?.startTime}
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
