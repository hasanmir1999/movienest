import { IoIosArrowDown } from "react-icons/io";


export default function UserDropMenu() {


  return (
    <>
      <div className="show-signin-container relative flex items-center gap-3 border-2 border-orange-400 rounded-full p-1">
        <div className="admin-icon rounded-full w-8 h-8 bg-gray-600 flex justify-center items-center border-[1px] border-gray-400">
        </div>
        <div className="admin-name flex flex-col">
              <p className="username bg-gray-700 rounded w-24 h-3 animate-pulse"></p>
              <p className="role bg-gray-700 rounded w-16 h-2 animate-pulse mt-1"></p>
        </div>
        <IoIosArrowDown
          className={`text-orange-400 text-xl`}
        />
      </div>
    </>
  );
}
