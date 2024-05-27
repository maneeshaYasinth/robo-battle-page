import React from 'react'

const Awareness = () => {
  return (
    <div className="px-20 mt-[100px] py-5 sm:justify-center items-center">
      <h1 className="text-white font-krona text-2xl md:text-3xl">
        AWARENES SESSION
      </h1>
      <div className="flex mt-10 flex-col md:flex-row sm:items-center sm:justify-center items-center gap-10 justify-between">
        <div className="flex flex-col gap-10">
          <p className=" text-white font-poppins text-justify-end opacity-90 text-sm space-y-4 text-left mt-10 font-normal leading-relaxed  md:text-xl sm:items-center sm:justify-center ">
            Tune into this insightful video, where you'll discover professional
            strategies and essential guidelines for excelling in robot battle
            competitions, presented by Dr. Kasun Piyumal. The expert advice
            provided will equip you with the knowledge needed to dominate your
            competition and ensure your robot is battle-ready according to the
            latest rules and standards.
          </p>
          <a href="https://drive.google.com/file/d/12-g5isYXt1Hpny74pIzvhhKUxRroL5XZ/view?usp=drive_link">
            <button className=" bg-gradient-to-r from-pink-500 border-pink-400 border-2 to-fuchsia-800 text-lg text-white font-poppins px-4 py-2 rounded-full">
              Watch Now
            </button>{" "}
          </a>
        </div>
        <img className="w-[400px] mr-10" src="/KASUN.jpg" alt="robo" />
      </div>
    </div>
  )
}

export default Awareness