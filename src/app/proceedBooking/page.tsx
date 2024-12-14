import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../../components/header/header';
import TimeGridTable from './timeGrid/timeGrid';

const ProceedBooking: React.FC = () => {
    const location = useLocation();
    const { court } = location.state;
    const navigate = useNavigate();

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
                            description: court.description,
                            address: court.address,
                            price: court.price,
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
                            <TimeGridTable courtPrice={court.price} startTime='08:00' endTime='22:00' />
                        </div>
                        <div className="w-1/4 flex justify-center items-center mr-5 border-4 border-black p-2 box-border">
                            <div>Another component</div>
                        </div>
                    </div>
                )
            }
        </div >
    );
}

export default ProceedBooking;