"use client";
import { useSelector } from "react-redux";
import SubInfoLoad from "../subInfoLoad/SubInfoLoad";
import { differenceInDays } from "date-fns";
export default function SubInfo() {
  const { subPlan, loading } = useSelector((state) => state.sub);
  const findDate = (text) => {
    let idx = text.search("T");
    let date = text.slice(0, idx).replaceAll("-", "/");
    return date;
  };
  const daysLeft = differenceInDays(subPlan && subPlan.end_date, new Date());
  return (
    <>
      {loading ? (
        <SubInfoLoad />
      ) : subPlan && (
        <div className="subscription-info w-full sm:w-[75%] p-5 mt-5 border-l-4 border-orange-500">
          <h5 className="title text-gray-400 sm:text-xl text-base">
            1 <sub className="text-orange-400">month</sub>
            {subPlan.subscription.id == 1
              ? " 4k"
              : subPlan.subscription.id == 2
              ? " HD"
              : " Full HD"}
            <sup className="text-orange-400">+</sup> package subscription.
          </h5>
          <p className="start text-gray-400 my-3">
            <span className="text-orange-400 text-lg">Starting </span>
            from {findDate(subPlan.start_date)}
          </p>
          <p className="end text-gray-400">
            <span className="text-red-400 text-lg">ending</span> on{" "}
            {findDate(subPlan.end_date)}.
          </p>
          <p className="left text-gray-400 text-sm">{daysLeft} days left.</p>
        </div>
      )}
    </>
  );
}
