// // import React, { useState, useEffect } from "react";

// // function TaskTimer({
// //   id,
// //   label,
// //   interval,
// //   startTime,
// //   onComplete,
// //   onEdit,
// //   onDelete,
// //   onReset,
// //   isCompleted, // Assuming you have a flag indicating completion status
// // }) {
// //   const [time, setTime] = useState(interval);
// //   const [isPaused, setIsPaused] = useState(false);
// //   const [newLabel, setNewLabel] = useState(label);
// //   const [newInterval, setNewInterval] = useState(interval);
// //   const [isEditing, setIsEditing] = useState(false);

// //   useEffect(() => {
// //     let timer;
// //     if (!isPaused) {
// //       timer = setInterval(() => {
// //         if (time <= 0) {
// //           clearInterval(timer);
// //           onComplete(id);
// //         } else {
// //           setTime((prevTime) => prevTime - 1);
// //         }
// //       }, 1000);
// //     }

// //     return () => {
// //       clearInterval(timer);
// //     };
// //   }, [isPaused, time, interval, id, onComplete, label]);

// //   const pauseResume = () => {
// //     setIsPaused(!isPaused);
// //   };

// //   function formatTime(seconds) {
// //     const hours = Math.floor(seconds / 3600);
// //     const minutes = Math.floor((seconds % 3600) / 60);
// //     const secs = seconds % 60;
// //     return `${hours}h ${minutes}m ${secs}s`;
// //   }

// //   const resetTimer = () => {
// //     setTime(interval);
// //   };

// //   const handleEdit = () => {
// //     setIsEditing(true);
// //   };

// //   const saveEdit = () => {
// //     setIsEditing(false);
// //     // Call the parent component's onEdit function to pass the updated values
// //     onEdit(id, newLabel, newInterval);
// //   };

// //   const handleDelete = () => {
// //     // Call the parent component's onDelete function to delete the reminder
// //     onDelete(id);
// //   };

// //   return (
// //     <div className="p-4 bg-white rounded-lg shadow-md mb-4">
// //       <h3 className="text-lg font-semibold mb-2">
// //         {isEditing ? (
// //           <input
// //             type="text"
// //             className="border border-gray-300 rounded px-3 py-2"
// //             value={newLabel}
// //             onChange={(e) => setNewLabel(e.target.value)}
// //           />
// //         ) : (
// //           label
// //         )}
// //       </h3>
// //       <p>Start Time: {startTime}</p>
// //       <p>Time: {formatTime(time)}</p>
// //       {isCompleted ? (
// //         <button onClick={handleDelete}>Delete</button>
// //       ) : (
// //         <>
// //           <button onClick={isEditing ? saveEdit : handleEdit}>
// //             {isEditing ? "Save" : "Edit"}
// //           </button>
// //           <button onClick={resetTimer}>Reset</button>
// //           <button onClick={pauseResume}>{isPaused ? "Resume" : "Pause"}</button>
// //         </>
// //       )}
// //     </div>
// //   );
// // }

// // export default TaskTimer;

// import React, { useState, useEffect } from "react";

// function TaskTimer({
//   id,
//   label,
//   interval,
//   startTime,
//   onComplete,
//   onEdit,
//   onDelete,
//   onReset,
//   isCompleted,
// }) {
//   const [time, setTime] = useState(interval);
//   const [isPaused, setIsPaused] = useState(false);
//   const [newLabel, setNewLabel] = useState(label);
//   const [newInterval, setNewInterval] = useState(interval);
//   const [isEditing, setIsEditing] = useState(false);

//   useEffect(() => {
//     let timer;
//     if (!isPaused) {
//       timer = setInterval(() => {
//         if (time <= 0) {
//           clearInterval(timer);
//           onComplete(id);
//         } else {
//           setTime((prevTime) => prevTime - 1);
//         }
//       }, 1000);
//     }

