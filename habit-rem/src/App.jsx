import React from "react";

import Timer from "./components/Timer";
import TimerManager from "./components/TimerManager";
import TaskManager from "./components/TaskManager";

function App() {
  return (
    <div className="bg-blue-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center mb-6 underline">
        HABIT REMINDER APP
      </h1>
      <div className=" mx-72 mt-16 w-[800px]">
        <div className="p-8 bg-white rounded-lg shadow-lg">
          <TaskManager />
          {/* <Timer />
      <TimerManager /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
