export default function PanelOverViewInfoLoad() {
  return (
    <>
      <div className="row flex flex-wrap mt-5 gap-3">
        <div className="col w-full sm:w-auto">
          <div className="icon-container sm:ml-2 w-[200px] h-[200px] bg-gray-800 rounded-md flex justify-center items-center animate-pulse">
          </div>
        </div>
        <div className="col">
          <div className="info">
            <ul className="flex flex-col gap-2">
              <li className="flex items-center gap-3">
                    <div className="h-4 w-40 bg-gray-600 rounded animate-pulse"></div>
              </li>
              <li className="flex items-center gap-3">
                    <div className="h-4 w-48 my-2 bg-gray-600 rounded animate-pulse"></div>
              </li>
              <li className="flex items-center gap-3">
                    <div className="h-4 w-32 bg-gray-600 rounded animate-pulse"></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
