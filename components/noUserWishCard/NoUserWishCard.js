export default function NoUserWishCard() {
  return (
    <>
      <div className="no-movie-wish-card border border-orange-400 text-white p-2 rounded-md w-full h-100 sm:h-[400px] lg:h-[300px] xl:h-[400px]">
        <div className="p-5 w-full h-full bg-orange-400 rounded-md flex justify-center items-center">
          Movie not found.
        </div>
      </div>
    </>
  );
}
