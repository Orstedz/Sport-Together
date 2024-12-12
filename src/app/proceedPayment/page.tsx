import React from 'react';
import Header from '../../components/header/header';
import RandQRCode from './genQR/genQR';

const ProceedPayment: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-100 overflow-hidden">
            <Header />
            <RandQRCode />
        </div>
    );
}

export default ProceedPayment;