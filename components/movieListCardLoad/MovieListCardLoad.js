export default function MovieListCardLoad() {
  return (
    <>
      <div className="movie-list-card rounded-md p-5 bg-black border border-gray-400 flex items-end justify-between">
        <div className="movie-info-img w-full flex gap-5">
          <div className="movie-img sm:block hidden w-[150px] sm:w-[200px] h-[250px] sm:h-[300px] shrink-0 animate-pulse bg-gray-800 rounded-md"></div>
          <div className="movie-info w-full">
            <ul className="flex flex-col gap-2">
              <li className="flex items-center gap-3">
                <p className="h-4 w-40 bg-gray-700 rounded animate-pulse"></p>
              </li>
              <li className="flex items-center gap-3">
                <p className="h-4 w-14 bg-gray-700 rounded animate-pulse"></p>
              </li>
              <li className="flex items-center gap-3">
                <p className="h-4 w-20 bg-gray-700 rounded animate-pulse"></p>
              </li>
              <li className="flex items-center gap-3">
                <p className="h-4 w-24 bg-gray-700 rounded animate-pulse"></p>
              </li>
              <li className="flex flex-col gap-3 mt-5">
                <p className="h-4 w-36 bg-gray-700 rounded animate-pulse"></p>
                <div className="desc-content animate-pulse">
                  <div className="h-4 bg-gray-700 rounded w-6/7 mb-3"></div>
                  <div className="h-4 bg-gray-700 rounded w-1/2 mb-3"></div>
                  <div className="h-4 bg-gray-700 rounded w-4/6 mb-3"></div>
                  <div className="h-4 bg-gray-700 rounded w-5/6"></div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
