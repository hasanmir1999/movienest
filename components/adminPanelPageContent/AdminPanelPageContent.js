"use client";
import PanelInfoCard from "@/components/panelInfoCard/PanelInfoCard";
import { TbTriangleFilled } from "react-icons/tb";
import { BiMoviePlay } from "react-icons/bi";
import { LuUserRound } from "react-icons/lu";
import { PiShootingStarBold } from "react-icons/pi";
import PanelOverViewInfo from "@/components/panelOverViewInfo/PanelOverViewInfo";
import { useEffect, useState } from "react";
import { fetchWithToken } from "@/utils/fetchWithToken";
import { FaRegHeart } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { TbTriangle } from "react-icons/tb";
import SubInfo from "../subInfo/SubInfo";

export default function AdminPanelPageContent() {
  const [info, setInfo] = useState(null);
  const { total } = useSelector((state) => state.library);
  const { total: wishTotal } = useSelector((state) => state.wishList);
  useEffect(() => {
    const loadData = async () => {
      const data = await fetchWithToken(
        "https://movienest.liara.run/api/admin/dashboard/overview"
      );
      setInfo(data);
    };

    loadData();
  }, []);

  return (
    <>
      <div className="col grow-1 sm:pl-20 sm:pr-14">
        <div className="over-view bg-black w-full min-h-svh sm:min-h-auto sm:rounded-md sm:border border-gray-400 mt-14 sm:mt-28 p-5 relative">
          <TbTriangleFilled className="absolute text-orange-400 text-2xl -left-3 top-[22px] rotate-90" />
          <h1 className="text-white text-lg sm:text-xl font-bold">Over view</h1>
          <PanelOverViewInfo />
          <SubInfo />
          <div className="row flex flex-wrap mt-5">
            <div className="col w-full sm:w-1/2 lg:w-1/4 p-2">
              <PanelInfoCard
                icon={<LuUserRound />}
                title={"Users"}
                count={info && info.users_count}
                link={"/adminpanel/users"}
              />
            </div>
            <div className="col w-full sm:w-1/2 lg:w-1/4 p-2">
              <PanelInfoCard
                icon={<PiShootingStarBold />}
                title={"Subscribers"}
                count={info && info.subs_count}
                link={"/adminpanel/users"}
              />
            </div>
            <div className="col w-full sm:w-1/2 lg:w-1/4 p-2">
              <PanelInfoCard
                icon={<BiMoviePlay />}
                title={"Movies"}
                count={info && info.moives_count}
                link={"/adminpanel/movies"}
              />
            </div>
            <div className="col w-full sm:w-1/2 lg:w-1/4 p-2">
              <PanelInfoCard
                icon={<TbTriangle className="rotate-90" />}
                title={"My moveis"}
                count={total}
                link={"/adminpanel/mymovies"}
              />
            </div>
            <div className="col w-full sm:w-1/2 lg:w-1/4 p-2">
              <PanelInfoCard
                icon={<FaRegHeart />}
                title={"Wishlist items"}
                count={wishTotal}
                link={"/adminpanel/wishlist"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
