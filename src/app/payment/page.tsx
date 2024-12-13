import React from 'react';
import Header from '../../components/header/header';
import UserInfoForm from './userInfoForm/userInfoForm';
import PaymentMethods from './paymentMethods/paymentMethods';
import BookingDetails from './bookingDetails/bookingDetails';
import Court from '../../interfaces/court';
import './paymentPage.css';

const PaymentPage: React.FC = () => {
    const court: Court = {
        id: 1,
        name: "Làng thiếu niên Thủ Đức sân cầu lông",
        address: "Số 249, Đường Đặng Văn Bi, Phường Bình Thọ, Quận Thủ Đức, TP.HCM",
        rating: 4,
        feature: 'Indoor',
        timerange: '5:00 - 22:00',
        sport: 'Badminton',
        price: '50000 - 80000'
    }

    return (
        <div className="flex flex-col min-h-screen bg-gray-100 overflow-hidden">
            <Header />
            <div className="text-center mt-8">
                <h1 className="text-3xl font-bold text-green-600" style={{ fontSize: '38px' }}>CHECK BOOKING INFORMATION</h1>
            </div>
            <div className="flex-grow mx-auto w-full max-w-7xl px-8 pb-8 pt-0 mt-8">
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
                            <button className="px-12 py-4 border-2 border-green-700 text-green-700 rounded-lg hover:bg-green-700 hover:text-white mr-24 text-lg font-bold" style={{ fontSize: '22px' }}>
                                Back
                            </button>
                            <button className="px-12 py-4 border-2 border-green-700 text-green-700 rounded-lg hover:bg-green-700 hover:text-white ml-24 text-lg font-bold" style={{ fontSize: '22px' }}>
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