import React from "react";

const CourtInfo = () => {
  const courtInfo = {
    name: "Sân Thanh Thăng",
    address: "9 Đường số 19, phường Thanh Mỹ Lợi, TP Thủ Đức",
    rating: "⭐⭐⭐⭐",
    size: "7 người",
    amenities: ["Night lighting", "Locker rooms"],
    price: "180,000đ - 300,000đ/giờ",
  };

  return (
    <div>
      <h1>{courtInfo.name}</h1>
      <p>Địa chỉ: {courtInfo.address}</p>
      <p>Đánh giá: {courtInfo.rating}</p>
      <p>Kích thước: {courtInfo.size}</p>
      <p>Tiện ích: {courtInfo.amenities.join(", ")}</p>
      <p>Giá: {courtInfo.price}</p>
    </div>
  );
};

export default CourtInfo;
