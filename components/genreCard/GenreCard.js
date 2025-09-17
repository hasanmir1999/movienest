'use client'
export default function GenreCard({icon , genre}){
    return(
        <>
            <div className="genre-card w-full rounded-lg bg-gray-800 pt-10 pb-5 cursor-pointer group">
                <div className="icon-container flex items-center justify-center text-7xl text-gray-600 group-hover:text-orange-400 transition-all duration-300">
                    {icon}
                </div>
                <h5 className="genre-title text-gray-200 text-xl text-center mt-14">{genre}</h5>
            </div>
        </>
    )
}