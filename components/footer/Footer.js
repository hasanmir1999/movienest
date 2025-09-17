"use client";

import Image from "next/image";
import Copy from "../copy/Copy";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { TbTriangleFilled } from "react-icons/tb";
import { usePathname } from "next/navigation";
import FooterSocial from "../footerSocial/FooterSocial";

export default function Footer() {
  const pathname = usePathname();
  const hideLayout =
    pathname.startsWith("/signin") ||
    pathname.startsWith("/signup") ||
    pathname.startsWith("/adminpanel") ||
    pathname.startsWith("/userpanel");

  return (
    <>
      <div
        className={`${hideLayout && "hidden"} footer px-5 py-10 bg-gray-950`}
      >
        <div className="container-cus mx-auto lg:w-[992px] xl:w-[1200px] 2xl:w-[1400px]">
          <div className="row flex flex-wrap">
            <div className="col w-full md:w-1/3 p-2">
              <div className="about-text relative pl-5">
                <div className="vertical-line hidden md:block absolute h-full w-1 bg-orange-400 left-0 top-0 drop-shadow-md shadow-orange-400" />
                <h5 className="text-white text-xl font-bold mb-5 flex items-center gap-2 justify-center md:justify-start">
                  Movienest
                  <TbTriangleFilled className="rotate-90 !text-orange-400" />
                </h5>
                <p className="text-gray-300 text-sm md:text-left text-center line-clamp-4">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Omnis unde perspiciatis excepturi vitae quia quo itaque ipsam,
                  soluta a harum at magnam repudiandae quam, placeat, veritatis
                  odio corporis tenetur quas doloremque natus recusandae
                  ratione! Molestias repudiandae velit libero officia distinctio
                  error ipsum doloribus. Suscipit atque magni ipsa qui natus
                  totam, praesentium itaque nostrum, ea tenetur quos odit.
                </p>
              </div>
            </div>
            <div className="col w-full md:w-1/3 p-2 ml-auto">
              <div className="logo flex justify-center md:justify-end">
                <Image
                  src={"/assets/logo.png"}
                  className="lg:w-28 xl:w-32"
                  priority
                  width={100}
                  height={100}
                  alt="logo"
                />
              </div>
              <div className="socials-container flex items-center justify-center md:justify-end gap-2">
                <FooterSocial icon={<FaFacebookF/>}/>
                <FooterSocial icon={<FaInstagram/>}/>
                <FooterSocial icon={<FaXTwitter/>}/>
                <FooterSocial icon={<FaYoutube/>}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Copy hideLayout={hideLayout} />
    </>
  );
}
