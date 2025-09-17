export default function Bage({count}) {
  return (
    <>
      <span className={`${count == 0 && 'hidden'} absolute text-orange-400 border border-orange-400 bg-gray-900 text-[10px] md:text-xs rounded-full w-4 h-4 md:w-5 md:h-5 flex justify-center items-center -bottom-2 -right-1 z-10`}>
        {count}
      </span>
      <span className={`${count == 0 && 'hidden'} absolute bg-orange-400 animate-ping rounded-full w-4 h-4 md:w-5 md:h-5 -bottom-2 -right-1`}></span>
    </>
  );
}
