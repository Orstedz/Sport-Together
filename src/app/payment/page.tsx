import React, { useState } from 'react';
import Header from '../../components/header/header';
import UserInfoForm from './userForm/userForm';

const PaymentPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <Header />
            <div className="flex flex-col md:flex-row justify-center items-start mx-auto max-w-6xl mt-6 p-4 bg-white rounded shadow">
                <UserInfoForm />
            </div>
        </div>
    );
}

export default PaymentPage;