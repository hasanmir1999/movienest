"use client";
import UserMovieCard from "@/components/userMovieCard/UserMovieCard";
import { TbTriangleFilled } from "react-icons/tb";
import NoUserMovieCard from "../noUserMovieCard/NoUserMovieCard";
import { useSelector } from "react-redux";
import UserMovieCardLoad from "@/components/userMovieCardLoad/UserMovieCardLoad";
export default function UserPanelMyMoviesPageContent() {
  const { list, loading } = useSelector((state) => state.library);
  return (
    <>
      <div className="col user-panel-movies grow-1 sm:px-4 md:pl-20 md:pr-14">
        <div className="movies-list bg-black w-full min-h-svh sm:min-h-auto sm:rounded-md sm:border sm:border-gray-400 mt-14 sm:mt-28 p-5 relative">
          <TbTriangleFilled className="absolute text-orange-400 text-2xl -left-3 top-[22px] rotate-90 " />
          <div className="section-header flex justify-between items-center">
            <h1 className="text-white text-xl font-bold">My Movies</h1>
          </div>
          <div className="movie-items row flex flex-wrap mt-10 sm:h-[70svh] sm:overflow-y-auto scroll">
            {loading ? (
              <div className="col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2 py-5">
                <UserMovieCardLoad />
              </div>
            ) : list[0] ? (
              list.map((movie) => (
                <div
                  key={movie.id}
                  className="col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2 py-5"
                >
                  <UserMovieCard cover_url={movie.cover_url} />
                </div>
              ))
            ) : (
              <div className="col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2 py-5">
                <NoUserMovieCard />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
