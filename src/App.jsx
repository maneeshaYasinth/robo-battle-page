import React from "react";
import Countdown from "./components/countdown";
import Timeline from "./components/timeline";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";

import Registration from "./components/Registration/Registration";
import Awareness from "./components/AwarenessSession/Awareness";
import ShinyEffect from "./components/ShinyEffect/ShinyEffect";

const App = () => {
  return (
    <div className="min-h-screen ">
      <Navbar />
      
      <div>
      <ShinyEffect left={700} top={0} size={800} />
      </div>
      <Home />
      <div>
      <ShinyEffect left={0} top={700} size={900} />
      </div>
      <Registration />

      <Countdown />
      <Awareness/>
      <Timeline />
    </div>
  );
};

export default App;
