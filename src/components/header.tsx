import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-green-500 text-white py-4 px-6">
            <h1 className="text-2xl font-bold">SportTogether</h1>
            <nav>
                <ul className="flex space-x-4">
                    <li><a href="#" className="hover:underline">Booking</a></li>
                    <li><a href="#" className="hover:underline">Connect</a></li>
                    <li><a href="#" className="hover:underline">History</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;