import React from 'react';
import Header from '../../components/header/header';
import UserInfoForm from './userInfoForm/userInfoForm';
import PaymentMethods from './paymentMethods/paymentMethods';
import BookingDetails from './bookingDetails/bookingDetails';
import './paymentPage.css';

interface Court {
    id: string;
    name: string;
    address: string;
    rating: number;
    size: string;
    feature: string;
    price: string;
}

const PaymentPage: React.FC = () => {
    const court: Court = {
        id: '1',
        name: 'Sân Thanh Thăng',
        address: '9 Đường số 19, phường Thanh Mỹ Lợi, TP Thủ Đức',
        rating: 4,
        size: '7playerscourt',
        feature: "Night lighting, Locker rooms",
        price: '180,000đ - 300,000đ/giờ'
    }

    return (
        <div className="flex flex-col min-h-screen bg-gray-100 overflow-hidden">
            <Header />
            <div className="text-center mt-20">
                <h1 className="text-3xl font-bold text-green-600" style={{ fontSize: '38px' }}>CHECK BOOKING INFORMATION</h1>
            </div>
            <div className="flex-grow mx-auto w-full max-w-7xl px-8 pb-8 pt-0 mt-20">
                <div className="flex flex-col md:flex-row gap-16">
                    <div className="flex-1">
                        <div className="bg-white rounded-xl shadow-lg p-10 mb-8">
                            <UserInfoForm />
                        </div>
                        <div>
                            <PaymentMethods />
                        </div>
                    </div>

                    <div className="flex flex-col justify-between">
                        <div className="bg-white rounded-xl shadow-lg p-10 mb-4">
                            <BookingDetails court={court} />
                        </div>
                        <div className="flex justify-center w-full mt-6">
                            <button className="px-10 py-4 bg-gray-300 rounded-lg hover:bg-gray-400 mr-8 text-lg font-semibold">
                                Back
                            </button>
                            <button className="px-10 py-4 bg-green-500 text-white rounded-lg hover:bg-green-600 ml-8 text-lg font-semibold">
                                Pay
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PaymentPage;