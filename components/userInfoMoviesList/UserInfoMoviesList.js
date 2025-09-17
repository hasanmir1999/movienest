"use client";
import { useEffect, useState } from "react";
import UserInfoItemList from "../userInfoItemList/UserInfoItemList";
import { fetchWithToken } from "@/utils/fetchWithToken";

export default function UserInfoMoviesList({ tabStatus, id }) {
  const [list, setList] = useState(null);
  const loadData = async () => {
    const data = await fetchWithToken(
      `https://movienest.liara.run/api/admin/user_library/${id}`
    );
    setList(data);
  };

  useEffect(() => {
    loadData();
  }, []);
  return (
    <>
      <div className={`movies ${tabStatus != "movies" && "hidden"}`}>
        <div className="user-movies-list flex items-center justify-center flex-col mt-10">
          <ul className="w-full sm:w-[75%] h-[200px] overflow-y-auto scroll2 pr-5">
            {list ? (
              list.map((item, index) => (
                <UserInfoItemList
                  index={index}
                  title={item.title}
                  key={item.id}
                />
              ))
            ) : (
              <>
                <li className="flex items-center py-2 border-t border-gray-400 animate-pulse">
                  <span className="w-6 h-6 bg-gray-700 rounded mr-5"></span>
                  <div className="flex-1 h-4 bg-gray-700 rounded"></div>
                </li>
                <li className="flex items-center py-2 border-t border-gray-400 animate-pulse">
                  <span className="w-6 h-6 bg-gray-700 rounded mr-5"></span>
                  <div className="flex-1 h-4 bg-gray-700 rounded"></div>
                </li>{" "}
                <li className="flex items-center py-2 border-t border-gray-400 animate-pulse">
                  <span className="w-6 h-6 bg-gray-700 rounded mr-5"></span>
                  <div className="flex-1 h-4 bg-gray-700 rounded"></div>
                </li>{" "}
                <li className="flex items-center py-2 border-t border-gray-400 animate-pulse">
                  <span className="w-6 h-6 bg-gray-700 rounded mr-5"></span>
                  <div className="flex-1 h-4 bg-gray-700 rounded"></div>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}
