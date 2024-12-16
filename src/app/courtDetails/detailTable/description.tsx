import React from "react";

const Description: React.FC<{ des: string, image: string }> = ({ des, image }) => {
  return (
    <div className="flex items-start">
      <img
        src={`${image}`}
        alt="Description"
        className="w-5/12 h-72 object-cover rounded-md"
      />
      <p className="pl-20 ml-4 text-gray-600 text-xl">{des}</p>
    </div>
  );
};

export default Description;
