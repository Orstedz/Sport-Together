import React from "react";

const Rating = () => {
  const ratings = [5, 4, 3, 2, 1]; // Star ratings
  const comments = [
    { user: "Người dùng 1", content: "Nội dung nhận xét 1..." },
    { user: "Người dùng 2", content: "Nội dung nhận xét 2..." },
    { user: "Người dùng 3", content: "Nội dung nhận xét 3..." },
    { user: "Người dùng 4", content: "Nội dung nhận xét 4..." },
    { user: "Người dùng 5", content: "Nội dung nhận xét 5..." },
    { user: "Người dùng 6", content: "Nội dung nhận xét 6..." },
    { user: "Người dùng 7", content: "Nội dung nhận xét 7..." },
    { user: "Người dùng 8", content: "Nội dung nhận xét 8..." },
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
        <div className="h-48 overflow-y-auto border border-gray-300 p-4 rounded-md">
          {comments.map((comment, index) => (
            <div key={index} className="mb-4 border-b pb-2">
              <p className="text-gray-800 font-semibold">{comment.user}</p>
              <p className="text-gray-600">{comment.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rating;
