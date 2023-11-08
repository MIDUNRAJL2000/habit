import React from "react";
import TaskManager from "./components/TaskManager";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="task-manager" element={<TaskManager />} />
      </Routes>
    </Router>
  );
}
export default App;
