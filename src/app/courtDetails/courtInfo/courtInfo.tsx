import React from "react";

const CourtInfo = () => {
  return (
    <div className="flex p-4 mt-10">
      {/* Banner Image */}
      <img
        src="https://via.placeholder.com/150" // Replace with actual image URL
        alt="Stadium"
        className="w-36 h-36 object-cover rounded-3xl"
      />
      {/* Banner Content */}
      <div className="ml-4 flex-1 pl-8 flex justify-center flex-col">
        <h2 className="text-3xl font-bold text-green-600 pb-3">
          SÂN THÀNH THẮNG
        </h2>
        <p className="text-gray-600">
          9 Đường số 19, phường Thạnh Mỹ Lợi, TP Thủ Đức
        </p>
        <p className="text-gray-600">
          <span className="text-gray-800 font-semibold">Price:</span> 180,000đ -
          300,000đ/ giờ
        </p>
      </div>
      {/* Navigation Link */}
      <div className="flex items-end mb-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
          />
        </svg>
        <a href="#" className="font-bold text-gray-500 hover:underline ml-2">
          Tìm đường
        </a>
      </div>
    </div>
  );
};

export default CourtInfo;
