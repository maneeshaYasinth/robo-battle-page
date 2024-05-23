import React from "react";
import Countdown from "./components/countdown";
import Timeline from "./components/timeline"
import Navbar from "./components/Navbar/Navbar";


const App = () => {
  return (
    <div className="bg-purple-800 min-h-screen">
      <Navbar />
      <Countdown />
      <Timeline />
    </div>
  );
};

export default App;
