import React from "react";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";

const Rating = () => {
  const ratings = [5, 4, 3, 2, 1];
  const comments = [
    {
      user: "Xuân Thanh Đào Lê",
      time: "2 tuần trước",
      stars: 5,
      content:
        "Sân đẹp, ánh sáng đầy đủ, không gian rộng rãi. Bên ngoài có nhiều dụng cụ tập luyện cho mọi người.",
    },
    {
      user: "Huyền Trang",
      time: "1 tháng trước",
      stars: 3,
      content:
        "Rộng rãi, thoáng mát và trong lành, giá thành phù hợp với sinh viên. Chủ sân thân thiện.",
    },
    {
      user: "Minh Khánh Trần",
      time: "3 ngày trước",
      stars: 4,
      content:
        "Sân rất sạch sẽ và dễ tìm. Nền sân tốt, phù hợp cho các trận cầu giao hữu.",
    },
    {
      user: "Thanh Hoa Nguyễn",
      time: "5 ngày trước",
      stars: 5,
      content:
        "Chỗ để xe rộng rãi, rất an toàn. Sân chơi thoải mái, không bị trơn trượt dù trời mưa.",
    },
    {
      user: "Hoàng Dũng Lâm",
      time: "1 tuần trước",
      stars: 4,
      content:
        "Dịch vụ tốt, có chỗ nghỉ ngơi cho người chờ. Sẽ quay lại lần nữa!",
    },
    {
      user: "Quang Huy Đặng",
      time: "2 tuần trước",
      stars: 1,
      content:
        "Đội ngũ quản lý rất chuyên nghiệp, luôn hỗ trợ kịp thời. Chất lượng sân ổn định.",
    },
    {
      user: "Phương Thảo Bùi",
      time: "3 tuần trước",
      stars: 3,
      content:
        "Ánh sáng tốt nhưng hệ thống thoát nước cần cải thiện. Giá cả hợp lý.",
    },
    {
      user: "Hải Đăng Nguyễn",
      time: "1 tháng trước",
      stars: 5,
      content:
        "Không gian mát mẻ, gần nhiều quán ăn nên rất tiện sau khi chơi xong.",
    },
    {
      user: "Tuyết Mai Võ",
      time: "2 tháng trước",
      stars: 2,
      content:
        "Sân khá ổn nhưng một số khu vực cần sửa chữa. Dịch vụ đặt sân nhanh gọn.",
    },
    {
      user: "Anh Khoa Phạm",
      time: "3 tháng trước",
      stars: 4,
      content:
        "Rất thích sân này vì có nhiều cây xanh xung quanh, không gian trong lành.",
    },
  ];

  return (
    <div className="overflow-y-auto max-h-[348px] text-xl">
      {ratings.map((star) => (
        <div key={star} className="flex items-center mb-2">
          <span className="text-yellow-500 font-bold mr-2">
            {"★".repeat(star)}
          </span>
          <span className="text-gray-600">
            - {Math.floor(Math.random() * 100)} ratings
          </span>
        </div>
      ))}

      <h3 className="text-2xl font-bold text-green-600 my-4">Comments (10)</h3>
      <div className="mt-4 border rounded-md p-4 bg-white">
        {comments.map((comment, index) => (
          <div key={index} className="mb-4 border-b pb-4 last:border-b-0">
            <div className="flex items-center mb-2">
              {/* User Info */}
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                <span className="text-sm font-semibold">{comment.user[0]}</span>
              </div>
              <div>
                <p className="text-gray-800 font-bold">{comment.user}</p>
                <div className="flex items-center">
                  <div className="flex items-center">
                    <span className="text-yellow-500 text-sm">
                      {"★".repeat(comment.stars)}
                    </span>
                    <span className="text-gray-400 text-sm">
                      {"☆".repeat(5 - comment.stars)}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm ml-16">{comment.time}</p>
                </div>
              </div>
            </div>
            <div className="flex">
              <p className="text-gray-700 max-w-xl">{comment.content}</p>
              <div className="flex items-center ml-auto mt-2 text-gray-600">
                <button className="flex items-center mr-4">
                  <AiOutlineLike className="w-7 h-7" />
                  <span className="ml-2">Like (5)</span>
                </button>
                <button className="flex items-center">
                  <AiOutlineDislike className="w-7 h-7" />
                  <span className="ml-2">Dislike (1)</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rating;
