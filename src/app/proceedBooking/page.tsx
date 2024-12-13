/**
 * @dev implement later
 */

import React from 'react';
import { useLocation } from 'react-router-dom';
import Court from '../../interfaces/court';

const ProceedBooking: React.FC<Court> = () => {
    const location = useLocation();
    const court = location.state?.court as Court;

    return (
        <div>
            <h1>Proceed Payment</h1>
            {court && (
                <div>
                    <h2>{court.name}</h2>
                    <p>{court.address}</p>
                </div>
            )}
        </div>
    );
}

export default ProceedBooking;