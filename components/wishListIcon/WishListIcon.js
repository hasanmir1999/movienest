import Link from "next/link";
import {FaHeart } from "react-icons/fa6";
import { useSelector } from "react-redux";

export default function WishListIcon() {
  const {user , loading} = useSelector(state => state.profile)
  return (
    <>
      <Link href={!loading && user ? (user.role == 'user' ? '/userpanel/wishlist' : '/adminpanel/wishlist') : '/signin'} className="cart-icon w-[35px] h-[35px] md:w-[45px] md:h-[45px] rounded-full border-2 border-orange-400 text-white md:text-xl flex justify-center items-center">
        <FaHeart />
      </Link>
    </>
  );
}
