import React from 'react';
import Header from '../../components/header/header';
import RandQRCode from './genQR/genQR';

const ProceedPayment: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50 overflow-hidden">
            <Header />
            <div className="text-center mt-16 px-4">
                <h1 className="text-4xl font-bold text-green-600 mb-6">
                    SCAN QR CODE AND FINISH PAYMENT
                </h1>
                <button
                    className="px-6 py-3 border-2 border-green-700 text-green-700 rounded-lg hover:bg-green-700 hover:text-white text-lg font-bold"
                >
                    {"<<"}
                </button>
            </div>

            <div className="flex justify-center my-12">
                <div className="border-2 border-gray-300 p-4 rounded-lg bg-white shadow-md">
                    <RandQRCode />
                </div>
            </div>

            <div className="text-center mt-4 px-4">
                <p className="text-gray-700 text-lg mb-4">
                    Please finish payment within 10 minutes. Once done, kindly press the button below.
                </p>
                <button
                    className="px-8 py-4 bg-green-700 text-white rounded-lg hover:bg-green-600 text-lg font-bold"
                >
                    Already Transferred
                </button>
            </div>
        </div>
    );
};

export default ProceedPayment;
