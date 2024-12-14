import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../../components/header/header';
import TimeGridTable from './timeGrid/timeGrid';

const ProceedBooking: React.FC = () => {
    const location = useLocation();
    const { court } = location.state;
    const navigate = useNavigate();

    const [totalSquares, setTotalSquares] = useState(0);

    const handleTotalSquaresChange = (squares: number) => {
        setTotalSquares(squares);
    };

    const totalPrice = totalSquares * court.price;
    const formattedTotalPrice = new Intl.NumberFormat('en-US', { style: 'decimal' }).format(totalPrice);

    return (
        <div>
            <Header />
            <div className="flex justify-end pr-24 mt-8">
                <p className="text-sm text-green-700 underline cursor-pointer hover:text-green-500 hover:scale-110 transition-opacity duration-500 ease-in-out"
                    style={{
                        fontSize: '24px',
                        transition: 'font-weight 0.1s ease-in-out, transform 0.25s ease-in-out'
                    }}
                    onClick={() => {
                        const serializableDetails = {
                            name: court.name,
                            price: court.price,
                            description: court.description,
                            address: court.address,
                            ratings: court.ratings
                        };

                        navigate(`/booking/details`, {
                            state: { details: serializableDetails }
                        });
                    }}
                >
                    View Court Details
                </p>
            </div>
            {
                court && (
                    <div className="flex justify-center mt-8 px-5">
                        <div className="w-3/4 overflow-x-auto mr-5 border-4 border-black p-2 box-border">
                            <TimeGridTable
                                startTime='08:00'
                                endTime='22:00'
                                onTotalSquaresChange={handleTotalSquaresChange}
                            />
                        </div>
                        <div className="w-1/4 flex flex-col justify-center items-center mr-5 border-4 border-black p-2 box-border">
                            Map
                        </div>
                    </div>
                )
            }
            <div className={`fixed bottom-0 w-full bg-green-500 text-center p-8 border-t border-gray-300 transition-transform duration-500 rounded-t-3xl ${totalSquares > 0 ? 'translate-y-0' : 'translate-y-full'}`}>
                <div className="flex justify-between items-center mb-4">
                    <div
                        className="text-left text-white font-bold"
                        style={{ fontSize: '24px' }}
                    >Total Book Time: {(() => {
                        const hours = Math.floor(totalSquares / 2);
                        const halfHours = totalSquares % 2 === 1 ? " 30M" : "";

                        if (hours === 0 && halfHours) {
                            return "30M";
                        }

                        return `${hours}H${halfHours}`;
                    })()}
                    </div>
                    <div
                        className="text-right text-white font-bold"
                        style={{ fontSize: '24px' }}
                    >Total Price: {formattedTotalPrice + " VND"}</div>
                </div>
                <button
                    className="bg-yellow-500 text-white font-bold py-2 px-80 rounded-lg mt-2 hover:bg-yellow-400"
                    style={{ fontSize: '24px', borderRadius: '18px' }}
                    onClick={() => navigate('/payment', {
                        state: {
                            court,
                            totalSquares
                        }
                    })}
                >
                    CONTINUE TO PAYMENT
                </button>
            </div>
        </div >
    );
}

export default ProceedBooking;