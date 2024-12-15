import React, { useState } from "react";

const Header: React.FC = () => {

    const [showOptions, setShowOptions] = useState(false);

    const toggleOptions = () => {
        setShowOptions(!showOptions);
    };

    return (
        <header className="relative w-full h-16 bg-green-500 flex items-center px-4 shadow-md">
            <div
                className="absolute top-0 left-[-20px] w-80 h-full bg-green-600 text-white font-extrabold text-2xl uppercase flex items-center justify-center"
                style={{
                    clipPath: "polygon(0 0, 100% 0, 87% 100%, 0% 100%)",
                }}
            >
                Sporttogether
            </div>
            <nav className="ml-auto h-full">
                <ul className="flex h-full">
                    {/* Booking */}
                    <li className="h-full">
                        <a
                            href="/booking"
                            className="h-full w-52 text-white bg-green-500 transition-all hover:bg-white hover:text-green-500 flex items-center justify-center uppercase"
                            style={{
                                fontSize: "24px",
                                clipPath: "polygon(13% 0, 100% 0, 87% 100%, 0% 100%)",
                            }}
                        >
                            Booking
                        </a>
                    </li>
                    {/* Connect */}
                    <li className="h-full">
                        <a
                            href="#"
                            className="h-full w-52 text-white bg-green-500 transition-all hover:bg-white hover:text-green-500 flex items-center justify-center uppercase"
                            style={{
                                fontSize: "24px",
                                clipPath: "polygon(13% 0, 100% 0, 87% 100%, 0% 100%)",
                            }}
                        >
                            Connect
                        </a>
                    </li>
                    {/* History */}
                    <li className="h-full">
                        <a
                            href="/history"
                            className="h-full w-52 text-white bg-green-500 transition-all hover:bg-white hover:text-green-500 flex items-center justify-center uppercase"
                            style={{
                                fontSize: "24px",
                                clipPath: "polygon(13% 0, 100% 0, 87% 100%, 0% 100%)",
                            }}
                        >
                            History
                        </a>
                    </li>
                    {/* User Icon */}
                    <li className="flex items-center justify-center px-6">
                        <div className="relative">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center cursor-pointer" onClick={toggleOptions}>
                                <span className="text-green-500 font-bold">{/**@todo user logo component */}</span>
                            </div>
                            {showOptions && (
                                <div className="absolute top-14 right-0 bg-white shadow-lg rounded-md p-2">
                                    <ul>
                                        <li className="py-1 px-4 hover:bg-gray-200 cursor-pointer">Information</li>
                                        <li className="py-1 px-4 hover:bg-gray-200 cursor-pointer">Manage</li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </li>
                </ul>
            </nav>
        </header >
    );
};

export default Header;
