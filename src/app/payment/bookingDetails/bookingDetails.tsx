import React from 'react';
import Court from '../../../interfaces/court';

const BookingDetails: React.FC<{ court: Court }> = ({ court }) => {
    return (
        <div className="flex flex-col w-full h-full p-2">
            <h2 className="font-bold text-green-700 px-2 mb-2" style={{ fontSize: '22px' }}>Booking Details</h2>
            <div className="flex flex-col bg-gray-100 rounded-lg p-4 mx-2 shadow w-full h-full">
                <h3 className="text-lg">
                    <span className="font-bold text-green-500" style={{ fontSize: '18px' }}>Court chosen: </span>
                    <span className="font-bold text-black" style={{ fontSize: '18px' }}>{court.name}</span>
                </h3>
                <img
                    src=""
                    alt="Field"
                    className="rounded mt-2 h-44 object-cover"
                />
                <p className="mt-4">
                    <span className="font-bold text-green-500" style={{ fontSize: '16px' }}>Book Time: </span>
                    <span className="font-bold text-black" style={{ fontSize: '16px' }}> 16:00 - 17:00 </span>
                </p>
                <p className="break-words" style={{ display: 'flex', flexWrap: 'wrap' }}>
                    <span className="font-bold text-green-500" style={{ fontSize: '16px', flexShrink: 0, marginRight: '8px' }}>Court Address: </span>
                    <span
                        className="font-bold text-black break-words"
                        style={{
                            fontSize: '16px',
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
                    <span className="font-bold text-green-500" style={{ fontSize: '16px' }}>Contact: </span>
                    <span className="font-bold text-black" style={{ fontSize: '16px' }}> contact </span>
                </p>
            </div>
        </div>
    );
};

export default BookingDetails;
