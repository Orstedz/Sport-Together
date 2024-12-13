import React from "react";

const Rating = () => {
  const ratings = [5, 4, 3, 2, 1]; // Star ratings
  const comments = [
    {
      user: "Xuân Thanh Đào Lê",
      time: "2 tuần trước",
      content:
        "Sân đẹp, ánh sáng đầy đủ, không gian rộng rãi. Bên ngoài có nhiều dụng cụ tập luyện cho mọi người.",
    },
    {
      user: "Kim Sơn Tăng",
      time: "1 tháng trước",
      content:
        "Rộng rãi, thoáng mát và trong lành, giá thành phù hợp với sinh viên. Chủ sân thân thiện.",
    },
  ];

  return (
    <div className="overflow-y-auto max-h-[348px]">
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

      <h3 className="text-lg font-bold text-gray-700 mb-4">Bình luận</h3>
      <div className="mt-4 border rounded-md p-4 bg-white">
        {comments.map((comment, index) => (
          <div key={index} className="mb-4 border-b pb-4 last:border-b-0">
            <div className="flex items-center mb-2">
              {/* User Info */}
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                <span className="text-sm font-semibold">{comment.user[0]}</span>
              </div>
              <div>
                <p className="text-gray-800 font-semibold">{comment.user}</p>
                <p className="text-gray-500 text-sm">{comment.time}</p>
              </div>
            </div>
            {/* Comment Content */}
            <p className="text-gray-700">{comment.content}</p>
            {/* Like/Dislike Actions */}
            <div className="flex items-center mt-2 text-gray-600">
              <button className="flex items-center mr-4">
                {/* Like Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 mr-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904"
                  />
                </svg>
                <span>Hữu ích</span>
              </button>
              <button className="flex items-center">
                {/* Dislike Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 mr-1 text-red-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294"
                  />
                </svg>
                <span>Không hữu ích</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rating;
