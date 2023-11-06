// import React from "react";
// import { Link } from "react-router-dom";

// function HomePage() {
//   return (
//     <div className="bg-gradient-to-br from-indigo-500 to-teal-500 h-screen flex flex-col items-center justify-center text-center">
//       <h1 className="text-4xl text-white mb-8 font-roboto animate-pulse">
//         HABIT REMINDER APP
//       </h1>
//       <Link to="/task-manager">
//         <button className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded transition-transform transform hover:scale-105 focus:outline-none">
//           Get Started
//         </button>
//       </Link>
//     </div>
//   );
// }

// export default HomePage;

import React from "react";
import { Link } from "react-router-dom";
import { FaLeaf } from "react-icons/fa"; // Replace with your desired icon

function HomePage() {
  return (
    <div className="bg-gradient-to-br from-indigo-500 to-teal-500 h-screen flex flex-col items-center justify-center text-center">
      <div className="mb-8 flex items-center">
        <FaLeaf className="text-4xl text-white mr-4" />{" "}
        {/* Replace with your desired icon */}
        <h1 className="text-4xl text-white font-roboto animate-pulse">
          HABIT REMINDER APP
        </h1>
      </div>
      <Link to="/task-manager">
        <button className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded transition-transform transform hover:scale-105 focus:outline-none">
          Get Started
        </button>
      </Link>
    </div>
  );
}

export default HomePage;
