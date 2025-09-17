"use client";
import Image from "next/image";
import Link from "next/link";
import { FaCartShopping, FaHeart } from "react-icons/fa6";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import search from "@/utils/search";
import { LuHeartOff } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { addToWishList, deleteWishList } from "@/redux/slices/wishListSlice";
import { addToCart, deleteCart } from "@/redux/slices/cartSlice";
import { TbTriangleFilled } from "react-icons/tb";
import { MdOutlineInfo } from "react-icons/md";
import { useRouter } from "next/navigation";

export default function MoviesPageCard({ cover_url, title, price, id }) {
  const { list, loading } = useSelector((state) => state.wishList);
  const { list: cartList, loading: cartLoading } = useSelector(
    (state) => state.cart
  );
  const router = useRouter();
  const { user, loading: userLoading } = useSelector((state) => state.profile);
  const { list: libraryList } = useSelector((state) => state.library);
  const [inListStat, setInListStat] = useState(false);
  const [inCartStat, setInCartStat] = useState(false);
  const [inLibStat, setInLibStat] = useState(false);
  const dispatch = useDispatch();

  const pushHandler = () => {
    router.push(`/${user.role}panel/mymovies`);
  };
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
      <div className="movie-page-card bg-gray-700 rounded-md h-[500px] overflow-hidden border border-orange-400 block">
        <Link href={`/movies/${id}`}>
          <div className="img-container relative h-[360px]">
            <Image
              src={cover_url}
              className="object-cover w-full h-full"
              fill
              alt="slide1"
            />
          </div>
        </Link>
        <div className="title-price-btns flex flex-col h-[140px] p-3">
          <div className="title text-xl text-gray-200 font-bold">{title}</div>
          <div className="price-btns flex items-end justify-between mt-auto">
            <div className="btns flex items-center gap-3">
              <button
                onClick={
                  inCartStat
                    ? removeFromCartHandler
                    : inLibStat
                    ? pushHandler
                    : addToCartHandler
                }
                type="button"
                className="w-[45px] h-[45px] cursor-pointer overflow-hidden rounded-full outline-none flex items-center justify-center border-2 border-gray-400 text-xl text-white relative group"
              >
                {!userLoading &&
                  !cartLoading &&
                  (user ? (
                    inCartStat ? (
                      <div className="relative">
                        <span className="absolute w-8 h-0.5 origin-top-left animate-streach bg-gray-700 z-10 -top-[3px] left-[2px] rotate-45"></span>
                        <FaCartShopping />
                      </div>
                    ) : inLibStat ? (
                      <Link href={`/${user.role}panel/mymovies`}>
                        <TbTriangleFilled className="rotate-90" />
                      </Link>
                    ) : (
                      <FaCartShopping />
                    )
                  ) : (
                    <FaCartShopping />
                  ))}
                <span className="absolute rounded-md p-1 bg-gray-950 text-gray-400 text-xs -top-8 left-0 whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-all duration-300">
                  {!userLoading &&
                    !loading &&
                    (user
                      ? inCartStat
                        ? "remove from cart"
                        : inLibStat
                        ? "watch movie"
                        : "add to cart"
                      : "add to cart")}
                </span>
              </button>
              <button
                type="button"
                onClick={
                  inListStat ? removeFromWishListHandler : addToWishListHandler
                }
                className="w-[45px] h-[45px] outline-none cursor-pointer rounded-full flex items-center justify-center border-2 border-orange-400 text-xl text-orange-400 relative group"
              >
                {!userLoading &&
                  !loading &&
                  (user ? (
                    inListStat ? (
                      <LuHeartOff />
                    ) : (
                      <FaHeart />
                    )
                  ) : (
                    <FaHeart />
                  ))}
                <span className="absolute rounded-md p-1 bg-gray-950 text-gray-400 text-xs -top-8 left-0 whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-all duration-300">
                  {!userLoading &&
                    !loading &&
                    (user
                      ? inListStat
                        ? "remove from wishlist"
                        : "add to wishlist"
                      : "add to wishlist")}
                </span>
              </button>
            </div>
            <div className="price justify-self-end text-gray-300">{price}$</div>
          </div>
        </div>
      </div>
    </>
  );
}
