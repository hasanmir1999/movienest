"use client";

import { useState } from "react";
import { FiSearch } from "react-icons/fi";

export default function SearchBox({
  serachBy,
  setSearchInput,
  setCurrentPage,
}) {
  const [searchParams, setSearchParams] = useState("");

  const searchHandler = () => {
      if (searchParams.trim() === "") {
        setCurrentPage(1);
        setSearchInput("");
      } else {
        setCurrentPage(1);
        setSearchInput(searchParams.trim());
      }
  };

  return (
    <>
      <div className="search-box flex justify-between items-center w-[60%] sm:w-[50%]">
        <div className="filter flex items-center gap-2"></div>
        <div className="input-box flex w-full sm:w-[90%] lg:w-[65%] justify-end">
          <input
            type="text"
            onChange={(e) => setSearchParams(e.target.value)}
            placeholder={`search by ${serachBy}`}
            className="bg-gray-800 outline-none rounded-3xl border border-gray-400 border-r-0 rounded-r-none caret-orange-400 pl-2 py-[6px] text-xs sm:text-sm w-[90%] text-gray-400"
          />
          <button
            onClick={searchHandler}
            className="bg-gray-800 cursor-pointer rounded-r-3xl border border-l-0 pr-[9px] pb-[1px] border-gray-400"
          >
            <FiSearch className="text-orange-400 text-lg sm:text-xl" />
          </button>
        </div>
      </div>
    </>
  );
}
