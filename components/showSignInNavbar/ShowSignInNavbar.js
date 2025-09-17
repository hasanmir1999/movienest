"use client";

import Link from "next/link";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { LuLayoutDashboard, LuUserRound, LuUserRoundCog } from "react-icons/lu";
import { MdOutlineLogout } from "react-icons/md";
import { useSelector } from "react-redux";
import signout from "@/utils/signOut";
export default function ShowSignInNavbar() {
  const [dropState, setDropState] = useState(false);
  const { user, loading } = useSelector((state) => state.profile);

  return (
    <>
      <div className="show-signin-container relative flex items-center gap-3 border-2 border-orange-400 rounded-full p-0.5 pl-[3px] md:pl-1 md:p-1">
        <div className="admin-icon rounded-full w-7 h-7 md:w-8 md:h-8 bg-gray-600 flex justify-center items-center border-[1px] border-gray-400">
          {!loading &&
            user &&
            (user.role == "admin" ? (
              <LuUserRoundCog className="text-lg md:text-xl text-gray-400" />
            ) : (
              <LuUserRound className="text-lg md:text-xl text-gray-400" />
            ))}
        </div>
        <div className="admin-name flex flex-col">
          {!loading && user ? (
            <>
              <p className="username text-gray-300 md:text-sm text-xs">
                {user.username}
              </p>
              <p className="role text-gray-400 text-[10px]">{user.role}</p>
            </>
          ) : (
            <>
              <p className="username bg-gray-700 rounded w-24 h-3 animate-pulse"></p>
              <p className="role bg-gray-700 rounded w-16 h-2 animate-pulse mt-1"></p>
            </>
          )}
        </div>
        <IoIosArrowDown
          onClick={() => setDropState(!dropState)}
          className={`text-orange-400 text-xl cursor-pointer transition-all duration-300 ${
            dropState && "rotate-180"
          }`}
        />
        <div
          className={`drop-menu absolute bg-gray-700 rounded-xl p-1 top-[50px] w-full left-0 transition-all duration-300 h-0 opacity-0 pointer-events-none ${
            dropState && "sm:h-[68px] h-[63px] opacity-100 !pointer-events-auto"
          } `}
        >
          <ul className="text-sm text-gray-400 flex flex-col gap-1">
            <li className="p-1 rounded-lg transition-all duration-300 hover:bg-orange-400 hover:text-gray-100">
              <Link
                onClick={() => setDropState(false)}
                className="flex items-center justify-between whitespace-nowrap"
                href={`/${!loading && user && user.role}panel`}
              >
                <p className="text-xs sm:text-sm">dashboard</p>
                <LuLayoutDashboard className="text-lg sm:text-xl shrink-0" />
              </Link>
            </li>
            <li className="p-1 rounded-lg transition-all duration-300 hover:bg-orange-400 hover:text-gray-100">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => {
                  setDropState(false);
                  signout();
                }}
              >
                <p className="text-xs sm:text-sm">sign out</p>
                <MdOutlineLogout className="text-lg sm:text-xl" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
