'use client'

import { FaCheck, FaStar } from "react-icons/fa6";
import { CgClose } from "react-icons/cg";
import { PostWithToken } from "@/utils/postWithToken";
import toast from "react-hot-toast";

export default function SubCard({id , price, spec, title, HD }) {
  const subHandler = async ()=>{
    const res = await PostWithToken(`https://movienest.liara.run/api/subscriptions/${id}/purchase`)
    toast.success(`${title} subscription is activated.`)
  }


  return (
    <>
      <div className="sub-card border-4 border-orange-400 h-[750px] rounded-2xl bg-gray-900 p-8 relative overflow-hidden hover:scale-[1.02] transition-all duration-300">
        {
          spec &&
          <span className="absolute bg-orange-400 w-36 text-white flex justify-center items-center py-1 rotate-45 -right-10 top-5">
            <FaStar />
          </span>
        }
        <h5 className="text-white whitespace-nowrap text-center text-xl sm:text-2xl md:text-3xl">{title}</h5>
        <p className="text-white text-center text-xs mt-2">
          permium package streaming
        </p>
        <div className="price text-center text-orange-400 mt-10 font-bold">
          <span>
            $<span className="text-5xl sm:text-6xl md:text-7xl mx-2">{price}</span>. 99
          </span>
          <p className="text-xs">Monthly</p>
        </div>
        <div className="features mt-12">
          <ul>
            <li className="flex items-center gap-5 border-b-[1px] border-gray-200 py-4">
              <FaCheck className="text-orange-400 text-lg sm:text-xl" />
              <p className="text-gray-100 text-sm sm:text-base ">No ads</p>
            </li>
            <li className="flex items-center gap-5 border-b-[1px] border-gray-200 py-4">
              <FaCheck className="text-orange-400 text-lg sm:text-xl" />
              <p className="text-gray-100 text-sm sm:text-base ">
                Access to full library with thousands of movie
              </p>
            </li>
            <li className="flex items-center gap-5 border-b-[1px] border-gray-200 py-4">
              <FaCheck className="text-orange-400 text-lg sm:text-xl" />
              <p className="text-gray-100 text-sm sm:text-base ">HD+ Quality streaming</p>
            </li>
            <li className="flex items-center gap-5 border-b-[1px] border-gray-200 py-4">
              <FaCheck className="text-orange-400 text-lg sm:text-xl" />
              <p className="text-gray-100 text-sm sm:text-base ">Watch on any device</p>
            </li>
            <li className="flex items-center gap-5 border-b-[1px] border-gray-200 py-4">
              {HD ? <CgClose className="text-gray-400 text-lg sm:text-xl" /> : <FaCheck className="text-orange-400 text-lg sm:text-xl" />}
              <p className="text-gray-100 text-sm sm:text-base ">Stream on 1 device at a time</p>
            </li>
            <li className="flex items-center gap-5 border-b-[1px] border-gray-200 py-4">
              {HD ? <CgClose className="text-gray-400 text-lg sm:text-xl" /> : <FaCheck className="text-orange-400 text-lg sm:text-xl" />}
              <p className="text-gray-100 text-sm sm:text-base ">Offline viewing</p>
            </li>
          </ul>
        </div>
        <button onClick={subHandler} className="text-white bg-orange-400 py-2 px-10 rounded-3xl mt-8 block mx-auto cursor-pointer">
          Start your free Treial
        </button>
      </div>
    </>
  );
}
