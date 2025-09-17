"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import Image from "next/image";
import Link from "next/link";
import WishAdd from "@/components/wishAdd/WishAdd";
import GenreCard from "@/components/genreCard/GenreCard";
import { FaTheaterMasks } from "react-icons/fa";
import { FaRegLaughSquint } from "react-icons/fa";
import { FaGun } from "react-icons/fa6";
import { PiShootingStarBold } from "react-icons/pi";
import { FaRunning } from "react-icons/fa";
import SubCard from "@/components/subCard/SubCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchMoviesWT } from "@/redux/slices/moviesWTSlice";
import { ImSpinner2 } from "react-icons/im";
import WishAddLoad from "../wishAddLoad/WishAddLoad";
export default function HomePageContent() {
  const dispatch = useDispatch();
  const { list, loading } = useSelector((state) => state.moviesWT);

  useEffect(() => {
    dispatch(fetchMoviesWT({ page: 1, genre: "" }));
  }, [dispatch]);

  const genreInfo = [
    {
      id: 1,
      icon: <FaTheaterMasks />,
      genre: "Drama",
      link: "/",
    },
    {
      id: 2,
      icon: <FaRegLaughSquint />,
      genre: "Comedy",
      link: "/",
    },
    {
      id: 3,
      icon: <FaGun />,
      genre: "Action",
      link: "/",
    },
    {
      id: 4,
      icon: <PiShootingStarBold />,
      genre: "Animation",
      link: "/",
    },
    {
      id: 5,
      icon: <FaRunning />,
      genre: "Sports",
      link: "/",
    },
  ];

  return (
    <>
      <div className="home-main-content relative h-svh">
        <div className="filter bg-gray-900/40 w-full h-full z-10 absolute top-0 backdrop-blur-xs"></div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          effect={"fade"}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, EffectFade]}
          className="mySwiper w-full h-full"
        >
          {loading ? (
            <div className="w-full h-full absolute top-0 right-0 bg-gray-950 text-orange-400 text-9xl flex justify-center items-center">
              <ImSpinner2 className="animate-spin" />
            </div>
          ) : (
            list.map((movie) => (
              <SwiperSlide className="w-full h-full">
                <Image
                  src={movie.big_cover_url}
                  className="w-full h-full object-cover"
                  width={500}
                  height={500}
                  alt="slide1"
                />
              </SwiperSlide>
            ))
          )}
        </Swiper>
        <div className="home-main-title opacity-0 absolute -translate-x-1/2 left-1/2 top-36 lg:top-64 animate-bottomTop z-10 text-center">
          <h1 className="text-4xl lg:text-5xl text-white">
            Watch movie anytime, everywhere.
          </h1>
          <p className="text-gray-300 text-xs lg:text-sm mt-5 mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="btns flex justify-center gap-5">
            <Link
              href="/about"
              className="text-white text-xs whitespace-nowrap rounded-3xl border-2 border-orange-400 bg-orange-400 lg:text-sm py-2 px-5 lg:px-10"
            >
              Learn more
            </Link>
            <Link
              href={"#permium"}
              className="text-white text-xs whitespace-nowrap rounded-3xl border-2 border-orange-400 lg:text-sm py-2 px-5 lg:px-10"
            >
              Go permium
            </Link>
          </div>
        </div>

        <div className="shadow-maker bg-black shadow-top shadow-black absolute z-20 w-full" />
      </div>
      <div className="newly-released-movies-section bg-black pt-24 pb-10">
        <h2 className="text-white text-2xl md:text-3xl text-center mb-10">
          Newly released movies
        </h2>
        <div className="container-cus mx-auto lg:w-[992px] xl:w-[1200px] 2xl:w-[1400px]">
          <Swiper
            watchSlidesProgress={true}
            breakpoints={{
              320: {
                slidesPerView: 2,
              },
              640: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 5,
              },
              1280: {
                slidesPerView: 6,
              },
            }}
            className="mySwiper w-full h-[350px]"
          >
            {loading ? (
              <>
                <SwiperSlide className="relative mx-2 overflow-hidden rounded-2xl group">
                  <div className="w-full h-full bg-gray-700"></div>
                  <WishAddLoad />
                </SwiperSlide>
                <SwiperSlide className="relative mx-2 overflow-hidden rounded-2xl group">
                  <div className="w-full h-full bg-gray-700"></div>
                  <WishAddLoad />
                </SwiperSlide>
                <SwiperSlide className="relative mx-2 overflow-hidden rounded-2xl group">
                  <div className="w-full h-full bg-gray-700"></div>
                  <WishAddLoad />
                </SwiperSlide>
                <SwiperSlide className="relative mx-2 overflow-hidden rounded-2xl group">
                  <div className="w-full h-full bg-gray-700"></div>
                  <WishAddLoad />
                </SwiperSlide>
                <SwiperSlide className="relative mx-2 overflow-hidden rounded-2xl group">
                  <div className="w-full h-full bg-gray-700"></div>
                  <WishAddLoad />
                </SwiperSlide>
                <SwiperSlide className="relative mx-2 overflow-hidden rounded-2xl group">
                  <div className="w-full h-full bg-gray-700"></div>
                  <WishAddLoad />
                </SwiperSlide>
              </>
            ) : (
              list.map((movie) => (
                <SwiperSlide
                  className="relative mx-2 overflow-hidden rounded-2xl group"
                  key={movie.id}
                >
                  <Link href={`/movies/${movie.id}`}>
                    <Image
                      src={movie.cover_url}
                      className="object-cover w-full h-full group-hover:scale-105 transition-all duration-300"
                      fill
                      alt="slide1"
                    />
                  </Link>
                  <WishAdd
                    price={movie.price}
                    id={movie.id}
                    title={movie.title}
                  />
                </SwiperSlide>
              ))
            )}
          </Swiper>
        </div>
      </div>

      <div className="genres-of-movies-section bg-black pt-32 pb-40">
        <h2 className="text-white text-2xl md:text-3xl text-center mb-10">
          Genres of movies
        </h2>
        <div className="container-cus mx-auto lg:w-[992px] xl:w-[1200px] 2xl:w-[1400px]">
          <div className="row flex flex-wrap justify-center">
            {genreInfo.map((genre) => (
              <div className="col w-1/2 md:w-1/3 lg:w-1/5 p-2" key={genre.id}>
                <GenreCard {...genre} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="subscribe-section relative bg-[url(/assets/subimg.jpg)] bg-no-repeat bg-center bg-cover bg-fixed pt-20 pb-20">
        <h2 className="text-center text-white text-3xl z-20 font-bold">
          Start your free Trial
        </h2>
        <p className="text-center text-white mb-20 mt-5">
          Choose from annual or monthly plans. Switch or cancel anytime.
        </p>

        <div className="container-cus mx-auto lg:w-[992px] xl:w-[1200px] 2xl:w-[1400px]">
          <div className="row flex flex-wrap justify-center" id="permium">
            <div className="col w-full sm:w-1/2 lg:w-1/3 p-2">
              <SubCard
                id={2}
                price={4}
                spec={false}
                title={"HD + Package"}
                HD={true}
              />
            </div>
            <div className="col w-full sm:w-1/2 lg:w-1/3 p-2">
              <SubCard
                id={1}
                price={24}
                spec={true}
                title={"4K Package"}
                HD={false}
              />
            </div>
            <div className="col w-full sm:w-1/2 lg:w-1/3 p-2">
              <SubCard
                id={3}
                price={12}
                spec={false}
                title={"Full HD Package"}
                HD={false}
              />
            </div>
          </div>
        </div>
        <div className="help-container flex flex-col items-center mt-14 gap-5">
          <h5 className="text-white text-2xl font-bold text-center">
            Need help?
          </h5>
          <Link
            href="/"
            className="text-white bg-orange-400 rounded-3xl py-2 px-10"
          >
            Contact us
          </Link>
        </div>
      </div>

      <div className="about-section bg-black px-5 py-32">
        <div className="container-cus mx-auto lg:w-[992px] xl:w-[1200px] 2xl:w-[1400px]">
          <div className="row flex flex-wrap items-center">
            <div className="col w-full md:w-1/2 p-2">
              <h2 className="text-4xl lg:text-5xl text-white text-center md:text-left">
                Watch movie anytime, everywhere.
              </h2>
              <p className="text-gray-300 text-xs lg:text-sm text-center md:text-left mt-5 mb-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="container-about flex justify-center md:justify-start">
                <Link
                  href="/about"
                  className="text-white bg-orange-400 rounded-3xl py-2 px-10"
                >
                  About us
                </Link>
              </div>
            </div>
            <div className="col w-full md:w-1/2 p-2">
              <div className="img-container w-full h-auto relative">
                <Image
                  width={600}
                  height={500}
                  className="object-cover w-full"
                  src={"/assets/miro4.png"}
                  alt="about"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
