"use client";

import { deleteCart } from "@/redux/slices/cartSlice";
import Image from "next/image";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

export default function CartItem({ title, price, cover_url, id }) {
  const dispatch = useDispatch()
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

  return (
    <>
      <div className="cart-item w-full bg-gray-800 rounded-md p-2 flex items-end justify-between my-5">
        <div className="img-title-container rounded-md flex gap-5">
          <div className="img-container w-[90px] h-[120px] relative overflow-hidden rounded-md">
            <Image
              src={cover_url}
              className="object-cover w-full h-full"
              fill
              alt="slide1"
            />
          </div>
          <div className="title text-gray-300 text-xl">{title}</div>
        </div>
        <div className="price-del-btn flex items-center gap-5">
          <p className="price text-gray-400">{price}$</p>
          <button
            onClick={removeFromCartHandler}
            type="button"
            className="relative group cursor-pointer"
          >
            <RiDeleteBin5Line className="text-gray-300 text-2xl" />
            <span className="absolute text-gray-300 bg-gray-950 py-0.5 px-1 text-xs rounded-md whitespace-nowrap right-0 -top-6 opacity-0 pointer-events-none group-hover:opacity-100 transition-all duration-300">
              remove from cart
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
