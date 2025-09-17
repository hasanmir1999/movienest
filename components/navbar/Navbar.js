"use client";

import Link from "next/link";
import Image from "next/image";
import { SiGooglegemini } from "react-icons/si";
import { usePathname } from "next/navigation";
import { GrMenu, GrClose } from "react-icons/gr";
import { useEffect, useState } from "react";
import CartIcon from "../cartIcon/CartIcon";
import WishListIcon from "../wishListIcon/WishListIcon";
import ShowSignInNavbar from "../showSignInNavbar/ShowSignInNavbar";
import { useSelector } from "react-redux";
import ShowSignInNavbarLoad from "@/components/showSignInNavbarLoad/ShowSignInNavbarLoad";

export default function Navbar() {
  const route = usePathname();
  const [navState, setNavState] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user, loading } = useSelector((state) => state.profile);
  const pathname = usePathname();
  const hideLayout =
    pathname.startsWith("/signin") ||
    pathname.startsWith("/signup") ||
    pathname.startsWith("/adminpanel") ||
    pathname.startsWith("/userpanel");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <nav
        className={`${
          hideLayout && "hidden"
        }  fixed top-0 w-full z-30 transition-all duration-300 h-14 lg:h-[70px] backdrop-blur-md shadow-md lg:backdrop-blur-none lg:shadow-none ${
          navState && !loading && user && user.role && "h-56"
        } ${navState && !loading && user && !user.role && "h-56"} ${navState && !user && "h-60"} ${
          scrolled && "!backdrop-blur-md !shadow-md"
        }`}
      >
        <div className="container-cus mx-auto lg:w-[992px] xl:w-[1200px] 2xl:w-[1400px]">
          <div className="row px-3 flex justify-between items-center">
            <div className="logo">
              <Image
                src={"/assets/logo.png"}
                className="lg:w-28 xl:w-32"
                width={100}
                priority
                height={100}
                alt="logo"
              />
            </div>

            <div className="navbar hidden lg:block">
              <ul className="flex gap-12 lg:text-sm xl:text-base">
                <li className="relative group">
                  <Link href="/" className="text-white">
                    Home
                  </Link>
                  <span className="absolute w-full h-0.5 scale-x-0 origin-right group-hover:origin-left group-hover:scale-x-100 transition-transform duration-300 bg-orange-400 -bottom-1 left-0 drop-shadow-lg drop-shadow-orange-400" />
                </li>

                <li className="relative group">
                  <Link href="/movies" className="text-white">
                    Movies
                  </Link>
                  <span className="absolute w-full h-0.5 scale-x-0 origin-right group-hover:origin-left group-hover:scale-x-100 transition-transform duration-300 bg-orange-400 -bottom-1 left-0 drop-shadow-lg drop-shadow-orange-400" />
                </li>
                <li className="relative group">
                  <Link href={"/about"} className="text-white">
                    About us
                  </Link>
                  <span className="absolute w-full h-0.5 scale-x-0 origin-right group-hover:origin-left group-hover:scale-x-100 transition-transform duration-300 bg-orange-400 -bottom-1 left-0 drop-shadow-lg drop-shadow-orange-400" />
                </li>
                <li className="relative group">
                  <Link
                    href={`${route == "/" ? "#permium" : "/#permium"}`}
                    className="text-white flex items-center gap-2"
                  >
                    Go permium <SiGooglegemini className="!text-yellow-400" />
                  </Link>
                  <span className="absolute w-full h-0.5 scale-x-0 origin-right group-hover:origin-left group-hover:scale-x-100 transition-transform duration-300 bg-orange-400 -bottom-1 left-0 drop-shadow-lg drop-shadow-orange-400" />
                </li>
              </ul>
            </div>

            <div className="logInOut-cart-wish hidden lg:flex items-center gap-2">
              <WishListIcon />
              <CartIcon />
              {loading ? (
                <ShowSignInNavbarLoad />
              ) : user ? (
                <ShowSignInNavbar />
              ) : (
                <Link
                  href="/signin"
                  className="text-white border-2 border-orange-400 px-5 py-1 rounded-2xl text-sm"
                >
                  Sign in / Up
                </Link>
              )}
            </div>
            <div className="burger-icon lg:hidden cursor-pointer gap-2 flex items-center">
              <WishListIcon />
              <CartIcon />
              {!loading && user && <ShowSignInNavbar />}
              <GrMenu
                onClick={() => setNavState(!navState)}
                className={`text-white text-xl ${
                  navState ? "hidden" : "block"
                }`}
              />
              <GrClose
                onClick={() => setNavState(!navState)}
                className={`text-white text-xl ${
                  navState ? "block" : "hidden"
                }`}
              />
            </div>
          </div>
          <div className={`res-navbar px-6 lg:hidden ${!navState && 'hidden'}`}>
            <ul
              className={`flex flex-col gap-[14px] opacity-0 transition-all duration-300 pointer-events-none ${
                navState && "opacity-100 !pointer-events-auto"
              }`}
            >
              <li>
                <Link
                  href="/"
                  className="text-white"
                  onClick={() => setNavState(false)}
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/movies"
                  className="text-white"
                  onClick={() => setNavState(false)}
                >
                  Movies
                </Link>
              </li>
              <li>
                <Link
                  href={"/about"}
                  className="text-white"
                  onClick={() => setNavState(false)}
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href={`${route == "/" ? "#permium" : "/#permium"}`}
                  className="text-white flex items-center gap-2"
                  onClick={() => setNavState(false)}
                >
                  Go permium <SiGooglegemini className="!text-yellow-400" />
                </Link>
              </li>
              <li>
                {!loading && !user && (
                  <Link
                    href={"/signin"}
                    onClick={() => setNavState(false)}
                    className="text-white flex items-center gap-2"
                  >
                    Sign in / Up
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
