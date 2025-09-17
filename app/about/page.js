import Image from "next/image";

export const metadata = {
  title: "About us",
};

export default function AboutUs() {
  return (
    <>
      <div className="min-h-svh bg-gray-950 py-30">
        <div className="container mx-auto lg:w-[992px] xl:w-[1200px] 2xl:w-[1400px]">
          <div className="movie-main-content p-5">
            <h1 className="text-white text-3xl font-bold text-center my-5">
              About us
            </h1>
            <div className="img-container relative w-[300px] h-[200px] sm:w-[500px] sm:h-[300px] mx-auto">
              <Image
                fill
                className="object-cover w-full h-full"
                src={"/assets/miro4.png"}
                alt="about"
              />
            </div>
            <div className="desc-about-us w-[70%] mx-auto text-gray-300 text-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white mb-10">
                Watch movie anytime, everywhere.
              </h2>
              <p className="text-sm sm:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis, accusamus esse libero similique neque laudantium
                nostrum ratione sunt nihil error, illo at est facere nemo
                possimus voluptatem provident amet quaerat. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Veritatis, accusamus esse
                libero similique neque laudantium nostrum ratione sunt nihil
                error, illo at est facere nemo possimus voluptatem provident
                amet quaerat. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Veritatis, accusamus esse libero similique neque
                laudantium nostrum ratione sunt nihil error, illo at est facere
                nemo possimus voluptatem provident amet quaerat. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Veritatis,
                accusamus esse libero similique neque laudantium nostrum ratione
                sunt nihil error, illo at est facere nemo possimus voluptatem
                provident amet quaerat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
