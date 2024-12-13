import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/header/header';
import RandQRCode from './genQR/genQR';

const ProceedPayment: React.FC = () => {
    const navigate = useNavigate();

    const [showPopup, setShowPopup] = useState(false);
    const handleButtonClick = () => {
        setShowPopup(true);
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-50 overflow-hidden">
            <Header />
            <div className="mt-8 px-4">
                <div className="flex items-center relative">
                    <button
                        className="absolute top-8 left-28 px-10 py-3 border-2 border-green-700 text-green-700 rounded-lg hover:bg-green-700 hover:text-white text-lg font-bold"
                        onClick={() => navigate('/payment')}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061A1.125 1.125 0 0 1 21 8.689v8.122ZM11.25 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061a1.125 1.125 0 0 1 1.683.977v8.122Z" />
                        </svg>
                    </button>
                    <h1
                        className="flex-grow text-3xl font-bold text-green-600 mb-8 text-center"
                        style={{ fontSize: '38px' }}>
                        SCAN QR CODE AND FINISH PAYMENT
                    </h1>
                </div>
            </div>

            <div className="flex justify-center mt-8">
                <div className="border-2 border-gray-300 p-4 rounded-lg bg-white shadow-md">
                    <RandQRCode />
                </div>
            </div>

            <div className="text-center mt-8 px-4">
                <p className="text-gray-700 text-lg mb-2" style={{ fontSize: '22px' }}>
                    Please finish payment within 10 minutes
                </p>
                <p className="text-gray-700 text-lg mb-2 font-bold" style={{ fontSize: '22px' }}>
                    Once done, kindly press the button below
                </p>
                <button
                    className="px-8 py-4 bg-green-700 text-white rounded-lg hover:bg-green-600 text-lg font-bold"
                    style={{ fontSize: '32px' }}
                    onClick={handleButtonClick}
                >
                    Already Transferred
                </button>
            </div>

            {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-10 rounded-lg shadow-lg text-center">
                        <p
                            className="text-lg font-bold"
                            style={{ fontSize: '30px' }}
                        >Thank you for booking with SportTogether</p>
                        <button
                            className="mt-8 px-8 py-4 border-2 border-green-700 text-green-700 rounded-lg hover:bg-green-700 hover:text-white font-bold"
                            style={{ fontSize: '18px' }}
                            onClick={() => setShowPopup(false)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProceedPayment;
