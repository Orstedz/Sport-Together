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
        <div className="flex flex-col w-full md:w-1/2 p-4">
            <h2 className="text-xl font-bold text-green-700">Booking Details</h2>
            <div className="flex flex-col bg-gray-100 rounded-lg p-4 shadow mt-4">
                <h3 className="text-lg font-bold">{court.name}</h3>
                <img
                    src="/field-image.jpg"
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
                    <strong>Contact:</strong> {/* You can add contact info here */}
                </p>
            </div>

            {/* Footer Buttons */}
            <div className="flex justify-between mt-6">
                <button className="px-6 py-3 bg-gray-300 rounded hover:bg-gray-400">
                    Back
                </button>
                <button className="px-6 py-3 bg-green-500 text-white rounded hover:bg-green-600">
                    Pay
                </button>
            </div>
        </div>
    );
};

export default BookingDetails;
