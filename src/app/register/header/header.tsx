import React from "react";

const Header: React.FC = () => {
  return (
    <div className="relative w-full h-16 bg-green-600 flex items-center px-4 shadow-md">
      <div className="absolute top-0 left-0 w-16 h-16 bg-green-700 clip-path-triangle"></div>
      <h1 className="text-white font-bold text-lg uppercase">Sporttogether</h1>
      <style>
        {`
          .clip-path-triangle {
            clip-path: polygon(0 0, 100% 0, 0 100%);
          }
        `}
      </style>
    </div>
  );
};

export default Header;
