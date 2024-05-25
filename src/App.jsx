import React from "react";
import Countdown from "./components/countdown";
import Timeline from "./components/timeline"
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Button from "./components/Button/Button";
import Registration from "./components/Registration/Registration";

const App = () => {
  return (
    <div className="min-h-screen bg-purple-800">
      <Navbar />
      <Home/>
    <Registration/>
      <Button/>
      <Countdown />
      <Timeline />
    </div>
  );
};

export default App;
