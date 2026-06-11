import React from 'react';
import {Link} from 'react-router-dom'

function Header() {
  return (
    <header
      id="header"
      className="bg-black h-[50px] sm:h-[60px] lg:h-[70px] flex items-center justify-between p-1.25 px-[15px] sm:px-4 md:px-[30px] lg:px-[50px] box-border w-full"
    >
      <div>
        <p className="text-sky-400 font-light text-[15px] sm:text-[30px]">
          Medicine Finder
        </p>
      </div>
      <div className="flex justify-between items-center">
        {}
        <Link
          to="/home"
          className="text-white mr-[8px] bg-none text-[10px] sm:text-[13px] border-none cursor-pointer transition-all duration-300 hover:scale-[1.02] sm:hover:scale-105 hover:bg-[#38bdf8] hover:text-black hover:p-1.25 sm:hover:p-2.5 hover:rounded-[10px]"
        >
          HOME
        </Link>

        {}
        <Link
          to="/find"
          className="text-white bg-none text-[10px] sm:text-[13px] border-none cursor-pointer ml-[5px] sm:ml-[30px] transition-all duration-300 hover:scale-[1.02] sm:hover:scale-105 hover:bg-[#38bdf8] hover:text-black hover:p-1.25 sm:hover:p-2.5 hover:rounded-[10px]"
        >
          FIND MEDICINE
        </Link>

        {}
        <Link
          to="/about"
          id="aboutme"
          className="text-white bg-none text-[10px] sm:text-[13px] border-none cursor-pointer ml-[5px] sm:ml-[30px] p-[5px_10px] sm:p-2.5 rounded-[15px] border-b-2 border-red-500 transition-all duration-300 hover:scale-[1.02] sm:hover:scale-105 hover:bg-[#38bdf8] hover:text-black"
        >
          ABOUT ME
        </Link>
      </div>
    </header>
  );
}

export default Header