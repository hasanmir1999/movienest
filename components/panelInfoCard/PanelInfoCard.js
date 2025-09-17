"use client";

import Link from "next/link";

export default function PanelInfoCard({ icon, title, count, link }) {
  return (
    <>
      <Link
        href={link}
        className="panel-info-card flex items-center gap-5 bg-gray-800 p-5 rounded-md group"
      >
        <div className="icon text-orange-400 text-4xl transition-all duration-300 group-hover:text-orange-500">
          {icon}
        </div>
        <div className="info text-gray-400 text-sm">
          <p className="whitespace-nowrap">{title}</p>
          {String(count) != 'null' ? (
            <p>{String(count)}</p>
          ) : (
            <div className={`h-3 mt-1 bg-gray-600 rounded animate-pulse ${(title == 'Users' && 'w-10') || (title == 'Subscribers' && 'w-22') || (title == 'Movies' && 'w-16') }`}></div>
          )}
        </div>
      </Link>
    </>
  );
}
