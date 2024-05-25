import React from "react";
import Countdown from "./components/countdown";
import Timeline from "./components/timeline"
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Button from "./components/Button/Button";

const App = () => {
  return (
    <div className="min-h-screen bg-purple-800">
      <Navbar />
      <Home/>
      <Button/>
      <Countdown />
      <Timeline />
    </div>
  );
};

export default App;
