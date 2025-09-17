import Image from "next/image";
import { TbTriangleFilled } from "react-icons/tb";

export default function UserMovieCard({cover_url}) {
  return (
    <>
      <div className="user-movie-card rounded-md overflow-hidden relative h-100 sm:h-[400px] lg:h-[300px] xl:h-[400px] group cursor-pointer">
        <Image
          src={cover_url}
          className="object-cover w-full h-full"
          fill
          alt="slide1"
        />
        <span className="absolute w-full h-full top-0 right-0 bg-gray-950/40 backdrop-blur-xs flex justify-center items-center opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300">
            <TbTriangleFilled className='text-orange-400 text-3xl rotate-90'/>
        </span>
      </div>
    </>
  );
}
