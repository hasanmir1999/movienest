"use client";

import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { TbTriangleFilled } from "react-icons/tb";


export default function UserPanelEditmePageContent() {
  const [passState, setPassState] = useState(false);

  return (
    <>
      <div className="col grow-1 sm:pl-20 sm:pr-14 sm:pb-10">
        <div className="me-edit bg-black w-full sm:rounded-md sm:border border-gray-400 sm:mt-28 mt-14 relative h-svh sm:h-auto p-5 pb-16">
          <TbTriangleFilled className="absolute text-orange-400 text-2xl -left-3 top-[22px] rotate-90 " />
          <div className="section-header">
            <h1 className="text-white text-xl font-bold">Edit me</h1>
          </div>
          <div className="edit-me-form flex justify-center mt-5">
            <form className="rounded-md backdrop-blur-2xl w-[400px]">
              <div className="input-container flex flex-col items-start gap-3 mb-8">
                <label htmlFor="username" className="text-gray-300 text-sm">
                  Username :
                </label>
                <input
                  type="text"
                  id="username"
                  className="border-gray-300 border-[1px] rounded-sm w-full h-[35px] outline-none text-gray-300 pl-2 bg-transparent"
                />
              </div>
              <div className="input-container flex flex-col items-start gap-3 my-8">
                <label htmlFor="email" className="text-gray-300 text-sm">
                  Email :
                </label>
                <input
                  type="email"
                  id="email"
                  className="border-gray-300 border-[1px] rounded-sm w-full h-[35px] outline-none text-gray-300 pl-2 bg-transparent"
                />
              </div>
              <div className="input-container flex flex-col items-start gap-3 my-8 relative">
                <label htmlFor="password" className="text-gray-300 text-sm">
                  Password :
                </label>
                <input
                  type={`${passState ? "text" : "password"}`}
                  id="password"
                  className="border-gray-300 border-[1px] rounded-sm w-full h-[35px] outline-none text-gray-300 pl-2 bg-transparent"
                />
                {passState ? (
                  <FaEyeSlash
                    className="cursor-pointer text-gray-100 text-2xl absolute right-2 top-[37px]"
                    onClick={() => setPassState(!passState)}
                  />
                ) : (
                  <FaEye
                    className="cursor-pointer text-gray-100 text-2xl absolute right-2 top-[37px]"
                    onClick={() => setPassState(!passState)}
                  />
                )}
              </div>
              <div className="btn-container flex justify-end mt-10">
                <button
                  onClick={(e) => signupHandler(e)}
                  type="button"
                  className="text-white bg-orange-400 rounded-md py-1 px-5 cursor-pointer w-full"
                >
                  Edit info
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
