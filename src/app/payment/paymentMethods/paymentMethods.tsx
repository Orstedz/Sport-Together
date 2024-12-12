import React from 'react';

const PaymentMethods: React.FC = () => {
    return (
        <div className="flex flex-col gap-6 w-full p-10 bg-white shadow-lg rounded-xl">
            <h2 className="text-2xl font-bold text-green-700">Payment Methods</h2>
            <div className="flex gap-6 mt-4 items-center justify-center">
                <img
                    src="https://stcd02206177151.cloud.edgevnpay.vn/assets/images/logo-icon/logo-primary.svg"
                    alt="VNPAY"
                    className="h-14 hover:scale-110 transition-transform duration-300"
                />
                <img
                    src="https://i.pinimg.com/736x/72/1e/b1/721eb1ec1b5bf1d229e74174affe469b.jpg"
                    alt="MoMo"
                    className="h-14 hover:scale-110 transition-transform duration-300"
                />
                <img
                    src="https://i.pinimg.com/736x/79/77/9f/79779f77d2a5aa5eca98d313c10c7f0e.jpg"
                    alt="MasterCard"
                    className="h-14 hover:scale-110 transition-transform duration-300"
                />
            </div>
        </div>
    );
};

export default PaymentMethods;