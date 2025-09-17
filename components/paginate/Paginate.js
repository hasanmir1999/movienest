import { TbTriangleFilled } from "react-icons/tb";
import ReactPaginate from "react-paginate";

export default function PaginatedItems({
  pageCount,
  handlePageClick,
  currentPage,
}) {
  return (
    <>
      <ReactPaginate
        previousLabel={<TbTriangleFilled />}
        nextLabel={<TbTriangleFilled />}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        forcePage={currentPage - 1}
        containerClassName="flex justify-center mt-auto pt-5 gap-2"
        pageClassName="px-3 py-1 border border-gray-400 text-gray-300 rounded cursor-pointer"
        activeClassName="text-gray-300 border-orange-400"
        previousClassName="cursor-pointer text-orange-400 -rotate-90 text-2xl"
        nextClassName="cursor-pointer text-orange-400 rotate-90 text-2xl"
        breakClassName="px-3 py-1 text-gray-300 p-3 border border-gray-400 rounded tracking-[3px]"
      />
    </>
  );
}
