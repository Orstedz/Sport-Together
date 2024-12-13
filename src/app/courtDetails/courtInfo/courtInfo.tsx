import React from "react";

const CourtInfo = () => {
  return (
    <div className="flex items-center p-4 border-b">
      {/* Banner Image */}
      <img
        src="https://via.placeholder.com/150" // Replace with actual image URL
        alt="Stadium"
        className="w-36 h-36 object-cover rounded-md"
      />
      {/* Banner Content */}
      <div className="ml-4 flex-1">
        <h2 className="text-2xl font-bold text-green-600">SÂN THÀNH THẮNG</h2>
        <p className="text-gray-600">
          9 Đường số 19, phường Thạnh Mỹ Lợi, TP Thủ Đức
        </p>
        <p className="mt-2 text-gray-800 font-semibold">
          Giá sân: 180,000đ - 300,000đ/ giờ
        </p>
      </div>
      {/* Navigation Link */}
      <div>
        <a href="#" className="text-blue-600 hover:underline">
          Tìm đường
        </a>
      </div>
    </div>
  );
};

export default CourtInfo;
