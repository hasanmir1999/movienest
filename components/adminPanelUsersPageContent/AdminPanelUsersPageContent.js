"use client";

import SearchBox from "@/components/searchBox/SearchBox";
import UserListCard from "@/components/userListCard/UserListCard";
import UserListCardload from "@/components/userListCardLoad/UserListCardLoad";
import { useEffect, useState } from "react";
import { TbTriangleFilled } from "react-icons/tb";
import Paginate from "@/components/paginate/Paginate";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchUsers } from "@/redux/slices/usersSlice";
import NoUserListCard from "../noUserListCard/NoUserListCard";

export default function AdminPanelUsersPageContent() {
  const dispatch = useDispatch();
  const { list, total, loading } = useSelector((state) => state.users);
  const [searchInput , setSearchInput] = useState('')
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(fetchUsers({ page: currentPage, searchInput }));
  }, [currentPage, searchInput, dispatch]);
  const handlePageClick = (selectedItem) => {
    setCurrentPage(selectedItem.selected + 1);
  };

  return (
    <>
      <div className="col users-page grow-1 sm:pl-20 sm:pr-14">
        <div className="users-list bg-black w-full min-h-svh sm:min-h-auto sm:rounded-md sm:border border-gray-400 mt-14 sm:mt-28 p-5 relative sm:mb-10">
          <TbTriangleFilled className="absolute text-orange-400 text-2xl -left-3 top-[22px] rotate-90" />
          <div className="section-header flex justify-between items-center">
            <h1 className="text-white text-lg sm:text-xl font-bold">
              Users list
            </h1>
            <SearchBox serachBy={"username"} setSearchInput={setSearchInput} setCurrentPage={setCurrentPage} />
          </div>
          <div className="users-list-container rounded-md sm:h-[70svh] sm:overflow-y-auto mt-5 scroll flex flex-col">
            <div className="row flex flex-wrap">
              {loading ? (
                <>
                  <div className="col w-full lg:w-1/2 p-2">
                    <UserListCardload />
                  </div>
                  <div className="col w-full lg:w-1/2 p-2">
                    <UserListCardload />
                  </div>
                  <div className="col w-full lg:w-1/2 p-2">
                    <UserListCardload />
                  </div>
                  <div className="col w-full lg:w-1/2 p-2">
                    <UserListCardload />
                  </div>
                  <div className="col w-full lg:w-1/2 p-2">
                    <UserListCardload />
                  </div>
                  <div className="col w-full lg:w-1/2 p-2">
                    <UserListCardload />
                  </div>
                  <div className="col w-full lg:w-1/2 p-2">
                    <UserListCardload />
                  </div>
                  <div className="col w-full lg:w-1/2 p-2">
                    <UserListCardload />
                  </div>
                </>
              ) : list[0] ? (
                list.map(
                  (user) =>
                    !user.is_deleted && (
                      <div className="col w-full lg:w-1/2 p-2" key={user.id}>
                        <UserListCard
                          id={user.id}
                          role={user.role}
                          username={user.username}
                          pro={user.user_sub}
                        />
                      </div>
                    )
                )
              ) : <NoUserListCard /> }
            </div>
            <Paginate
              pageCount={Math.ceil(total / 10)}
              handlePageClick={handlePageClick}
              currentPage={currentPage}
            />
          </div>
        </div>
      </div>
    </>
  );
}
