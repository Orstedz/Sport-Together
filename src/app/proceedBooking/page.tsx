/**
 * @dev implement later
 */

import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Court from '../../interfaces/court';

const ProceedBooking: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const court = location.state?.court as Court;
    const [selectedSquares, setSelectedSquares] = useState<number[]>([]);

    const handleSquareClick = (index: number) => {
        setSelectedSquares(prevSelectedSquares =>
            prevSelectedSquares.includes(index)
                ? prevSelectedSquares.filter(i => i !== index)
                : [...prevSelectedSquares, index]
        );
    };

    const totalPrice = selectedSquares.length * court.price;
    const formattedTotalPrice = new Intl.NumberFormat('en-US', { style: 'decimal' }).format(totalPrice);

    return (
        <div>
            <h1>Proceed Payment</h1>
            {court && (
                <div>
                    <h2>{court.name}</h2>
                    <p>{court.address}</p>
                    <table>
                        <tbody>
                            {Array.from({ length: 5 }).map((_, rowIndex) => (
                                <tr key={rowIndex}>
                                    {Array.from({ length: 5 }).map((_, colIndex) => {
                                        const index = rowIndex * 5 + colIndex;
                                        return (
                                            <td
                                                key={colIndex}
                                                onClick={() => handleSquareClick(index)}
                                                style={{
                                                    width: '50px',
                                                    height: '50px',
                                                    border: '1px solid black',
                                                    backgroundColor: selectedSquares.includes(index) ? 'green' : 'white',
                                                    cursor: 'pointer'
                                                }}
                                            />
                                        );
                                    })}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <p>Total Price: {formattedTotalPrice} VND</p>
                    <button
                        className="px-8 py-3 border-2 border-green-700 text-green-700 rounded-lg hover:bg-green-700 hover:text-white ml-24 text-lg font-bold"
                        style={{ fontSize: '22px' }}
                        onClick={() => navigate('/payment', { state: { court, totalPrice } })}>
                        Proceed To Payment
                    </button>
                </div>
            )}
        </div>
    );
}

export default ProceedBooking;