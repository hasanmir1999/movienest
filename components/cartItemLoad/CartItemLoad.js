export default function CartItemLoad() {
  return (
    <div className="cart-item w-full bg-gray-800 rounded-md p-2 flex items-end justify-between my-5 animate-pulse">
      <div className="img-title-container rounded-md flex gap-5">
        {/* skeleton image */}
        <div className="w-[90px] h-[120px] bg-gray-700 rounded-md"></div>
        {/* skeleton title */}
        <div className="flex flex-col justify-center">
          <div className="h-5 w-32 bg-gray-700 rounded mb-2"></div>
          <div className="h-4 w-24 bg-gray-700 rounded"></div>
        </div>
      </div>

      <div className="price-del-btn flex items-center gap-5">
        {/* skeleton price */}
        <div className="h-5 w-10 bg-gray-700 rounded"></div>
        {/* skeleton delete btn */}
        <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
      </div>
    </div>
  );
}
