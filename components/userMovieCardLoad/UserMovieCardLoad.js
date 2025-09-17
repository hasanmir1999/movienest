export default function UserMovieCard() {
  return (
    <>
      <div className="user-movie-card rounded-md overflow-hidden relative h-100 sm:h-[400px] lg:h-[300px] xl:h-[400px] animate-pulse">
        <div className="w-full h-full bg-gray-700"></div>
        <span className="absolute w-full h-full top-0 right-0 bg-gray-800/50 flex justify-center items-center">
          <div className="w-8 h-8 bg-gray-600 rounded"></div>
        </span>
      </div>
    </>
  );
}
