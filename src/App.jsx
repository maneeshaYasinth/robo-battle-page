import React from "react";
import Countdown from "./components/countdown";
import Timeline from "./components/timeline";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";

import Registration from "./components/Registration/Registration";
import Awareness from "./components/AwarenessSession/Awareness";

const App = () => {
  return (
    <div className="min-h-screen ">
      <Navbar />
      <Home />
      <Registration />

      <Countdown />
      <Awareness/>
      <Timeline />
    </div>
  );
};

export default App;
