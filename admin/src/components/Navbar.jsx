import React from "react";
import { assets } from "../assets/assets";

const Navbar = ({ setToken }) => {
  return (
    <div className="flex items-center py-2 px-[4%] justify-between">
      <img className="w-[max(15%,140px)]" src={assets.logo} alt="" />
      <button
        onClick={() => setToken("")}
        className="bg-[#f7a7c1] text-gray-800 px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm hover:bg-[#e279a5] transition"
      >
        Logout
      </button>

      {/* className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm'>Logout</button> */}
    </div>
  );
};

export default Navbar;
