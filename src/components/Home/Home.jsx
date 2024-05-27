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
    <div>
     <button className='inline-block px-12 py-3 ml-3 mr-4 text-center text-white duration-300 border border-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl font-poppins mt-7 hover:text-white hover:border hover:bg-transparent hover:border-pink-300'>
        <a href="#" >Register</a></button> 
    </div>
    <div className='bottom-0 w-full top-12 xl:w-1/2 xl:absolute right-1'>
        <img src="1.png" alt="1" />
    </div>

   </div>
        
       

  </>
  )
}

export default Home