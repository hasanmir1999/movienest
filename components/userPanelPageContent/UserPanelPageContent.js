"use client";

import PanelInfoCard from "@/components/panelInfoCard/PanelInfoCard";
import { TbTriangleFilled } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa";
import { TbTriangle } from "react-icons/tb";
import PanelOverViewInfo from "@/components/panelOverViewInfo/PanelOverViewInfo";
import SubInfo from "@/components/subInfo/SubInfo";
import { useSelector } from "react-redux";
export default function UserPanelPageContent() {
  const {total} = useSelector(state => state.library)
  const {total:wishTotal} = useSelector(state => state.wishList)
  return (
    <>
      <div className="col grow-1 sm:pl-20 sm:pr-14">
        <div className="over-view bg-black sm:mb-10 w-full min-h-svh sm:min-h-auto sm:rounded-md sm:border border-gray-400 mt-14 sm:mt-28 p-5 relative">
          <TbTriangleFilled className="absolute text-orange-400 text-2xl -left-3 top-[22px] rotate-90" />
          <h1 className="text-white text-lg sm:text-xl font-bold">Over view</h1>
          <PanelOverViewInfo />
          <SubInfo />
          <div className="row flex flex-wrap mt-5">
            <div className="col w-full sm:w-1/2 p-2">
              <PanelInfoCard
                icon={<TbTriangle className="rotate-90" />}
                title={"My moveis"}
                count={total}
                link={"/userpanel/mymovies"}
              />
            </div>
            <div className="col w-full sm:w-1/2 p-2">
              <PanelInfoCard
                icon={<FaRegHeart />}
                title={"Wishlist items"}
                count={wishTotal}
                link={"/userpanel/wishlist"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
