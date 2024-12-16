import React from "react";

const CourtInfo: React.FC<{ details: any }> = ({ details }) => {
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "decimal",
  }).format(details.price);

  return (
    <div className="flex p-4 mt-10">
      <img
        src={`${details.image}`}
        alt="Stadium"
        className="w-44 h-44 object-cover rounded-3xl"
      />

      <div className="ml-4 flex-1 pl-8 flex justify-center flex-col">
        <h2 className="text-5xl font-bold text-green-600 pb-3">
          {details.name}
        </h2>
        <p className="text-gray-600 text-xl">{details.address}</p>
        <p className="text-gray-600 text-xl">
          <span className="text-gray-800 font-semibold">Price: </span>
          {formattedPrice} VND
        </p>
      </div>

      <div className="flex items-end mb-5 text-gray-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
          />
        </svg>
        <a
          href="#"
          className="text-xl font-bold text-gray-500 hover:underline hover:text-green-600 ml-2"
        >
          Map
        </a>
      </div>
    </div>
  );
};

export default CourtInfo;
