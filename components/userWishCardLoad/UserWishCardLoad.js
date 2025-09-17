export default function UserWishCardLoad() {
  return (
    <>
      <div className="user-movie-card rounded-md overflow-hidden relative h-100 sm:h-[400px] lg:h-[300px] xl:h-[400px] animate-pulse">
        <div className="bg-gray-700 w-full h-full" />
        <div className="wish-add-btns absolute bottom-0 right-0 w-full h-14 backdrop-blur-sm bg-neutral-500/50 flex items-center p-5 gap-3">
          <div className="w-8 h-8 bg-gray-600 rounded-full" />
          <div className="w-8 h-8 bg-gray-600 rounded-full" />
          <div className="ml-auto w-16 h-4 bg-gray-600 rounded" />
        </div>
      </div>
    </>
  );
}
