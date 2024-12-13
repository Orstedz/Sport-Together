/**
 * @dev implement later
 */

import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Court from '../../interfaces/court';

const ProceedBooking: React.FC<Court> = () => {
    const location = useLocation();
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

    return (
        <div>
            <h1>Proceed Payment</h1>
            {court && (
                <div>
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
                    <p>Total Price: {totalPrice}VND</p>
                </div>
            )}
        </div>
    );
}

export default ProceedBooking;