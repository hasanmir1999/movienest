'use client'


import { FaRegCopyright } from "react-icons/fa6";

export default function Copy({hideLayout}) {
  return (
    <>
      <div className={`${hideLayout && 'hidden'} copy-right bg-black p-4`}>
        <div className="container-cus mx-auto lg:w-[992px] xl:w-[1200px] 2xl:w-[1400px]">
          <div className="row flex flex-col md:flex-row items-center">
            <p className="text-gray-300 text-xs flex items-center gap-2">
              All rights are reserved for the Movienest site.
              <FaRegCopyright />
            </p>
            <div className="policy-terms flex gap-5 mt-3 md:mt-0 md:ml-auto">
              <p className="text-xs text-gray-300 transition-all duration-300 hover:text-white">
                Privacy Policy
              </p>
              <p className="text-xs text-gray-300 transition-all duration-300 hover:text-white">
                Terms of Service
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
