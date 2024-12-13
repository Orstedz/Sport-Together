import React, { useState } from 'react';

interface PaymentMethodsProps {
    onSelect: (method: string) => void;
}

const PaymentMethods: React.FC<PaymentMethodsProps> = ({ onSelect }) => {
    const [selectedMethod, setSelectedMethod] = useState<string | null>(null);

    const paymentMethods = [
        { name: 'VNPAY', src: 'https://stcd02206177151.cloud.edgevnpay.vn/assets/images/logo-icon/logo-primary.svg' },
        { name: 'MoMo', src: 'https://i.pinimg.com/736x/72/1e/b1/721eb1ec1b5bf1d229e74174affe469b.jpg' },
        { name: 'MasterCard', src: 'https://i.pinimg.com/736x/79/77/9f/79779f77d2a5aa5eca98d313c10c7f0e.jpg' }
    ];

    const handleSelect = (method: string) => {
        setSelectedMethod(method);
        onSelect(method);
    };

    return (
        <div className="flex flex-col gap-6 w-full p-10 bg-white shadow-lg rounded-xl">
            <h2 className="font-bold text-green-700" style={{ fontSize: '22px' }}>
                Payment Methods
            </h2>
            <div className="flex gap-3 mt-4 items-center justify-center">
                {paymentMethods.map(method => (
                    <button
                        key={method.name}
                        onClick={() => handleSelect(method.name)}
                        className={`focus:outline-none border-4 ${selectedMethod === method.name ? 'border-green-700' : 'border-transparent hover:border-green-300'} transition-colors duration-300`}
                    >
                        <img
                            src={method.src}
                            alt={method.name}
                            className="h-14"
                        />
                    </button>
                ))}
            </div>
        </div>
    );
}

export default PaymentMethods;