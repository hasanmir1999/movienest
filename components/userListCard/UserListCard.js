"use client";
import { FaStar } from "react-icons/fa6";
import { LuUserRound } from "react-icons/lu";
import Link from "next/link";
import { RiPencilLine } from "react-icons/ri";
import { RiDeleteBin5Line } from "react-icons/ri";
import { LuUserRoundCog } from "react-icons/lu";
import { HiDotsVertical } from "react-icons/hi";
import { MdOutlineInfo } from "react-icons/md";
import { useState } from "react";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { deleteUser } from "@/redux/slices/usersSlice";

export default function UserListCard({ id, username, role, pro = false }) {
  const [dropState, setDropState] = useState(false);
  const dispatch = useDispatch();
  const deleteHandler = () => {
    Swal.fire({
      title: "Warning",
      text: `Do you want to delete ${username}`,
      icon: "warning",
      showCancelButton: true,
      customClass: {
        popup: "swal-popup",
      },
      iconColor: "#f97316",
      color: "#9CA3AF",
      confirmButtonColor: "#f97316",
      background: "#1F2937",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          dispatch(deleteUser(id));
          Swal.fire({
            title: "Deleted!",
            text: "User has been deleted.",
            icon: "success",
            customClass: { popup: "swal-popup" },
            iconColor: "#f97316",
            color: "#9CA3AF",
            background: "#1F2937",
            confirmButtonColor: "#f97316",
          });
        } catch (err) {
          console.error("Delete failed:", err);
        }
      }
    });
  };
  return (
    <>
      <div
        className={`user-list-card w-full bg-black flex items-center justify-between p-2 rounded-md border relative ${
          pro ? "border-orange-400" : "border-gray-400"
        }`}
      >
        <div className="icon-name-role flex items-center gap-3">
          <div className="user-icon bg-gray-600 rounded-full w-12 sm:w-14 h-12 sm:h-14 border border-gray-400 flex justify-center items-center relative overflow-hidden">
            {role == "admin" ? (
              <LuUserRoundCog className="text-gray-400 text-2xl sm:text-3xl" />
            ) : (
              <LuUserRound className="text-gray-400 text-2xl sm:text-3xl" />
            )}
            {pro && (
              <span className="absolute bg-orange-400 w-36 text-white flex justify-center py-0.5 items-center bottom-0">
                <FaStar size={10} />
              </span>
            )}
          </div>

          <div className="user-name-role">
            {username && <p className="text-gray-400 text-sm">{username}</p>}
            {role && <p className="text-gray-400 text-xs">{role}</p>}
          </div>
        </div>

        {role && role != "admin" && (
          <div
            onClick={() => setDropState(!dropState)}
            className="res-btn sm:hidden relative cursor-pointer text-gray-400"
          >
            <HiDotsVertical className="text-xl" />
            {dropState && (
              <div className="drop-menu absolute w-52 bg-gray-700 right-0 top-8 rounded-md p-1 z-10">
                <ul>
                  <li className="py-0.5 group">
                    <Link
                      className="flex justify-between items-center p-1 rounded-md group-hover:bg-orange-400 group-hover:text-white transition-all duration-300"
                      href={`/adminpanel/users/userinfo/${id}`}
                    >
                      <p className="text-sm">info</p>
                      <MdOutlineInfo className="text-lg" />
                    </Link>
                  </li>
                  <li className="py-0.5 group">
                    <Link
                      className="flex justify-between items-center p-1 rounded-md group-hover:bg-orange-400 group-hover:text-white transition-all duration-300"
                      href={`/adminpanel/users/edituser/${id}`}
                    >
                      <p className="text-sm">edit info</p>
                      <RiPencilLine className="text-lg" />
                    </Link>
                  </li>
                  <li className="py-0.5 group">
                    <div
                      className="flex justify-between items-center cursor-pointer p-1 rounded-md group-hover:bg-orange-400 group-hover:text-white transition-all duration-300"
                      onClick={deleteHandler}
                    >
                      <p className="text-sm">delete</p>
                      <RiDeleteBin5Line className="text-lg" />
                    </div>
                  </li>
                </ul>
              </div>
            )}
          </div>
        )}

        <div className="user-btns hidden sm:flex mr-2 sm:mr-5 items-center gap-2 sm:gap-3">
          <Link
            href={`/adminpanel/users/userinfo/${id}`}
            className="text-gray-400 text-lg sm:text-xl relative group"
          >
            <MdOutlineInfo className="transition-all duration-300 hover:text-orange-400" />
            <span className="text-xs bg-gray-800 px-2 rounded-md absolute -bottom-5 right-2 whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300">
              info
            </span>
          </Link>
          {role && role != "admin" &&
            (<>
              <Link
                href={`/adminpanel/users/edituser/${id}`}
                className="text-gray-400 text-lg sm:text-xl relative group"
              >
                <RiPencilLine className="transition-all duration-300 hover:text-orange-400" />
                <span className="text-xs bg-gray-800 px-2 rounded-md absolute -bottom-5 right-2 whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300">
                  edit info
                </span>
              </Link>
              <div
                onClick={deleteHandler}
                className="text-gray-400 text-lg sm:text-xl relative group cursor-pointer"
              >
                <RiDeleteBin5Line className="transition-all duration-300 hover:text-orange-400" />
                <span className="text-xs bg-gray-800 px-2 rounded-md absolute -bottom-5 right-2 whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300">
                  delete
                </span>
              </div>
            </>)
          }
        </div>
      </div>
    </>
  );
}
