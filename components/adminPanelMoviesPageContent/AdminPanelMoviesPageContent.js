"use client";

import MovieListCard from "@/components/movieListcard/MovieListCard";
import SearchBox from "@/components/searchBox/SearchBox";
import { TbTriangleFilled } from "react-icons/tb";
import { IoAddCircleOutline } from "react-icons/io5";
import Link from "next/link";
import { useEffect, useState } from "react";
import Paginate from "@/components/paginate/Paginate";
import MovieListCardLoad from "@/components/movieListCardLoad/MovieListCardLoad";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "@/redux/slices/moviesSlice";
import NoMovieListCard from "../noMovieListCard/NoMovieListCard";

export default function AdminPanelMoviesPageContent() {
  const dispatch = useDispatch();
  const { list, total, loading } = useSelector((state) => state.movies);
  const [searchInput, setSearchInput] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(fetchMovies({ page: currentPage, searchInput }));
  }, [currentPage, searchInput, dispatch]);
  const handlePageClick = (selectedItem) => {
    setCurrentPage(selectedItem.selected + 1);
  };

  return (
    <>
      <div className="col admin-panel-movies grow-1 sm:px-4 md:pl-20 md:pr-14">
        <div className="movies-list bg-black w-full min-h-svh sm:min-h-auto sm:rounded-md sm:border sm:border-gray-400 mt-14 sm:mt-28 p-5 relative sm:h-[82svh]">
          <TbTriangleFilled className="absolute text-orange-400 text-2xl -left-3 top-[22px] rotate-90 " />
          <div className="section-header flex justify-between items-center">
            <h1 className="text-white text-xl font-bold">Movies list</h1>
            <SearchBox
              serachBy={"movie name"}
              setSearchInput={setSearchInput}
              setCurrentPage={setCurrentPage}
            />
          </div>
          <div className="movies-list-container rounded-md mt-5 overflow-y-auto scroll h-[90%] relative flex flex-col">
            <Link
              href={"/adminpanel/movies/addmovie"}
              className="add-btn mx-auto bg-black border rounded-md w-full max-w-[97%] border-gray-400 sticky top-0 p-4 z-10 flex justify-center items-center text-gray-400 gap-1 transition-all duration-300 hover:text-orange-400"
            >
              <IoAddCircleOutline className="text-2xl" />
              add movie
            </Link>
            <div className="row flex flex-wrap">
              {loading ? (
                <>
                  <div className="col w-full py-2 px-4">
                    <MovieListCardLoad />
                  </div>
                  <div className="col w-full py-2 px-4">
                    <MovieListCardLoad />
                  </div>
                  <div className="col w-full py-2 px-4">
                    <MovieListCardLoad />
                  </div>
                  <div className="col w-full py-2 px-4">
                    <MovieListCardLoad />
                  </div>
                </>
              ) : list[0] ? (
                list.map((movie) => (
                  <div className="col w-full py-2 px-4" key={movie.id}>
                    <MovieListCard {...movie} />
                  </div>
                ))
              ) : (
                <div className="col w-full py-2 px-4">
                  <NoMovieListCard />
                </div>
              )}
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
