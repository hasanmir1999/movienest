"use client";

import { deleteMovie } from "@/redux/slices/moviesSlice";
import Image from "next/image";
import Link from "next/link";
import { RiDeleteBin5Line, RiPencilLine } from "react-icons/ri";
import { LiaImdb } from "react-icons/lia";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

export default function MovieListCard({
  title,
  time,
  price,
  description,
  imdb_rate,
  cover_url,
  id
}) {
  const dispatch = useDispatch();
  const deleteHandler = () => {
    Swal.fire({
      title: "Warning",
      text: `Do you want to delete ${title}`,
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
          dispatch(deleteMovie(id));

          Swal.fire({
            title: "Deleted!",
            text: "Movie has been deleted.",
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
      <div className="movie-list-card rounded-md p-5 bg-black border border-gray-400 flex items-end justify-between ">
        <div className="movie-info-img flex gap-5">
          <div className="movie-img sm:block hidden relative w-[150px] sm:w-[200px] h-[250px] sm:h-[300px] shrink-0">
            <Image
              src={cover_url}
              className="object-cover w-full h-full rounded-md"
              fill
              alt="movie1"
            />
          </div>
          <div className="movie-info">
            <ul className="flex flex-col gap-2">
              <li className="flex items-center gap-3">
                <p className="title text-gray-300 font-bold whitespace-nowrap">
                  Title :
                </p>
                <p className="text-gray-400">{title}</p>
              </li>
              <li className="flex items-center gap-3">
                <p className="rate text-gray-300 font-bold">Rate : </p>
                <p className="text-gray-400 flex items-center gap-2">
                  {imdb_rate}
                  <LiaImdb className="text-2xl text-orange-400" />
                </p>
              </li>
              <li className="flex items-center gap-3">
                <p className="time text-gray-300 font-bold">Time : </p>
                <p className="text-gray-400">
                  {time}
                  <sub className="text-orange-400">min</sub>
                </p>
              </li>
              <li className="flex items-center gap-3">
                <p className="price text-gray-300 font-bold">Price : </p>
                <p className="text-gray-400 flex items-center">
                  {price}
                  <span className="text-orange-400">$</span>
                </p>
              </li>
              <li className="flex flex-col gap-3">
                <p className="desc text-gray-300 font-bold">Description : </p>
                <div className="desc-content text-gray-400 line-clamp-3 md:line-clamp-5 overflow-hidden">
                  {description}
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="movie-btns mb-1 flex gap-3">
          <Link href={`/adminpanel/movies/editmovie/${id}`} className="text-gray-400 text-xl relative group">
            <RiPencilLine className="transition-all duration-300 hover:text-orange-400" />
            <span className="text-xs bg-gray-800 px-2 rounded-md absolute -bottom-5 right-2 whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300">
              edit info
            </span>
          </Link>
          <div className="text-gray-400 text-xl relative group cursor-pointer">
            <RiDeleteBin5Line
              onClick={deleteHandler}
              className="transition-all duration-300 hover:text-orange-400"
            />
            <span className="text-xs bg-gray-800 px-2 rounded-md absolute -bottom-5 right-2 whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300">
              delete
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
