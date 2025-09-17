"use client";

import { LuLayoutDashboard } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { TbTriangle } from "react-icons/tb";
import Link from "next/link";
import { TbTriangleFilled } from "react-icons/tb";
import { usePathname } from "next/navigation";
import { MdOutlineLogout } from "react-icons/md";
import { useState } from "react";
import { PiShootingStarBold } from "react-icons/pi";
import { IoCartOutline } from "react-icons/io5";
import signout from "@/utils/signOut";

export default function UserPanelVerticalMenu() {
  const router = usePathname();

  const [navState, setNavState] = useState(false);

  return (
    <>
      <div
        className={`user-vertical-menu w-[110px] bg-black min-h-svh border-r hidden lg:block border-gray-400 pt-36 relative transition-all duration-300 shrink-0 ${
          navState && "w-[250px]"
        } `}
      >
        <span
          onClick={() => setNavState(!navState)}
          className="absolute w-8 h-8 rounded-full flex justify-center items-center border border-l-black bg-black border-t-gray-400 rotate-45 border-r-gray-400 -right-4 top-28 cursor-pointer"
        >
          <TbTriangleFilled
            size={14}
            className="text-orange-400 rotate-[45deg]"
          />
        </span>
        <nav className="flex flex-col justify-between h-full">
          <ul className="flex gap-1 px-7 flex-col w-full">
            <li className="relative group">
              <Link
                href={"/userpanel"}
                className={`text-gray-400 flex items-center gap-3 py-3 px-4 whitespace-nowrap ${
                  router == "/userpanel" && "text-orange-400"
                }`}
              >
                <LuLayoutDashboard className="shrink-0 text-2xl" />
                <p
                  className={`transition-all duration-300 ${
                    navState ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                >
                  Dashboard
                </p>
              </Link>
              {!navState && (
                <span className="item-label-hover z-10 whitespace-nowrap absolute top-[13px] left-[60px] py- px-5 bg-gray-700 rounded-md shadow-xl text-gray-400 transition-all duration-300 opacity-0 pointer-events-none group-hover:opacity-100 after:absolute after:border-[10px] after:border-transparent after:border-r-gray-700 after:top-[2px] after:-left-[18px]">
                  Dashboard
                </span>
              )}
            </li>
            <li className="relative group">
              <Link
                href={"/userpanel/mymovies"}
                className={`text-gray-400 flex items-center gap-3 py-3 px-4 whitespace-nowrap ${
                  router == "/userpanel/mymovies" && "text-orange-400"
                }`}
              >
                <TbTriangle className="shrink-0 text-2xl rotate-90" />
                <p
                  className={`transition-all duration-300 ${
                    navState ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                >
                  My movies
                </p>
              </Link>
              {!navState && (
                <span className="item-label-hover z-10 whitespace-nowrap absolute top-[13px] left-[60px] py- px-5 bg-gray-700 rounded-md shadow-xl text-gray-400 transition-all duration-300 opacity-0 pointer-events-none group-hover:opacity-100 after:absolute after:border-[10px] after:border-transparent after:border-r-gray-700 after:top-[2px] after:-left-[18px]">
                  My movies
                </span>
              )}
            </li>
            <li className="relative group">
              <Link
                href={"/userpanel/wishlist"}
                className={`text-gray-400 flex items-center gap-3 py-3 px-4 whitespace-nowrap ${
                  router == "/userpanel/wishlist" && "text-orange-400"
                }`}
              >
                <FaRegHeart className="shrink-0 text-2xl" />
                <p
                  className={`transition-all duration-300 ${
                    navState ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                >
                  Wishlist
                </p>
              </Link>
              {!navState && (
                <span className="item-label-hover z-10 whitespace-nowrap absolute top-[13px] left-[60px] py- px-5 bg-gray-700 rounded-md shadow-xl text-gray-400 transition-all duration-300 opacity-0 pointer-events-none group-hover:opacity-100 after:absolute after:border-[10px] after:border-transparent after:border-r-gray-700 after:top-[2px] after:-left-[18px]">
                  Wishlist
                </span>
              )}
            </li>
            <li className="relative group">
              <Link
                href={"/userpanel/mysub"}
                className={`text-gray-400 flex items-center gap-3 py-3 px-4 whitespace-nowrap ${
                  router == "/userpanel/mysub" && "text-orange-400"
                }`}
              >
                <PiShootingStarBold className="shrink-0 text-2xl" />
                <p
                  className={`transition-all duration-300 ${
                    navState ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                >
                  My subscription
                </p>
              </Link>
              {!navState && (
                <span className="item-label-hover z-10 whitespace-nowrap absolute top-[13px] left-[60px] py- px-5 bg-gray-700 rounded-md shadow-xl text-gray-400 transition-all duration-300 opacity-0 pointer-events-none group-hover:opacity-100 after:absolute after:border-[10px] after:border-transparent after:border-r-gray-700 after:top-[2px] after:-left-[18px]">
                  My subscription
                </span>
              )}
            </li>
            <li className="relative group">
              <Link
                href={"/cart"}
                className={`text-gray-400 flex items-center gap-3 py-3 px-4 whitespace-nowrap`}
              >
                <IoCartOutline className="shrink-0 text-2xl" />
                <p
                  className={`transition-all duration-300 ${
                    navState ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                >
                  Cart
                </p>
              </Link>
              {!navState && (
                <span className="item-label-hover z-10 whitespace-nowrap absolute top-[13px] left-[60px] py- px-5 bg-gray-700 rounded-md shadow-xl text-gray-400 transition-all duration-300 opacity-0 pointer-events-none group-hover:opacity-100 after:absolute after:border-[10px] after:border-transparent after:border-r-gray-700 after:top-[2px] after:-left-[18px]">
                  Cart
                </span>
              )}
            </li>
          </ul>
          <div className="signout-item px-7 mb-10 relative group">
            <div onClick={()=>signout()} className="signout cursor-pointer text-gray-400 flex items-center gap-3 py-3 px-4 whitespace-nowrap">
              <MdOutlineLogout className="shrink-0 text-2xl cursor-pointer" />
              <p
                className={`transition-all duration-300 ${
                  navState ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              >
                Sign out
              </p>
            </div>
            {!navState && (
              <span className="item-label-hover z-10 whitespace-nowrap absolute top-[13px] left-[80px] py- px-5 bg-gray-700 rounded-md shadow-xl text-gray-400 transition-all duration-300 opacity-0 pointer-events-none group-hover:opacity-100 after:absolute after:border-[10px] after:border-transparent after:border-r-gray-700 after:top-[2px] after:-left-[18px]">
                Sign out
              </span>
            )}
          </div>
        </nav>
      </div>
    </>
  );
}
