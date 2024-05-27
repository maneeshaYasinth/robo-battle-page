import React from "react";
import Countdown from "./components/countdown";
import Timeline from "./components/timeline";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Registration from "./components/Registration/Registration";
import Awareness from "./components/AwarenessSession/Awareness";
import ShinyEffect from "./components/ShinyEffect/ShinyEffect";
import Team from "./components/ContactUs/Contact";
import Footer from "./components/Footer/Footer";
import WininngPrices from "./components/WinningPrices/WininngPrices";
import About from "./components/AboutUs/About";

const App = () => {
  return (
    <div className="min-h-screen relative overflow-hidden"> {/* Ensure relative positioning and no overflow */}
      <Navbar />
{/* pink shine effect */}
      {/* <div className="absolute inset-0">
        <ShinyEffect left={1000} top={0} size={1000} />
        <div className="hidden md:block">
          <ShinyEffect left={0} top={700} size={1200} />
        </div>
      </div> */}
      <Home />
      <Countdown />
      <Registration />
      
      <Awareness />
      <About/>
      <WininngPrices />
      <Timeline />
      <Team />
      {/* <Footer/> */}
    </div>
  );
};

export default App;
