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
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <Header />
            <div className="mt-8 mx-auto max-w-6xl p-4">
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1 bg-white rounded shadow p-6">
                        <UserInfoForm />
                        <PaymentMethods />
                    </div>

                    <div className="flex-1 bg-white rounded shadow p-6">
                        <BookingDetails
                            court={court}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PaymentPage;