//     return () => {
//       clearInterval(timer);
//     };
//   }, [isPaused, time, interval, id, onComplete, label]);

//   const pauseResume = () => {
//     setIsPaused(!isPaused);
//   };

//   function formatTime(seconds) {
//     const hours = Math.floor(seconds / 3600);
//     const minutes = Math.floor((seconds % 3600) / 60);
//     const secs = seconds % 60;
//     return `${hours}h ${minutes}m ${secs}s`;
//   }

//   const resetTimer = () => {
//     setTime(interval);
//   };

//   const handleEdit = () => {
//     setIsEditing(true);
//   };

//   const saveEdit = () => {
//     setIsEditing(false);
//     // Call the parent component's onEdit function to pass the updated values
//     onEdit(id, newLabel, newInterval);
//   };

//   const handleDelete = () => {
//     // Call the parent component's onDelete function to delete the timer
//     onDelete(id);
//   };

//   return (
//     <div className="p-4 bg-white rounded-lg shadow-md mb-4">
//       <h3 className="text-lg font-semibold mb-2">
//         {isEditing ? (
//           <input
//             type="text"
//             className="border border-gray-300 rounded px-3 py-2"
//             value={newLabel}
//             onChange={(e) => setNewLabel(e.target.value)}
//           />
//         ) : (
//           label
//         )}
//       </h3>
//       <p>Start Time: {startTime}</p>
//       <p>Time: {formatTime(time)}</p>
//       {isCompleted ? (
//         <button className="border-2 border-black" onClick={handleDelete}>
//           Delete
//         </button>
//       ) : (
//         <>
//           <button onClick={isEditing ? saveEdit : handleEdit}>
//             {isEditing ? "Save" : "Edit"}
//           </button>
//           <button onClick={resetTimer}>Reset</button>
//           <button onClick={pauseResume}>{isPaused ? "Resume" : "Pause"}</button>
//         </>
//       )}
//     </div>
//   );
// }

// export default TaskTimer;

import React, { useState, useEffect } from "react";

function TaskTimer({
  id,
  label,
  interval,
  startTime,
  onComplete,
  onEdit,
  onDelete,
  onReset,
  isCompleted, // Assuming you have a flag indicating completion status
}) {
  const [time, setTime] = useState(interval);
  const [isPaused, setIsPaused] = useState(false);
  const [newLabel, setNewLabel] = useState(label);
  const [newInterval, setNewInterval] = useState(interval);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    let timer;
    if (!isPaused) {
      timer = setInterval(() => {
        if (time <= 0) {
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
  }, [isPaused, time, interval, id, onComplete, label]);

  const pauseResume = () => {
    setIsPaused(!isPaused);
  };

  function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours}h ${minutes}m ${secs}s`;
  }

  const resetTimer = () => {
    setTime(interval);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const saveEdit = () => {
    setIsEditing(false);
    // Call the parent component's onEdit function to pass the updated values
    onEdit(id, newLabel, newInterval);
  };

  const handleDelete = () => {
    // Call the parent component's onDelete function to delete the timer
    onDelete(id);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md mb-4">
      <h3 className="text-lg font-semibold mb-2">
        {isEditing ? (
          <input
            type="text"
            className="border border-gray-300 rounded px-3 py-2"
            value={newLabel}
            onChange={(e) => setNewLabel(e.target.value)}
          />
        ) : (
          label
        )}
      </h3>
      <p>Start Time: {startTime}</p>
      <p>Time: {formatTime(time)}</p>
      {isCompleted ? (
        <button onClick={handleDelete}>Delete</button>
      ) : (
        <>
          <button onClick={isEditing ? saveEdit : handleEdit}>
            {isEditing ? "Save" : "Edit"}
          </button>
          <button onClick={resetTimer}>Reset</button>
          <button onClick={pauseResume}>{isPaused ? "Resume" : "Pause"}</button>
        </>
      )}
    </div>
  );
}

export default TaskTimer;
