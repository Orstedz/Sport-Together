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
            <h2 className="text-xl font-bold text-green-700" style={{ fontSize: '28px' }}>Booking Details</h2>
            <div className="flex flex-col bg-gray-100 rounded-lg p-4 shadow mt-4 w-full">
                <h3 className="text-lg">
                    <span className="font-bold text-green-500" style={{ fontSize: '22px' }}>Court chosen: </span>
                    <span className="font-bold text-black" style={{ fontSize: '22px' }}>{court.name}</span>
                </h3>
                <img
                    src=""
                    alt="Field"
                    className="rounded mt-2 h-48 object-cover"
                />
                <p className="mt-4">
                    <span className="font-bold text-green-500" style={{ fontSize: '22px' }}>Book Time: </span>
                    <span className="font-bold text-black" style={{ fontSize: '22px' }}> 16:00 - 17:00 </span>
                </p>
                <p className="break-words" style={{ display: 'flex', flexWrap: 'wrap' }}>
                    <span className="font-bold text-green-500" style={{ fontSize: '22px', flexShrink: 0, marginRight: '8px' }}>Court Address: </span>
                    <span
                        className="font-bold text-black break-words"
                        style={{
                            fontSize: '22px',
                            overflowWrap: 'break-word',
                            wordWrap: 'break-word',
                            whiteSpace: 'normal',
                            width: '380px',
                            maxWidth: '100%',
                            wordBreak: 'break-word',
                            display: 'inline-block',
                        }}
                    >
                        {court.address}
                    </span>
                </p>
                <p>
                    <span className="font-bold text-green-500" style={{ fontSize: '22px' }}>Contact: </span>
                    <span className="font-bold text-black" style={{ fontSize: '22px' }}> contact </span>
                </p>
            </div>
        </div>
    );
};

export default BookingDetails;
