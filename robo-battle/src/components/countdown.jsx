import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="mt-8"> {/* Add margin top */}
      <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-2 md:space-x-12">
        <div className="neon-box flex flex-col items-center justify-center p-4 bg-purple-800 text-center md:w-48 md:p-6 font-geliat">
          <span className="text-white text-2xl font-semibold">Days</span>
          <span className="text-white text-3xl font-semibold">{timeLeft.days}</span>
        </div>
        <div className="neon-box flex flex-col items-center justify-center p-4 bg-purple-800 text-center md:w-48 md:p-6 font-geliat">
          <span className="text-white text-2xl font-semibold">Hours</span>
          <span className="text-white text-3xl font-semibold">{timeLeft.hours}</span>
        </div>
        <div className="neon-box flex flex-col items-center justify-center p-4 bg-purple-800 text-center md:w-48 md:p-6 font-geliat">
          <span className="text-white text-2xl font-semibold">Minutes</span>
          <span className="text-white text-3xl font-semibold">{timeLeft.minutes}</span>
        </div>
        <div className="neon-box flex flex-col items-center justify-center p-4 bg-purple-800 text-center md:w-48 md:p-6 font-geliat">
          <span className="text-white text-2xl font-semibold">Seconds</span>
          <span className="text-white text-3xl font-semibold">{timeLeft.seconds}</span>
        </div>
      </div>
    </div>
  );
};

export default function Countdown() {
  const targetDate = new Date('2024-05-25T23:59:59'); // Set target date to May 25, 2024

  return (
    <div className="App">
      <CountdownTimer targetDate={targetDate} />
      <style>
        {`
          @keyframes animate {
            0% {
              box-shadow: 0 0 20px 10px #FF10F0; /* Increased thickness and spread */
            }
            100% {
              box-shadow: 0 0 30px 20px #FF10F0; /* Increased thickness and spread */
            }
          }

          .neon-box {
            border-radius: 0.5rem;
            box-shadow: 0 0 20px 10px #FF10F0; /* Increased thickness and spread */
            animation: animate 1s linear infinite alternate;
          }

          /* Increase space between boxes */
          @media (min-width: 768px) {
            .neon-box + .neon-box {
              margin-left: 3rem; /* Adjust as needed */
            }
          }
        `}
      </style>
    </div>
  );
};
