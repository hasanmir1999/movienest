"use client";
import SearchBox from "@/components/searchBox/SearchBox";
import UserWishCard from "@/components/userWishCard/UserWishCard";
import { fetchWishList } from "@/redux/slices/wishListSlice";
import { useEffect } from "react";
import { TbTriangleFilled } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import UserWishCardLoad from "../userWishCardLoad/UserWishCardLoad";
import NoUserWishCard from "../noUserWishCard/NoUserWishCard";
export default function UserPanelWishlistPageContent() {
  const dispatch = useDispatch();
  const { list, loading } = useSelector((state) => state.wishList);
  useEffect(() => {
    dispatch(fetchWishList());
  }, [dispatch]);
  return (
    <>
      <div className="col admin-panel-movies grow-1 sm:px-4 md:pl-20 md:pr-14">
        <div className="movies-list bg-black w-full min-h-svh sm:min-h-auto sm:rounded-md sm:border sm:border-gray-400 mt-14 sm:mt-28 p-5 relative sm:mb-10">
          <TbTriangleFilled className="absolute text-orange-400 text-2xl -left-3 top-[22px] rotate-90 " />
          <div className="section-header flex justify-between items-center">
            <h1 className="text-white text-xl font-bold">Wishlist</h1>
          </div>
          <div className="movie-items row flex flex-wrap mt-10 sm:h-[70svh] sm:overflow-y-auto scroll">
            {loading ? (
              <>
                <div className="col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2 py-5">
                  <UserWishCardLoad />
                </div>
                <div className="col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2 py-5">
                  <UserWishCardLoad />
                </div>
                <div className="col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2 py-5">
                  <UserWishCardLoad />
                </div>
                <div className="col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2 py-5">
                  <UserWishCardLoad />
                </div>
                <div className="col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2 py-5">
                  <UserWishCardLoad />
                </div>
              </>
            ) : list[0] ? (
              list.map((movie) => (
                <div
                  className="col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2 py-5"
                  key={movie.id}
                >
                  <UserWishCard {...movie} />
                </div>
              ))
            ) : (
              <div className="col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2 py-5">
                <NoUserWishCard />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
