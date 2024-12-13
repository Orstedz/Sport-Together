import React from "react";

const Description = () => {
  return (
    <div className="flex items-start">
      <img
        src="https://via.placeholder.com/300x150" // Replace with actual image URL
        alt="Description"
        className="w-5/12 h-72 object-cover rounded-md"
      />
      <p className="pl-20 ml-4 text-gray-600 text-xl">
        Sân thành thắng là sân bóng đá lâu đời, mới được chủ đầu tư, nâng cấp và
        là một trong những sân bóng đẹp nhất Thủ Đức.
      </p>
    </div>
  );
};

export default Description;
