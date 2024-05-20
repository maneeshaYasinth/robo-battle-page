import React from 'react';

const events = [
  { date: '2024 . 04 . 12', title: 'Registration open', x: 5, y: 40 },
  { date: '2024 . 04 . 12', title: 'Awareness meeting', x: 20, y: 27 },
  { date: '2024 . 04 . 12', title: 'Registrations closing', x: 43, y: 65 },
  { date: '2024 . 04 . 12', title: 'Robot battle', x: 65, y: 27 },
  { date: '2024 . 05 . 02', title: 'Arena set up', x: 90, y: 65 },
  { date: '2024 . 05 . 14', title: 'Workshop', x: 103, y: 50 },
];

const Timeline = () => {
  return (
    <><h2 className="text-white text-center text-3xl font-geliat font-bold mb-6  pt-20 pb-2 relative mt-60">
          TIMELINE
          <span className="block w-48 h-1 bg-white absolute left-1/2 transform -translate-x-1/2 bottom-0 mt-18 mb-0"></span>
      </h2>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r text-white overflow-hidden px-4 mt-0 pt-0">
              <div className="relative w-full max-w-6xl">
                  <svg className="absolute top-1/2 transform -translate-y-1/2 w-full h-96" viewBox="0 0 1000 200" preserveAspectRatio="none">
                      <path
                          d="M 0 100 Q 125 0, 250 100 T 500 100 T 750 100 T 1000 100"
                          stroke="rgba(128, 90, 213, 0.5)"
                          strokeWidth="2"
                          fill="none" />
                  </svg>
                  <div className="relative z-10 flex justify-between items-center w-full h-96">
                      {events.map((event, index) => (
                          <div
                              key={index}
                              className={`absolute transform -translate-x-1/2 ${index % 2 === 0 ? 'translate-y-6' : '-translate-y-6'}`}
                              style={{ left: `${event.x}%`, top: `${event.y}%` }}
                          >
                              <div className="relative w-8 h-8 bg-pink-500 rounded-full mb-2">
                                  <div className="absolute w-8 h-8 bg-pink-500 rounded-full animate-ping"></div>
                              </div>
                              <div className=" p-2 rounded-lg text-xs md:text-sm">
                                  <p className="text-xs md:text-sm">{event.date}</p>
                                  <p className="font-bold">{event.title}</p>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
          </div></>
  );
};

export default Timeline;
