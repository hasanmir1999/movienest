import { useState } from "react";
import { FaRegLaughSquint, FaRunning, FaTheaterMasks } from "react-icons/fa";
import { FaGun } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { PiShootingStarBold } from "react-icons/pi";

export default function GenreMenu({ formData, setFormData }) {
  const [menuStatus, setMenuStatus] = useState(false);
  return (
    <div className="col w-full sm:w-1/2 lg:w-1/4 p-2 relative flex flex-col items-start gap-3">
      <label htmlFor='genre' className="text-gray-300 text-sm">
        Genre* :
      </label>
      <div
        onClick={() => setMenuStatus(!menuStatus)}
        className="display w-full border border-gray-400 text-gray-300 p-2 rounded-md cursor-pointer flex justify-between items-center"
      >
        {formData.genre == "" ? "" : formData.genre}
        <IoIosArrowDown
          className={`${
            menuStatus && "rotate-180"
          } transition-all duration-300`}
        />
      </div>
      <ul
        className={`absolute ${
          menuStatus
            ? "h-[185px] !pointer-events-auto"
            : "h-0 opacity-0 pointer-events-none"
        } border border-gray-400 text-gray-300 bg-gray-900 p-1 w-[calc(100%-16px)] top-20  rounded-md flex flex-col gap-2 transition-all duration-300`}
      >
        <li
          onClick={() => {
            setFormData({ ...formData, genre: "drama" });
            setMenuStatus(false)
          }}
          className="drama flex justify-between items-center cursor-pointer hover:bg-orange-400 hover:text-white transition-all duration-300 p-0.5 rounded-md"
        >
          Drama <FaTheaterMasks className="text-xl" />
        </li>
        <li
          onClick={() => {
            setFormData({ ...formData, genre: "comedy" });
            setMenuStatus(false)

          }}
          className="comedy flex justify-between items-center cursor-pointer hover:bg-orange-400 hover:text-white transition-all duration-300 p-0.5 rounded-md"
        >
          Comedy <FaRegLaughSquint className="text-xl" />
        </li>
        <li
          onClick={() => {
            setFormData({ ...formData, genre: "action" });
            setMenuStatus(false)

          }}
          className="action flex justify-between items-center cursor-pointer hover:bg-orange-400 hover:text-white transition-all duration-300 p-0.5 rounded-md"
        >
          Action <FaGun className="text-xl" />
        </li>
        <li
          onClick={() => {
            setFormData({ ...formData, genre: "animation" });
            setMenuStatus(false)

          }}
          className="animation flex justify-between items-center cursor-pointer hover:bg-orange-400 hover:text-white transition-all duration-300 p-0.5 rounded-md"
        >
          Animation <PiShootingStarBold className="text-xl" />
        </li>
        <li
          onClick={() => {
            setFormData({ ...formData, genre: "sports" });
            setMenuStatus(false)

          }}
          className="sports flex justify-between items-center cursor-pointer hover:bg-orange-400 hover:text-white transition-all duration-300 p-0.5 rounded-md"
        >
          Sports <FaRunning className="text-xl" />
        </li>
      </ul>
    </div>
  );
}
