import React from "react";
import Button from "../Button/Button";

const Home = () => {
  return (
    <div className=" flex flex-col justify-center items-center md:flex-row px-10 text-center mt-20 gap-5 mb-5 md:ml-[-50px]">
      <div className=" text-white flex flex-col md:justify-start md:flex md:text-start md:items-start md:mt-3 md:px-20 md:mb-20 justify-center items-center gap-2 md:gap-5">
        <div>
          <h2 className=" font-krona text-xl opacity-90 md:text-3xl">
            CRETIVE ROBOTICS
          </h2>
        </div>
        <div>
          <h1 className=" font-krona text-5xl  md:text-7xl mt-2 md:mt-0">
            UOK ROBOT BATTLES <br />
            2k24
          </h1>
        </div>
        {/* <div>
                <h1 className=' font-krona text-4xl'>2k24</h1>
            </div> */}
        <div>
          <p className=" font-krona text-lg leading-normal opacity-80 mt-5 md:mt-0">
            Welcome to the ultimate showdown of engineering prowess and
            strategy. Here, brilliant minds converge to pit their robotic
            creations against one another in a thrilling display of
            technological might. Join us in the arena where the future of
            robotics comes alive.
          </p>
        </div>
        <div className="mt-5">
          <Button
            text={"Register"}
            url={
              "https://docs.google.com/forms/d/1aW2N9A0GmMuo4zoIm7gCOGZIWwO4zoyA-lY4JXlxypQ/viewform?edit_requested=true"
            }
          />
        </div>
      </div>
      <div className=" ">
        <img
          className="   hidden md:block md:w-[2400px] md:h-[550px] md:-mt-10 md:min-w-max "
          src="/robo-new-home.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
