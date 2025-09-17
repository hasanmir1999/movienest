import { useState } from "react";
import { FaRegLaughSquint, FaRunning, FaTheaterMasks } from "react-icons/fa";
import { FaGun } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { PiShootingStarBold } from "react-icons/pi";

export default function FilterMenu({genre , setGenre}) {

    const [filterMenuState , setFilterMenuState] = useState(false)
  return (
    <>
      <div className="w-full mt-10 relative">
        <div
          onClick={() => setFilterMenuState(!filterMenuState)}
          className="display border border-orange-400 text-gray-300 bg-gray-900 p-2 rounded-md cursor-pointer flex justify-between items-center"
        >
          {genre == "" ? "all" : genre}
          <IoIosArrowDown
            className={`${
              filterMenuState && "rotate-180"
            } transition-all duration-300`}
          />
        </div>
        <ul
          className={`absolute ${
            filterMenuState
              ? "h-[220px] !pointer-events-auto"
              : "h-0 opacity-0 pointer-events-none"
          } border border-orange-400 text-gray-300 bg-gray-900 p-1 w-full top-14 rounded-md flex flex-col gap-2 transition-all duration-300`}
        >
          <li
            onClick={() => {
              setGenre("");
              setFilterMenuState(false);
            }}
            className="all cursor-pointer hover:bg-orange-400 hover:text-white transition-all duration-300 p-0.5 rounded-md"
          >
            All
          </li>
          <li
            onClick={() => {
              setGenre("drama");
              setFilterMenuState(false);
            }}
            className="drama flex justify-between items-center cursor-pointer hover:bg-orange-400 hover:text-white transition-all duration-300 p-0.5 rounded-md"
          >
            Drama <FaTheaterMasks className="text-xl" />
          </li>
          <li
            onClick={() => {
              setGenre("comedy");
              setFilterMenuState(false);
            }}
            className="comedy flex justify-between items-center cursor-pointer hover:bg-orange-400 hover:text-white transition-all duration-300 p-0.5 rounded-md"
          >
            Comedy <FaRegLaughSquint className="text-xl" />
          </li>
          <li
            onClick={() => {
              setGenre("action");
              setFilterMenuState(false);
            }}
            className="action flex justify-between items-center cursor-pointer hover:bg-orange-400 hover:text-white transition-all duration-300 p-0.5 rounded-md"
          >
            Action <FaGun className="text-xl" />
          </li>
          <li
            onClick={() => {
              setGenre("animation");
              setFilterMenuState(false);
            }}
            className="animation flex justify-between items-center cursor-pointer hover:bg-orange-400 hover:text-white transition-all duration-300 p-0.5 rounded-md"
          >
            Animation <PiShootingStarBold className="text-xl" />
          </li>
          <li
            onClick={() => {
              setGenre("sports");
              setFilterMenuState(false);
            }}
            className="sports flex justify-between items-center cursor-pointer hover:bg-orange-400 hover:text-white transition-all duration-300 p-0.5 rounded-md"
          >
            Sports <FaRunning className="text-xl" />
          </li>
        </ul>
      </div>
    </>
  );
}
