import React from "react";

const Awareness = () => {
  return (
    <div
      className="px-20 mt-[60px] py-5  md:mt-[-80px] items-center gap-10
    md:text-start
    text-center"
    >
      <h1 className="text-white font-krona text-3xl   md:text-4xl ">
        AWARENES SESSION
      </h1>
      <div className="flex mt-5 flex-col md:flex-row  items-center gap-10 justify-between md:mt-10">
        <div className="flex flex-col gap-10 md:flex md:flex-row md:justify-between ">
          <div className="md:flex md:flex-col gap-8">
            <p className=" text-white font-poppins text-justify-end opacity-90 text-xl space-y-4 md:text-start mt-5 font-normal leading-relaxed  md:text-xl text-center ">
              Tune into this insightful video, where you'll discover
              professional strategies and essential guidelines for excelling in
              robot battle competitions, presented by Dr. Kasun Piyumal. The
              expert advice provided will equip you with the knowledge needed to
              dominate your competition and ensure your robot is battle-ready
              according to the latest rules and standards.
            </p>
            <a href="https://drive.google.com/file/d/12-g5isYXt1Hpny74pIzvhhKUxRroL5XZ/view?usp=drive_link">
              <button className=" bg-gradient-to-r from-pink-500 border-pink-400 border-2 to-fuchsia-800 text-lg text-white font-poppins px-4 py-2 rounded-full mt-8">
                Watch Now
              </button>{" "}
            </a>
          </div>
          <div>
            <img
              className="w-[400px] md:w-[1500px] mr-10"
              src="/KASUN.jpg"
              alt="robo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awareness;
