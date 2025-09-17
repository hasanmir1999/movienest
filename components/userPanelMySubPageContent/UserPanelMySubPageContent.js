import SubCard from "@/components/subCard/SubCard";
import SubInfo from "@/components/subInfo/SubInfo";
import { TbTriangleFilled } from "react-icons/tb";

export default function UserPanelMySubPageContent() {
  return (
    <>
      <div className="col admin-panel-movies grow-1 sm:px-4 md:pl-20 md:pr-14">
        <div className="movies-list bg-black w-full min-h-svh sm:min-h-auto sm:rounded-md sm:border sm:border-gray-400 mt-14 sm:mt-28 p-5 relative sm:mb-10">
          <TbTriangleFilled className="absolute text-orange-400 text-2xl -left-3 top-[22px] rotate-90 " />
          <div className="section-header flex justify-between items-center">
            <h1 className="text-white text-xl font-bold">My subscription</h1>
          </div>
          <SubInfo />
          <div className="row flex flex-wrap justify-center mt-10">
            <div className="col w-full lg:w-1/2 xl:w-1/3 p-2">
              <SubCard
                id={2}
                price={4}
                spec={false}
                title={"HD + Package"}
                HD={true}
              />
            </div>
            <div className="col w-full lg:w-1/2 xl:w-1/3 p-2">
              <SubCard
                id={1}
                price={24}
                spec={true}
                title={"4K Package"}
                HD={false}
              />
            </div>
            <div className="col w-full lg:w-1/2 xl:w-1/3 p-2">
              <SubCard
                id={3}
                price={12}
                spec={false}
                title={"Full HD Package"}
                HD={false}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
