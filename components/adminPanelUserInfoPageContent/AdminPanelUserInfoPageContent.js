"use client";

import UserInfoMoviesList from "@/components/userInfoMoviesList/UserInfoMoviesList";
import UserInfoSub from "@/components/userInfoSub/UserInfoSub";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import { LuUserRound } from "react-icons/lu";
import { TbTriangleFilled } from "react-icons/tb";
import { fetchWithToken } from "@/utils/fetchWithToken";

export default function AdminPanelUserInfoPageContent({ _id }) {
  const [tabStatus, setTabStatus] = useState("movies");
  const [profile, setProfile] = useState(null);

  const loadData = async () => {
    const data = await fetchWithToken(
      `https://movienest.liara.run/api/admin/user/${_id}`
    );
    setProfile(data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <div className="col user-info-page grow-1 sm:pl-20 sm:pr-14 sm:pb-10">
        <div
          className={`user-info bg-black w-full h-auto sm:rounded-md sm:border border-gray-400 mt-14 sm:mt-28 p-5 relative ${
            profile && profile.user_sub && "border-orange-400 overflow-hidden"
          }`}
        >
          {profile && profile.user_sub && (
            <span className="pro absolute bg-orange-400 w-36 text-white flex justify-center items-center py-1 rotate-45 -right-10 top-5">
              <FaStar />
            </span>
          )}
          <TbTriangleFilled className="absolute text-orange-400 text-2xl -left-3 top-[22px] rotate-90 " />
          <div className="section-header">
            <h1 className="text-white text-xl font-bold mb-0">User info</h1>
          </div>
          <div className="user-info-container mt-2">
            <div className="user-icon-info flex sm:flex-row items-center flex-col gap-5">
              <div className="user-icon-container w-[200px] h-[200px] bg-gray-700 rounded-md flex justify-center items-center">
                <LuUserRound className="text-gray-400 text-5xl" />
              </div>
              <div className="user-info self-start">
                <ul className="flex flex-col gap-2">
                  <li className="flex items-center gap-3">
                    {profile ? (
                      <>
                        <p className="title text-gray-300 font-bold">
                          username :{" "}
                        </p>{" "}
                        <p className="text-gray-400">{profile.username}</p>
                      </>
                    ) : (
                      <div className="h-4 w-40 bg-gray-600 rounded animate-pulse"></div>
                    )}
                  </li>
                  <li className="flex items-center gap-3">
                    {profile ? (
                      <>
                        <p className="title text-gray-300 font-bold">
                          email :{" "}
                        </p>{" "}
                        <p className="text-gray-400">{profile.email}</p>
                      </>
                    ) : (
                      <div className="h-4 w-48 my-1 bg-gray-600 rounded animate-pulse"></div>
                    )}
                  </li>
                  <li className="flex items-center gap-3">
                    {profile ? (
                      <>
                        <p className="title text-gray-300 font-bold">role : </p>{" "}
                        <p className="text-gray-400">{profile.role}</p>
                      </>
                    ) : (
                      <div className="h-4 w-32 bg-gray-600 rounded animate-pulse"></div>
                    )}
                  </li>
                </ul>
              </div>
            </div>
            <div className="user-details mt-20">
              <div className="nav flex justify-center items-center">
                <ul className="flex justify-between w-full sm:w-[75%] border-b border-gray-400 p-3">
                  <li
                    onClick={() => setTabStatus("movies")}
                    className={`text-orange-400 cursor-pointer text-sm relative after:absolute after:w-full after:h-1 after:bg-orange-500 after:right-0 after:-bottom-[14px] after:z-10 ${
                      tabStatus != "movies" && "after:hidden !text-gray-400"
                    }`}
                  >
                    movies
                  </li>
                  <li
                    onClick={() => setTabStatus("subscription")}
                    className={`text-orange-400 cursor-pointer text-sm relative after:absolute after:w-full after:h-1 after:bg-orange-500 after:right-0 after:-bottom-[14px] after:z-10 ${
                      tabStatus != "subscription" &&
                      "after:hidden !text-gray-400"
                    }`}
                  >
                    subscription
                  </li>
                </ul>
              </div>
              <UserInfoMoviesList tabStatus={tabStatus} id={_id} />
              <UserInfoSub id={_id} tabStatus={tabStatus} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
