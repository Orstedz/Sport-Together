import React from 'react';
import Header from '../../components/header/header';
import RandQRCode from './genQR/genQR';

const ProceedPayment: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50 overflow-hidden">
            <Header />
            <div className="mt-16 px-4">
                <div className="flex items-center relative">
                    <button
                        className="absolute top-8 left-28 px-10 py-3 border-2 border-green-700 text-green-700 rounded-lg hover:bg-green-700 hover:text-white text-lg font-bold"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061A1.125 1.125 0 0 1 21 8.689v8.122ZM11.25 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061a1.125 1.125 0 0 1 1.683.977v8.122Z" />
                        </svg>
                    </button>
                    <h1 className="flex-grow text-4xl font-bold text-green-600 mb-6 text-center">
                        SCAN QR CODE AND FINISH PAYMENT
                    </h1>
                </div>
            </div>

            <div className="flex justify-center my-12 mt-24">
                <div className="border-2 border-gray-300 p-4 rounded-lg bg-white shadow-md">
                    <RandQRCode />
                </div>
            </div>

            <div className="text-center mt-24 px-4">
                <p className="text-gray-700 text-lg mb-4" style={{ fontSize: '30px' }}>
                    Please finish payment within 10 minutes
                </p>
                <p className="text-gray-700 text-lg mb-4 font-bold" style={{ fontSize: '30px' }}>
                    Once done, kindly press the button below
                </p>
                <button
                    className="px-8 py-4 bg-green-700 text-white rounded-lg hover:bg-green-600 text-lg font-bold"
                    style={{ fontSize: '30px' }}
                >
                    Already Transferred
                </button>
            </div>
        </div>
    );
};

export default ProceedPayment;
