import React from "react";


const Registration = () => {
  return (
    <div className="px-20 p-5 max-w-screen h-full w-f  min-h-screen py-10">
      <h1
        className=" text-white font-krona text-2xl md:text-3xl
      "
      >
        Registration
      </h1>
      <div className="flex flex-col justify-center items-center gap-8 md:justify-between md:gap-10 md:flex-row py-5 mt-5">
      <div className="">
          <img
            
            src="/robo.png"
            alt="robot photo"
          />
        </div>
       <div>
       <p className=" text-white font-poppins text-justify-end opacity-90 text-sm space-y-4 text-left mt-10 font-normal leading-relaxed  md:text-xl md:ml-[300px]">
          Be a part of the UOK Robot Battles 2k24! This thrilling event is your
          chance to immerse yourself in the exciting world of robotics. Witness
          cutting-edge technology in action and compete with fellow enthusiasts
          in a battle of innovation and skill. Don't miss out on this
          extraordinary opportunity to be a part of something truly remarkable.
          Register here before June 4 to secure your spot in the action!
        </p>
        <div>
        <div className=" flex flex-col j justify-between mt-10 md:flex-row  md:gap-20 md:mr-[200px] md:justify-end gap-5">
          <a href="#">
            <button className=" bg-gradient-to-r from-pink-500 border-pink-400 border-2 to-fuchsia-800 text-lg text-white font-poppins px-4 py-2 rounded-full">
              Register Now
            </button>
          </a>
          <a href="#">
            <button className=" bg-gradient-to-r from-pink-500 border-pink-400 border-2 to-fuchsia-800 text-lg text-white font-poppins px-4 py-2 rounded-full">
              Robot Design Rules
              <a href="#"></a>
            </button>
          </a>
        </div>
      </div>
       </div>
      </div>
     
    </div>
  );
};

export default Registration;
