"use client";

import MoviesPageCard from "@/components/moviesPageCard/MoviesPageCard";
import { TbTriangleFilled } from "react-icons/tb";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoviesWT } from "@/redux/slices/moviesWTSlice";
import MoviesPageCardLoad from "../moviesPageCardLoad/MoviesPageCardLoad";
import FilterMenu from "../filterMenu/FilterMenu";
import Paginate from "@/components/paginate/Paginate";
import NoMoviesPageCard from "../noMoviesPageCard/NoMoviesPageCard";

export default function AllMoviesPageContent() {
  const dispatch = useDispatch();
  const [genre, setGenre] = useState("");
  const { list, total, loading } = useSelector((state) => state.moviesWT);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(fetchMoviesWT({ page: currentPage, genre: genre }));
  }, [currentPage, dispatch, genre]);
  const handlePageClick = (selectedItem) => {
    setCurrentPage(selectedItem.selected + 1);
  };
  return (
    <>
      <div className="bg-gray-950 pt-14 sm:pt-28 pb-28">
        <div className="container-cus mx-auto lg:w-[992px] xl:w-[1200px] 2xl:w-[1400px]">
          <div className="row flex flex-wrap">
            <div className="col w-full md:w-4/5 order-2 md:order-1">
              <div className="movies-list px-5 relative">
                <TbTriangleFilled className="absolute text-orange-400 text-2xl left-5 top-[2px] rotate-90" />
                <h1 className="text-white text-lg sm:text-xl font-bold ml-8">
                  Movies list
                </h1>
                <div className="movies-container row flex flex-wrap py-5">
                  {loading ? (
                    <>
                      <div className="col w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-2">
                        <MoviesPageCardLoad />
                      </div>
                      <div className="col w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-2">
                        <MoviesPageCardLoad />
                      </div>
                      <div className="col w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-2">
                        <MoviesPageCardLoad />
                      </div>
                      <div className="col w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-2">
                        <MoviesPageCardLoad />
                      </div>
                      <div className="col w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-2">
                        <MoviesPageCardLoad />
                      </div>
                      <div className="col w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-2">
                        <MoviesPageCardLoad />
                      </div>
                    </>
                  ) : list[0] ? (
                    list.map((movie) => (
                      <div
                        className="col w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-2"
                        key={movie.id}
                      >
                        <MoviesPageCard {...movie} />
                      </div>
                    ))
                  ) : (
                    <div className="col w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-2">
                      <NoMoviesPageCard />
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
            <div className="col w-full md:w-1/5 order-1 md:order-2">
              <div className="filter-container md:border mb-10 border-gray-400 rounded-md p-5 md:sticky top-28 mt-20 sm:mt-0">
                <h5 className="text-gray-300">Filter by movie's genre:</h5>
                <FilterMenu genre={genre} setGenre={setGenre} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
