import React from 'react';

interface Court {
    id: string;
    name: string;
    address: string;
    rating: number;
    size: string;
    feature: string;
    price: string;
}

const BookingDetails: React.FC<{ court: Court }> = ({ court }) => {
    return (
        <div className="flex flex-col w-full p-4 ">
            <h2 className="text-xl font-bold text-green-700">Booking Details</h2>
            <div className="flex flex-col bg-gray-100 rounded-lg p-4 shadow mt-4 w-full">
                <h3 className="text-lg font-bold">{"Court chosen: " + court.name}</h3>
                <img
                    src=""
                    alt="Field"
                    className="rounded mt-2 h-48 object-cover"
                />
                <p className="mt-4">
                    <strong>Time:</strong> 16:00 - 17:30
                </p>
                <p>
                    <span className="font-bold">Address: </span>
                    {court.address}
                </p>
                <p>
                    <strong>Contact:</strong>
                </p>
            </div>
        </div>
    );
};

export default BookingDetails;
