import Link from "next/link";
import { FaCartShopping } from "react-icons/fa6";
import Bage from "../badge/Badge";
import { useSelector } from "react-redux";
export default function CartIcon() {
  const {list} = useSelector(state => state.cart)

  return (
    <>
      <Link
        href={"/cart"}
        className="cart-icon w-[35px] h-[35px] md:w-[45px] md:h-[45px] rounded-full border-2 border-orange-400 text-white md:text-xl flex justify-center items-center relative"
      >
        <FaCartShopping />
        <Bage count={list.length} />
      </Link>
    </>
  );
}
