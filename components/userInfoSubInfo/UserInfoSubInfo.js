"use client";
import { useEffect, useState } from "react";
// import SubInfoLoad from "../subInfoLoad/SubInfoLoad";
import { differenceInDays } from "date-fns";
import { fetchWithToken } from "@/utils/fetchWithToken";

export default function UserInfoSubInfo({ id }) {
  const [subPlan, setSubPlan] = useState(null);

  const findDate = (text) => {
    if (!text) return "";
    let idx = text.search("T");
    let date = text.slice(0, idx).replaceAll("-", "/");
    return date;
  };

const daysLeft = subPlan ? differenceInDays(new Date(subPlan.end_date), new Date()) : 0;

useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await fetchWithToken(
        `https://movienest.liara.run/api/admin/users/active-subscription/${id}`
      );
      setSubPlan(res);
    } catch (error) {
      console.error("Failed to fetch subscription:", error);
      setSubPlan(null);
    }
  };

  if (id) {
    fetchData();
  }
}, [id]);

  return (
    <>
      {!subPlan ? (
        <div className="no-sub-info w-full sm:w-[75%] p-5 mt-5 border-l-4 border-red-500">
          <p className="text-gray-400">
            This user does not have an active subscription.
          </p>
        </div>
      ) : (
        <div className="subscription-info w-full sm:w-[75%] p-5 mt-5 border-l-4 border-orange-500">
          <h5 className="title text-gray-400 sm:text-xl text-base">
            1 <sub className="text-orange-400">month</sub>
            {subPlan && subPlan.subscription.id == 1
              ? " 4k"
              : subPlan && subPlan.subscription.id == 2
              ? " HD"
              : " Full HD"}
            <sup className="text-orange-400">+</sup> package subscription.
          </h5>
          <p className="start text-gray-400 my-3">
            <span className="text-orange-400 text-lg">Starting </span>
            from {findDate(subPlan && subPlan.start_date)}
          </p>
          <p className="end text-gray-400">
            <span className="text-red-400 text-lg">ending</span> on{" "}
            {findDate(subPlan && subPlan.end_date)}.
          </p>
          <p className="left text-gray-400 text-sm">{daysLeft} days left.</p>
        </div>
      )}
    </>
  );
}
