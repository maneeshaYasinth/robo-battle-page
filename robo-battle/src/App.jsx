import React from "react";
import Countdown from "./components/countdown";
import Timeline from "./components/timeline"

const App = () => {
  return (
    <div className="bg-purple-800 min-h-screen">
      <Countdown />
      <Timeline />
    </div>
  );
};

export default App;
