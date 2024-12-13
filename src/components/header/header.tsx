import React from "react";
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
    const navigate = useNavigate();

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
                            href="#"
                            className="h-full w-52 text-white bg-green-500 transition-all hover:bg-white hover:text-green-500 flex items-center justify-center uppercase"
                            style={{
                                fontSize: "24px",
                                clipPath: "polygon(13% 0, 100% 0, 87% 100%, 0% 100%)",
                            }}
                            onClick={() => navigate('/browseBooking')}
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
                            href="#"
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
                        <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
                            <span className="text-green-500 font-bold">{/**@todo user logo component */}</span>
                        </div>
                    </li>
                </ul>
            </nav>
        </header >
    );
};

export default Header;
