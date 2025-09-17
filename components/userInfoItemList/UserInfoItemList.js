export default function UserInfoItemList({index , title}) {
  return (
    <>
      <li className="flex items-center py-2 border-t border-gray-400">
        <span className="font-bold text-white mr-5">{index +1}</span>
        <p className="name text-gray-400">{title}</p>
      </li>
    </>
  );
}
