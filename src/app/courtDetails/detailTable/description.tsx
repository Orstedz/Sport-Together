import React from "react";

const Description = () => {
  return (
    <div className="flex items-start">
      <img
        src="https://via.placeholder.com/150" // Replace with actual image URL
        alt="Description"
        className="w-48 h-48 object-cover rounded-md"
      />
      <p className="ml-4 text-gray-600">
        Sân thành thắng là sân bóng đá lâu đời, mới được chủ đầu tư, nâng cấp và
        là một trong những sân bóng đẹp nhất Thủ Đức.
      </p>
    </div>
  );
};

export default Description;
