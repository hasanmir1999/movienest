import Link from "next/link";

export default function FooterSocial({icon}) {
  return (
    <>
      <Link
        href={"/"}
        className="w-8 h-8 rounded-full p-2 text-gray-200 transition-all duration-300 hover:text-orange-400 bg-gray-600 flex items-center justify-center"
      >
        {icon}
      </Link>
    </>
  );
}
