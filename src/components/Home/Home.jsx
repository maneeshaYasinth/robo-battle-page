import React from "react";
import Navbar from "../Navbar/Navbar";
import Button from "../Button/Button";

function Home() {
  return (
    <>
      <div className="md:flex md:flex:row md:justify-center lg:mt-[-50px] md:gap-10 lg:gap-10">
        <div className="flex-col justify-center text-center item-center lg:flex lg:flex-col lg:justify-start lg:items-start lg:text-start lg:ml-[-700px]">
          <div className="max-w-xl mt-20 ml-10 text-white md:ml-20 md:flex-row">
            <div className="min-[400px]:text-left text-xl leading-normal tracking-widest text-left uppercase max-w-screen font-krona mt-14 mt-30">
              <h1 className="text-xl text-center md:mb-8 md:text-left md:mt-8">
                Creative robotics
              </h1>
            </div>
            <div className="mr-1 text-5xl leading-normal tracking-widest text-center text-white uppercase md:text-left md:text-6xl max-w-screen font-krona ">
              UOK ROBOT BATTLES
            </div>
            <div className="text-4xl leading-normal tracking-widest text-center text-white uppercase md:mb-5 max-w-screen font-krona md:text-left md:text:2xl ">
              2K24
            </div>
            <div className="text-center">
              <p className="leading-normal tracking-widest text-white font-poppins md:text-left px-10 md:px-0 lg:px-0 ">
                Welcome to the ultimate showdown of engineering prowess and
                strategy. Here, brilliant minds converge to pit their robotic
                creations against one another in a thrilling display of
                technological might. Join us in the arena where the future of
                robotics comes alive.
              </p>
            </div>
            {/* <div>
              <button className="inline-block px-12 py-3 ml-3 mr-4 text-center text-white duration-300 border border-transparent sm:justify-items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl font-poppins mt-7 hover:text-white hover:border hover:bg-transparent hover:border-pink-300 ">
                <a href="#">Register</a>
              </button>
            </div>
            <Button/> */}
            <div className="md:mt-10">
              <Button text="Register" url="#" />
            </div>
          </div>
        </div>
        <div className="bottom-0 hidden w-full py-10 top-12 xl:w-1/2 md:absolute md:mr-[-150px] right-1 md:block md:-mt-5 mt-9  ">
          <img
            className="lg:w-[500px] lg:h-[600px]
       "
            src="/robo-new-home.png"
            alt="1"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
