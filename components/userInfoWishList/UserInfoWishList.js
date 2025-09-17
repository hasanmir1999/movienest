import { FiSearch } from "react-icons/fi";
import UserInfoItemList from "../userInfoItemList/UserInfoItemList";

export default function UserInfoMoviesList({tabStatus}) {
  return (
    <>
      <div className={`wishlist ${tabStatus != "wishlist" && "hidden"}`}>
        <div className="search-box flex items-center justify-center mt-5">
          <div className="input-box flex sm:w-[50%] justify-end">
            <input
              type="text"
              placeholder={`search by movie name`}
              className="bg-gray-800 outline-none rounded-3xl border border-gray-400 border-r-0 rounded-r-none caret-orange-400 pl-2 py-[6px] text-sm w-[90%] text-gray-400"
            />
            <button className="bg-gray-800 rounded-r-3xl border border-l-0 pr-[9px] pb-[1px] border-gray-400">
              <FiSearch className="text-orange-400 text-xl" />
            </button>
          </div>
        </div>
        <div className="user-wish-list flex items-center justify-center flex-col mt-10">
          <ul className="w-full sm:w-[75%] h-[200px] overflow-y-auto scroll2 pr-5">
            <UserInfoItemList />
            <UserInfoItemList />
            <UserInfoItemList />
            <UserInfoItemList />
          </ul>
          <p className="text-gray-400">pagination</p>
        </div>
      </div>
    </>
  );
}
