"use client";

import Image from "next/image";
import { LuUserRoundCog } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import Link from "next/link";
import { RiHome2Line, RiPencilLine } from "react-icons/ri";
import { MdOutlineLogout } from "react-icons/md";
import { GrMenu, GrClose } from "react-icons/gr";
import { LuLayoutDashboard } from "react-icons/lu";
import { BiMoviePlay } from "react-icons/bi";
import { LuUserRound } from "react-icons/lu";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import signout from "@/utils/signOut";
import { PiShootingStarBold } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa6";
import { TbTriangle } from "react-icons/tb";

export default function AdminPanelHeader() {
  const [dropState, setDropState] = useState(false);
  const router = usePathname();
  const [navState, setNavState] = useState(false);
  const { user } = useSelector((state) => state.profile);

  return (
    <>
      <div
        className={`panel-header px-3 sm:px-10 pt-3 lg:pt-0 z-20 bg-black border-b-[1px] border-gray-400 fixed top-0 w-full transition-all duration-300 lg:h-[73px] ${
          navState ? "h-[345px]" : "h-[60px]"
        }`}
      >
        <div className="row flex items-center justify-between">
          <div className="admin-info flex items-center gap-3 sm:gap-6 relative">
            <div className="admin-icon rounded-full w-8 h-8 bg-gray-600 flex justify-center items-center border-[1px] border-gray-400">
              <LuUserRoundCog className="text-xl text-gray-400" />
            </div>
            <div className="admin-name flex flex-col">
              {user ? (
                <>
                  <p className="username text-gray-400 sm:text-sm text-xs">
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
              className={`drop-menu absolute bg-gray-700 rounded-md p-1 top-[45px] w-full left-0 transition-all duration-300 h-0 opacity-0 pointer-events-none ${
                dropState &&
                "sm:h-[68px] h-[63px] opacity-100 !pointer-events-auto"
              } `}
            >
              <ul className="text-sm text-gray-400 flex flex-col gap-1">
                <li className="p-1 rounded-md transition-all duration-300 hover:bg-orange-400 hover:text-gray-100">
                  <Link
                    className="flex items-center justify-between"
                    href={"/adminpanel/editme"}
                    onClick={() => setDropState(false)}
                  >
                    <p className="text-xs sm:text-sm">edit info</p>
                    <RiPencilLine className="text-lg sm:text-xl" />
                  </Link>
                </li>
                <li className="p-1 rounded-md transition-all duration-300 hover:bg-orange-400 hover:text-gray-100">
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
          <Link href={"/"} className="logo hidden lg:block">
            <Image
              src={"/assets/logo.png"}
              className="w-32"
              width={100}
              priority
              height={100}
              alt="logo"
            />
          </Link>
          <div
            className="burger-icon lg:hidden cursor-pointer"
            onClick={() => setNavState(!navState)}
          >
            <GrMenu
              className={`text-white text-xl ${navState ? "hidden" : "block"}`}
            />
            <GrClose
              className={`text-white text-xl ${navState ? "block" : "hidden"}`}
            />
          </div>
        </div>

        <div
          className={`res-nav mt-5 lg:hidden transition-all duration-300 ${
            navState
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <ul
            className={`flex flex-col gap-5 opacity-100 transition-all duration-300 pointer-events-nne`}
          >
            <li
              className={`flex items-center gap-2 text-gray-400 ${
                router == "/adminpanel" && "!text-orange-400"
              }`}
            >
              <LuLayoutDashboard className="text-lg" />
              <Link
                href="/adminpanel/"
                className="text-sm"
                onClick={() => setNavState(false)}
              >
                Dashboard
              </Link>
            </li>

            <li
              className={`flex items-center gap-2 text-gray-400 ${
                router == "/adminpanel/users" && "!text-orange-400"
              }`}
            >
              <LuUserRound className="text-lg" />
              <Link
                href="/adminpanel/users"
                className="text-sm"
                onClick={() => setNavState(false)}
              >
                Users
              </Link>
            </li>
            <li
              className={`flex items-center gap-2 text-gray-400 ${
                router == "/adminpanel/movies" && "!text-orange-400"
              }`}
            >
              <BiMoviePlay className="text-lg" />
              <Link
                href="/adminpanel/movies"
                className="text-sm"
                onClick={() => setNavState(false)}
              >
                Movies
              </Link>
            </li>
            <li
              className={`flex items-center gap-2 text-gray-400 ${
                router == "/adminpanel/mymovies" && "!text-orange-400"
              }`}
            >
              <TbTriangle className="text-lg rotate-90" />
              <Link
                href="/adminpanel/mymovies"
                className="text-sm"
                onClick={() => setNavState(false)}
              >
                My movies
              </Link>
            </li>
            <li
              className={`flex items-center gap-2 text-gray-400 ${
                router == "/adminpanel/wishlist" && "!text-orange-400"
              }`}
            >
              <FaRegHeart className="text-lg" />
              <Link
                href="/adminpanel/wishlist"
                className="text-sm"
                onClick={() => setNavState(false)}
              >
                Wishlist
              </Link>
            </li>
            <li
              className={`flex items-center gap-2 text-gray-400 ${
                router == "/adminpanel/mysub" && "!text-orange-400"
              }`}
            >
              <PiShootingStarBold className="text-lg" />
              <Link
                href="/adminpanel/mysub"
                className="text-sm"
                onClick={() => setNavState(false)}
              >
                My subscription
              </Link>
            </li>
            <li className={`flex items-center gap-2 text-gray-400`}>
              <RiHome2Line className="text-lg" />
              <Link
                href="/"
                className="text-sm"
                onClick={() => setNavState(false)}
              >
                Home
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
