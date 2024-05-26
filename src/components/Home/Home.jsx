import React from 'react';
import Navbar from '../Navbar/Navbar';


function Home() {
  return (
  <>
   <div className='max-w-xl ml-20 text-white'>
    <div className='text-xl leading-normal tracking-widest text-left uppercase max-w-screen font-krona mt-14 mt-30'>Creative robotics</div> 
    <div className='text-6xl leading-normal tracking-widest text-left text-white uppercase max-w-screen font-krona'>UOK ROBOT BATTLES</div>
    <div className='text-6xl leading-normal tracking-widest text-left text-white uppercase max-w-screen font-krona'>2K24</div>
    <div>
        <p className='leading-normal tracking-widest text-left text-white font-poppins'>
        Welcome to the ultimate showdown of engineering prowess and strategy. Here, brilliant minds converge to pit their robotic creations against one another in a 
        thrilling display of technological might. Join us in the arena where the future of robotics comes alive.
        </p>
    </div>
    <div className='mt-10'>
    <a href="https://docs.google.com/forms/d/1aW2N9A0GmMuo4zoIm7gCOGZIWwO4zoyA-lY4JXlxypQ/viewform?edit_requested=true">
                <button className=" bg-gradient-to-r from-pink-500 border-pink-400 border-2 to-fuchsia-800 text-lg text-white font-poppins px-6 py-2 rounded-full cursor-pointer">
                 Register</button>
              </a>
    </div>
    <div className='bottom-0 w-full top-12 xl:w-1/2 xl:absolute right-1'>
        <img src="1.png" alt="1" />
    </div>

   </div>
        
       

  </>
  )
}

export default Home