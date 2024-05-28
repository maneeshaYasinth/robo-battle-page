import React from "react";
import Button from "../Button/Button";

const Registration = () => {
  return (
    <div className="md:px-20 px-10 p-5 max-w-screen h-full w-f  min-h-screen py-10 mt-20 md:mt-40 lg:mt-40">
      <h1
        className=" text-white font-krona text-3xl md:text-4xl text-center md:text-start 
      "
      >
        Registration
      </h1>
      <div className="flex flex-col justify-center items-center gap-8 md:justify-between md:gap-10 md:flex-row py-5 mt-5  content-center text-center">
        <div className=" text-center flex justify-center items-center w-[300px] shadow-2xl shadow-pink-500 rounded-lg md:hidden">
          <img src="/robo front.png" alt="robot photo" />
        </div>
        <div className=" md:text-start  md:flex-col md:justify-start md:items-start">
          <p className=" text-white font-poppins text-justify-end opacity-90 text-xl md:text-start  space-y-4  mt-10 font-normal leading-normal md:text-xl md:ml-[300px] text-center ">
            Be a part of the UOK Robot Battles 2k24! This thrilling event is
            your chance to immerse yourself in the exciting world of robotics.
            Witness cutting-edge technology in action and compete with fellow
            enthusiasts in a battle of innovation and skill. Don't miss out on
            this extraordinary opportunity to be a part of something truly
            remarkable. Register here before June 4 to secure your
            spot in the action!
          </p>

          <div className=" flex flex-col j justify-between mt-10 md:flex-row  md:gap-20 md:mr-[200px] md:justify-start  gap-5 md:ml-[300px] lg:ml-[300px]">
            {/* <a href="https://docs.google.com/forms/d/1aW2N9A0GmMuo4zoIm7gCOGZIWwO4zoyA-lY4JXlxypQ/viewform?edit_requested=true">
              <button className=" bg-gradient-to-r from-pink-500 border-pink-400 border-2 to-fuchsia-800 text-lg text-white font-poppins px-4 py-2 rounded-full cursor-pointer">
                Register Now
              </button>{" "}
            </a> */}

            <div>
              <Button
                text="Register Now"
                url="https://docs.google.com/forms/d/1aW2N9A0GmMuo4zoIm7gCOGZIWwO4zoyA-lY4JXlxypQ/viewform?edit_requested=true"
              />
            </div>
            <div>
              <Button text="Go to Google" url="https://www.google.com" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
