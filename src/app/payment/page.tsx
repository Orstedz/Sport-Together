import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../../components/header/header';
import UserInfoForm from './userInfoForm/userInfoForm';
import PaymentMethods from './paymentMethods/paymentMethods';
import BookingDetails from './bookingDetails/bookingDetails';
import Court from '../../interfaces/court';
import './paymentPage.css';

const PaymentPage: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const court = location.state?.court as Court;
    const totalPrice = location.state?.totalPrice as number;
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string | null>(null);

    const handlePaymentMethodSelect = (method: string) => {
        setSelectedPaymentMethod(method);
    };

    const handleProceedToPayment = () => {
        if (selectedPaymentMethod) {
            navigate('/proceed-payment', { state: { court, totalPrice, paymentMethod: selectedPaymentMethod } });
        } else {
            alert('Please select a payment method');
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-100 overflow-hidden">
            <Header />
            <div className="text-center mt-8">
                <h1 className="text-3xl font-bold text-green-600" style={{ fontSize: '38px' }}>CHECK BOOKING INFORMATION</h1>
            </div>
            <div className="flex-grow mx-auto w-full max-w-7xl px-4 pb-4 mt-8">
                <div className="flex flex-col md:flex-row gap-16">
                    <div className="flex-1 w-2/5">
                        <div className="bg-white rounded-xl shadow-lg p-4 mb-8">
                            <UserInfoForm />
                        </div>
                        <div>
                            <PaymentMethods onSelect={handlePaymentMethodSelect} />
                        </div>
                    </div>

                    <div className="flex flex-col justify-between w-3/5">
                        <div className="bg-white rounded-xl shadow-lg p-4">
                            <BookingDetails court={court} totalPrice={totalPrice} />
                        </div>
                        <div className="flex justify-center w-full mt-2 py-4">
                            <button
                                className="px-8 py-3 border-2 border-green-700 text-green-700 rounded-lg hover:bg-green-700 hover:text-white mr-24 text-lg font-bold"
                                style={{ fontSize: '22px' }}
                                onClick={() => navigate('../booking/proceed', { state: { court } })}>
                                Back
                            </button>
                            <button
                                className="px-8 py-3 border-2 border-green-700 text-green-700 rounded-lg hover:bg-green-700 hover:text-white ml-24 text-lg font-bold"
                                style={{ fontSize: '22px' }}
                                onClick={handleProceedToPayment}>
                                Pay
                            </button>
                        </div>
                    </div >
                </div >
            </div >
        </div >
    );
}

export default PaymentPage;