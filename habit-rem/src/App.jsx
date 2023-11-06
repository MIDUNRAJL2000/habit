// // import React from "react";

// // import Timer from "./components/Timer";
// // import TimerManager from "./components/TimerManager";
// // import TaskManager from "./components/TaskManager";

// // function App() {
// //   return (
// //     <div className="bg-blue-300 min-h-screen ">
// //       <nav className="bg-gradient-to-r from-green-400 to-blue-500 p-4 mb-6 shadow-lg h-36">
// //         <h1 className="text-3xl font-bold  text-yellow-500 underline py-6">
// //           HABIT REMINDER APP
// //         </h1>
// //       </nav>
// //       <div className="mx-72 mt-16 w-[800px]">
// //         <div className="p-8 bg-white rounded-lg shadow-lg">
// //           <TaskManager />
// //           {/* <Timer /> */}
// //           {/* <TimerManager /> */}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default App;

import React from "react";
import TaskManager from "./components/TaskManager";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    // <div className="bg-blue-300 min-h-screen">
    //   <nav className="bg-gradient-to-r from-green-400 to-blue-500 p-4 mb-6 shadow-lg h-36">
    //     <h1 className="text-3xl font-bold text-yellow-500 underline py-6">
    //       HABIT REMINDER APP
    //     </h1>
    //   </nav>
    //   <div className="mx-72 mt-16 w-[800px]">
    //     <div className="p-8 bg-white rounded-lg shadow-lg">
    //       <TaskManager />
    //     </div>
    //   </div>
    // </div>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="task-manager" element={<TaskManager />} />
      </Routes>
    </Router>
  );
}

export default App;

// import React, { useState, useef } from "react";
// import HomePage from "./components/HomePage";
// import App from "./App"; // Assuming your App component is in "App.js"
// import { useEffect } from "react";
// import TaskManager from "./components/TaskManager";

// function AppContainer() {
//   const [showHomePage, setShowHomePage] = useState(true);

//   useEffect(() => {
//     console.log("hi");
//   }, [showHomePage]);

//   const startHabitReminderApp = () => {
//     setShowHomePage(false);
//   };

//   return (
//     <div className="bg-blue-300 ">
//       {showHomePage ? (
//         <div>
//           <button onClick={startHabitReminderApp}>Start</button>

//           <HomePage onStartClick={startHabitReminderApp} />
//         </div>
//       ) : (
//         <div>
//           <div className="bg-blue-300 min-h-screen">
//        <nav className="bg-gradient-to-r from-green-400 to-blue-500 p-4 mb-6 shadow-lg h-36">
//         <h1 className="text-3xl font-bold text-yellow-500 underline py-6">
//           HABIT REMINDER APP
//         </h1>
//       </nav>
//           <TaskManager></TaskManager>
//         </div>
//     </div>
//       )
//       </div>

//   )};

// export default AppContainer;
