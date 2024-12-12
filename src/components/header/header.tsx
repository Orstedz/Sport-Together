import React from "react";

const Header: React.FC = () => {
    return (
        <header className="bg-green-500 w-full flex px-6" style={{ margin: 0, padding: 0 }}>
            <h1 className="block h-full px-32 py-4 font-bold text-white bg-green-700" style={{
                fontSize: "34px",
                clipPath: "polygon(0 0, 100% 0, 93% 100%, 0% 100%)",
            }}>
                SPORTTOGETHER
            </h1>
            <nav className="ml-auto">
                <ul className="flex">
                    {/* BOOKING */}
                    <li className="flex-1">
                        <a
                            href="#"
                            className="block h-full px-28 py-4 text-white bg-green-500 transition-all hover:bg-white hover:text-green-500 flex items-center justify-center"
                            style={{
                                fontSize: "34px",
                                clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0% 100%)",
                            }}
                        >
                            BOOKING
                        </a>
                    </li>
                    {/* CONNECT */}
                    <li className="flex-1">
                        <a
                            href="#"
                            className="block h-full px-28 py-4 text-white bg-green-500 transition-all hover:bg-white hover:text-green-500 flex items-center justify-center"
                            style={{
                                fontSize: "34px",
                                clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0% 100%)",
                            }}
                        >
                            CONNECT
                        </a>
                    </li>
                    {/* HISTORY */}
                    <li className="flex-1">
                        <a
                            href="#"
                            className="block h-full px-28 py-4 text-white bg-green-500 transition-all hover:bg-white hover:text-green-500 flex items-center justify-center"
                            style={{
                                fontSize: "34px",
                                clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0% 100%)",
                            }}
                        >
                            HISTORY
                        </a>
                    </li>
                    {/* User Icon */}
                    <li className="flex items-center justify-center px-6">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                            <span className="text-green-500 font-bold">{/**@todo user logo component */}</span>
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
