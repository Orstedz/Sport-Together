import React from "react";

const Header: React.FC = () => {
  return (
    <div className="relative w-full h-16 bg-green-500 flex items-center px-4 shadow-md">
      <div
        className="absolute top-0 left-[-20px] w-80 h-full bg-green-600 text-white font-extrabold text-2xl uppercase flex items-center justify-center"
        style={{
          clipPath: "polygon(0 0, 100% 0, 87% 100%, 0% 100%)",
        }}
      >
        Sporttogether
      </div>
    </div>
  );
};

export default Header;
