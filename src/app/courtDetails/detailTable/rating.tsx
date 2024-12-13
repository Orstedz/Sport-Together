import React from "react";

const Rating = () => {
  const ratings = [5, 4, 3, 2, 1]; // Star ratings
  const comments = [
    { user: "Người dùng 1", content: "Nội dung nhận xét 1..." },
    { user: "Người dùng 2", content: "Nội dung nhận xét 2..." },
    { user: "Người dùng 3", content: "Nội dung nhận xét 3..." },
  ];

  return (
    <div>
      {/* Star Ratings */}
      {ratings.map((star) => (
        <div key={star} className="flex items-center mb-2">
          <span className="text-yellow-500 font-bold mr-2">
            {"★".repeat(star)}
          </span>
          <span className="text-gray-600">
            - {Math.floor(Math.random() * 100)} lượt đánh giá
          </span>
        </div>
      ))}

      {/* Comments Section */}
      <div className="mt-4">
        <h3 className="text-lg font-bold text-gray-700 mb-2">Nhận xét</h3>
        {comments.map((comment, index) => (
          <div key={index} className="mb-4 border-b pb-2">
            <p className="text-gray-800 font-semibold">{comment.user}</p>
            <p className="text-gray-600">{comment.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rating;
