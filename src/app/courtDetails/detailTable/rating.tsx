import React from "react";

const Rating = () => {
  const ratings = [
    { stars: "⭐⭐⭐⭐⭐", count: 50, width: "80%" },
    { stars: "⭐⭐⭐⭐", count: 30, width: "60%" },
    { stars: "⭐⭐⭐", count: 8, width: "20%" },
    { stars: "⭐⭐", count: 3, width: "10%" },
    { stars: "⭐", count: 0, width: "0%" },
  ];

  return (
    <div>
      <h2>Đánh giá</h2>
      {ratings.map((rating, index) => (
        <div key={index} style={{ marginBottom: "10px" }}>
          <div>{`${rating.stars} (${rating.count} đánh giá)`}</div>
          <div
            style={{
              backgroundColor: "lightgray",
              height: "10px",
              width: rating.width,
            }}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default Rating;
