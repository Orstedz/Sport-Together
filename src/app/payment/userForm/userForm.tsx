import React from 'react';

const UserInfoForm: React.FC = () => {
    return (
        <div className="flex flex-col gap-4 w-full md:w-1/2 p-4">
            <h2 className="text-xl font-bold text-green-700">Check Your Information</h2>
            <label>
                <span className="block text-gray-700">Full Name *</span>
                <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full p-2 border rounded"
                />
            </label>
            <label>
                <span className="block text-gray-700">Email</span>
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full p-2 border rounded"
                />
            </label>
            <label>
                <span className="block text-gray-700">Phone Number *</span>
                <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full p-2 border rounded"
                />
            </label>
            <div>
                <h3 className="text-gray-700 mt-4">Payment Methods:</h3>
                <div className="flex gap-4 mt-2">
                    <img src="/vnpay-logo.png" alt="VNPAY" className="h-10" />
                    <img src="/momo-logo.png" alt="MoMo" className="h-10" />
                    <img src="/mastercard-logo.png" alt="MasterCard" className="h-10" />
                </div>
            </div>
        </div>
    );
};

export default UserInfoForm;