"use client";

import CartItem from "@/components/cartItem/CartItem";
import { useSelector } from "react-redux";
import CartItemLoad from "../cartItemLoad/CartItemLoad";
import NoCartItem from "../noCartItem/NoCartItem";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addToLibrary } from "@/redux/slices/librarySlice";

export default function CartPageContent() {
  const { list, loading, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch()
  const checkOutHandler = async ()=>{
    if(!list[0]){
      return toast.error('Your cart is empty.')
    }
    dispatch(addToLibrary())
    toast.success('The purchase was made successfully')
  }
  return (
    <>
      <div className="cart-page bg-gray-950 py-32">
        <div className="container-cus mx-auto lg:w-[992px] xl:w-[1200px] 2xl:w-[1400px]">
          <div className="row flex flex-wrap">
            <div className="col w-full lg:w-3/5 xl:w-3/4 p-2">
              <div className="purchased-items border-2 border-orange-400 rounded-md px-5">
                {loading ? (
                  <>
                    <CartItemLoad />
                    <CartItemLoad />
                    <CartItemLoad />
                    <CartItemLoad />
                  </>
                ) : list[0] ? (
                  list.map((item) => <CartItem {...item} key={item.id} />)
                ) : (
                  <NoCartItem />
                )}
              </div>
            </div>
            <div className="col w-full lg:w-2/5  xl:w-1/4 p-2">
              <div className="bill border-2 border-gray-400 rounded-md px-5 pb-5">
                <ul>
                  {loading ? (
                    <li className="flex items-center justify-between my-5 animate-pulse">
                      <div className="title-skeleton h-4 w-32 bg-gray-700 rounded"></div>
                      <div className="price-skeleton h-4 w-16 bg-gray-700 rounded"></div>
                    </li>
                  ) : (
                    list.map((item) => (
                      <li
                        className="flex items-center justify-between my-5"
                        key={item.id}
                      >
                        <p className="title text-gray-300">{item.title}</p>
                        <p className="price text-gray-400">{item.price}$</p>
                      </li>
                    ))
                  )}
                </ul>
                <div
                  className={`${
                    !list[0] && "hidden"
                  } line bg-gray-400 w-full mx-auto h-0.5`}
                ></div>
                <div className="total flex justify-between items-center mt-5">
                  <p className="title text-gray-300">Total</p>
                  <p className="title text-gray-400">{totalPrice}$</p>
                </div>
                <div className="btn text-center mt-5">
                  <button onClick={checkOutHandler} className="text-gray-300 border-2 border-orange-400 rounded-xl py-1 w-full cursor-pointer">
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
