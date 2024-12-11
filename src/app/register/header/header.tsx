import React from "react";

const Header: React.FC = () => {
  return (
    <div className="relative w-full h-16 bg-green-500 flex items-center px-4 shadow-md">
      <div className="absolute top-0 left-0 w-72 h-full bg-green-600 clip-path-skew"></div>

      <h1 className="text-white font-extrabold text-2xl uppercase z-10">
        Sporttogether
      </h1>

      <style>
        {`
          .clip-path-skew {
            clip-path: polygon(0 0, 100% 0, 87% 100%, 0% 100%);
          }
        `}
      </style>
    </div>
  );
};

export default Header;
