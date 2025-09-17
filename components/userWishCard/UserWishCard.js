"use client";
import Image from "next/image";
import { FaCartShopping } from "react-icons/fa6";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import search from "@/utils/search";
import { LuHeartOff } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { deleteWishList } from "@/redux/slices/wishListSlice";
import { addToCart, deleteCart } from "@/redux/slices/cartSlice";
import Link from "next/link";
import { TbTriangleFilled } from "react-icons/tb";
import { useRouter } from "next/navigation";

export default function UserWishCard({ title, price, cover_url, id }) {
  const { list: cartList, loading: cartLoading } = useSelector(
    (state) => state.cart
  );
  const router = useRouter()
  const { user, loading: userLoading } = useSelector((state) => state.profile);
  const { list: libraryList } = useSelector((state) => state.library);
  const [inCartStat, setInCartStat] = useState(false);
  const dispatch = useDispatch();
  const [inLibStat, setInLibStat] = useState(false);

  const removeFromWishListHandler = () => {
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

  const removeFromCartHandler = () => {
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
    setInLibStat(search(libraryList, id));
  }, [libraryList]);
  return (
    <>
      <div className="user-movie-card rounded-md overflow-hidden relative h-100 sm:h-[400px] lg:h-[300px] xl:h-[400px] group cursor-pointer">
        <Image
          src={cover_url}
          className="object-cover w-full h-full"
          fill
          alt="slide1"
        />
        <div className="wish-add-btns absolute lg:-bottom-20 right-0 w-full h-14 lg:group-hover:bottom-0 bottom-0 backdrop-blur-sm bg-neutral-500/50 transition-all duration-300 items-center p-5 gap-3 flex">
          <button
            onClick={
              inCartStat
                ? removeFromCartHandler
                : inLibStat
                ? pushHandler
                : addToCartHandler
            }
            className="text-white text-2xl cursor-pointer relative"
          >
          {!userLoading &&
            !cartLoading &&(
              inCartStat ? (
                <div className="relative">
                  <span className="absolute w-6 h-0.5 origin-top-left animate-streach bg-white z-10 -top-[3px] left-[2px] rotate-45"></span>
                  <FaCartShopping />
                </div>
              ) : inLibStat ? (
                <Link href={`/${user.role}panel/mymovies`}>
                  <TbTriangleFilled className="rotate-90" />
                </Link>
              ) : (
                <FaCartShopping />
              )
            )}
            <span className="absolute pointer-events-none p-1 text-white text-xs whitespace-nowrap -top-8 -left-4 transition-all duration-300 opacity-0 bg-gray-900 rounded-md peer-hover:opacity-100">
              {inCartStat ? "remove from cart" : "add to cart"}
            </span>
          </button>
          <button
            type="button"
            onClick={removeFromWishListHandler}
            className="text-orange-400 text-2xl cursor-pointer relative group"
          >
            <LuHeartOff className="peer" />
            <span className="absolute pointer-events-none p-1 text-white text-xs whitespace-nowrap -top-8 -left-4 transition-all duration-300 opacity-0 bg-gray-900 rounded-md peer-hover:opacity-100">
              remove from wishlist
            </span>
          </button>
          <p className="price ml-auto text-white">{price} $</p>
        </div>
      </div>
    </>
  );
}
