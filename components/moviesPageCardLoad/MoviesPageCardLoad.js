export default function MoviesPageCardLoad() {
  return (
    <>
    <div className="movie-page-card bg-gray-700 rounded-md h-[500px] overflow-hidden border border-orange-400 animate-pulse">

      <div className="img-container relative h-[360px] bg-gray-600" />


      <div className="title-price-btns flex flex-col h-[140px] p-3">

        <div className="title h-6 w-3/4 bg-gray-600 rounded mb-3" />


        <div className="price-btns flex items-end justify-between mt-auto">
          <div className="btns flex items-center gap-3">
            <div className="w-[45px] h-[45px] rounded-full bg-gray-600" />
            <div className="w-[45px] h-[45px] rounded-full bg-gray-600" />
          </div>
          <div className="price h-6 w-12 bg-gray-600 rounded" />
        </div>
      </div>
    </div>
    </>
  );
}
