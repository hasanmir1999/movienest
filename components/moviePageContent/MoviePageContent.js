"use client";

import Image from "next/image";
import { RiMovie2Line } from "react-icons/ri";
import { LiaImdb } from "react-icons/lia";
import { FaRegHeart } from "react-icons/fa";
import toast from "react-hot-toast";
import { addToCart, deleteCart } from "@/redux/slices/cartSlice";
import Swal from "sweetalert2";
import search from "@/utils/search";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToWishList, deleteWishList } from "@/redux/slices/wishListSlice";
import { LuHeartOff } from "react-icons/lu";
import { useRouter } from "next/navigation";

export default function MoviePageContent({
  title,
  time,
  price,
  description,
  imdb_rate,
  cover_url,
  big_cover_url,
  text,
  genre,
  id,
}) {
  const { list, loading } = useSelector((state) => state.wishList);
  const { list: cartList, loading: cartLoading } = useSelector(
    (state) => state.cart
  );
  const router = useRouter();
  const { list: libraryList } = useSelector((state) => state.library);
  const { user, loading: userLoading } = useSelector((state) => state.profile);
  const [inLibStat, setInLibStat] = useState(false);
  const [inListStat, setInListStat] = useState(false);
  const [inCartStat, setInCartStat] = useState(false);
  const dispatch = useDispatch();

  const removeFromWishListHandler = () => {
    if (!user)
      return toast("Please signin.", {
        icon: <MdOutlineInfo className="text-gray-400 text-xl" />,
      });
    Swal.fire({
      title: "Warning",
      text: `Do you want to remove ${title} from wishlist?`,
      icon: "warning",
      showCancelButton: true,
      customClass: {
        popup: "swal-popup",
      },
      iconColor: "#f97316",
      color: "#9CA3AF",
      confirmButtonColor: "#f97316",
      background: "#1F2937",
      confirmButtonText: "Yes, remove it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          dispatch(deleteWishList({ id }));
          Swal.fire({
            title: "Deleted!",
            text: "Movie has been removed from wishlist.",
            icon: "success",
            customClass: { popup: "swal-popup" },
            iconColor: "#f97316",
            color: "#9CA3AF",
            background: "#1F2937",
            confirmButtonColor: "#f97316",
          });
        } catch (err) {
          console.error("Delete failed:", err);
        }
      }
    });
  };

  const addToWishListHandler = () => {
    if (!user)
      return toast("Please signin.", {
        icon: <MdOutlineInfo className="text-gray-400 text-xl" />,
      });
    dispatch(addToWishList({ id }));
    toast.success(`${title} was added to wishlist.`);
    setInListStat(true);
  };

  const removeFromCartHandler = () => {
    if (!user)
      return toast("Please signin.", {
        icon: <MdOutlineInfo className="text-gray-400 text-xl" />,
      });
    Swal.fire({
      title: "Warning",
      text: `Do you want to remove ${title} from cart?`,
      icon: "warning",
      showCancelButton: true,
      customClass: {
        popup: "swal-popup",
      },
      iconColor: "#f97316",
      color: "#9CA3AF",
      confirmButtonColor: "#f97316",
      background: "#1F2937",
      confirmButtonText: "Yes, remove it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          dispatch(deleteCart({ id }));
          Swal.fire({
            title: "Deleted!",
            text: "Movie has been removed from cart.",
            icon: "success",
            customClass: { popup: "swal-popup" },
            iconColor: "#f97316",
            color: "#9CA3AF",
            background: "#1F2937",
            confirmButtonColor: "#f97316",
          });
        } catch (err) {
          console.error("Delete failed:", err);
        }
      }
    });
  };

  const addToCartHandler = () => {
    if (!user)
      return toast("Please signin.", {
        icon: <MdOutlineInfo className="text-gray-400 text-xl" />,
      });
    dispatch(addToCart({ id }));
    toast.success(`${title} was added to cart.`);
    setInCartStat(true);
  };

  const pushHandler = () => {
    router.push(`/${user.role}panel/mymovies`);
  };

  useEffect(() => {
    setInCartStat(search(cartList, id));
  }, [cartList]);

  useEffect(() => {
    setInListStat(search(list, id));
  }, [list]);

  useEffect(() => {
    setInLibStat(search(libraryList, id));
  }, [libraryList]);
  return (
    <>
      <div
        className="relative h-svh bg-fixed bg-no-repeat bg-center bg-cover before:content-[''] before:absolute before:inset-0 before:bg-gray-900/60 before:backdrop-blur-sm before:z-0 pt-60"
        style={{ backgroundImage: `url(${big_cover_url})` }}
      >
        <div className="container relative z-10 mx-auto lg:w-[992px] xl:w-[1200px] 2xl:w-[1400px]">
          <div className="movie-main-content p-5 bg-gray-900 rounded-md border border-orange-400 h-[400px] md:h-[300px] lg:h-[350px] z-20 relative">
            <div className="img-container bg-gradient-to-b from-orange-400 via-orange-400 via-50% to-gray-900 p-[2px] rounded-md w-fit absolute md:-top-24 -top-44 md:left-10 left-1/2 translate-x-[-50%] md:translate-0">
              <div className="bg-gray-900 rounded-md p-4 w-[200px] h-[300px] md:w-[230px] lg:w-[270px] lg:h-[400px] md:h-[350px] relative overflow-hidden">
                <Image
                  src={cover_url}
                  className="object-cover w-full h-full"
                  alt="sayad"
                  fill
                />
              </div>
            </div>
            <div className="movie-info md:ml-72 lg:ml-80 h-full flex flex-col items-center md:items-start w-full md:w-auto text-center md:text-left mt-32 md:mt-0">
              <h1 className="text-gray-300 font-bold text-2xl">{title}</h1>

              <div className="genre-rate-time text-gray-400 flex gap-4 mt-2">
                <span className="genre">{genre}</span> |
                <span className="rate flex items-center gap-2">
                  {imdb_rate} <LiaImdb className="text-orange-400 text-2xl" />
                </span>
                |
                <span className="time">
                  {time}
                  <sub className="text-orange-400">min</sub>
                </span>
              </div>

              <div className="description w-[70%] text-gray-400 md:mt-7 lg:mt-10 line-clamp-3 md:line-clamp-4 lg:line-clamp-5">
                {description}
              </div>

              <div className="cart-price-wish flex items-center gap-3 mt-10 md:mt-auto md:ml-auto">
                <div
                  onClick={
                    inListStat
                      ? removeFromWishListHandler
                      : addToWishListHandler
                  }
                  className="add-to-wish size-[45px] rounded-full flex justify-center items-center border-2 border-orange-400 cursor-pointer relative group"
                >
                  {!userLoading &&
                    !loading &&
                    (user ? (
                      inListStat ? (
                        <LuHeartOff className="text-orange-500 text-xl" />
                      ) : (
                        <FaRegHeart className="text-orange-500 text-xl" />
                      )
                    ) : (
                      <FaRegHeart className="text-orange-500 text-xl" />
                    ))}
                  <span className="absolute text-gray-400 bg-gray-950 rounded-xl text-sm whitespace-nowrap py-1 px-2 -top-9 opacity-0 pointer-events-none group-hover:opacity-100 transition-all duration-300">
                    {!userLoading &&
                      !loading &&
                      (user
                        ? inListStat
                          ? "remove from wishlist"
                          : "add to wishlist"
                        : "add to wishlist")}
                  </span>
                </div>
                <div className="add-to-cart">
                  <button
                    onClick={
                      inCartStat
                        ? removeFromCartHandler
                        : inLibStat
                        ? pushHandler
                        : addToCartHandler
                    }
                    className="text-white bg-orange-400 rounded-3xl py-2 px-5 cursor-pointer"
                  >
                    {!userLoading &&
                      !cartLoading &&
                      (user
                        ? inCartStat
                          ? "remove from cart"
                          : inLibStat
                          ? "watch movie"
                          : "add to cart"
                        : "add to cart")}
                  </button>
                </div>
                <div className="price text-gray-300">{price}$</div>
              </div>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-20 z-0 bg-gradient-to-t from-black to-transparent" />
      </div>
      <div className="description-section-container bg-black relative pt-20 pb-28">
        <div className="container-cus mx-auto lg:w-[992px] xl:w-[1200px] 2xl:w-[1400px]">
          <div className="description-section bg-gray-900 border border-orange-400 rounded-md h-auto z-30 p-5 flex flex-col">
            <div className="info-text-icon flex items-center gap-2 mb-10">
              <RiMovie2Line className="text-orange-400 text-3xl" />
              <h5 className="text-gray-40 text-white text-xl font-bold">
                movie information
              </h5>
            </div>
            <div
              className="prose prose-invert max-w-none text-gray-300 info"
              dangerouslySetInnerHTML={{ __html: text }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
