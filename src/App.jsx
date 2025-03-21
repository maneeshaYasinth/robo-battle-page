import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
import RegisterForm from "./components/RegisterForm/RegisterForm";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen relative overflow-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <div >
              <section id="home" className="pt-5"><Home /></section>
              <Countdown />
              <section id="register"><Registration /></section>
              <Awareness />
              <section id="about"><About /></section>
              <WininngPrices />
              <section id="timeline"><Timeline /></section>
              <section id="contact"><Team /></section>
              <section id="footer"><Footer /></section>
            </div>} />

          <Route path="/register" element={<RegisterForm />} />
        </Routes>
      </div>
    </Router>

  );
};

export default App;
