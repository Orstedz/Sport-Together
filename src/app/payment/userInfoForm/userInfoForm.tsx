import React from 'react';

const UserInfoForm: React.FC = () => {
    return (
        <div className="flex flex-col gap-2 w-full p-2">
            <h2 className="text-xl font-bold text-green-700" style={{ fontSize: '22px' }}>Your Information</h2>
            <label>
                <span className="block text-gray-700 text-green-500 font-bold" style={{ fontSize: '16px' }}>Full Name *</span>
                <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full p-2 border rounded"
                    style={{ fontSize: '16px' }}
                />
            </label>
            <label>
                <span className="block text-gray-700 text-green-500 font-bold" style={{ fontSize: '16px' }}>Email</span>
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full p-2 border rounded"
                    style={{ fontSize: '16px' }}
                />
            </label>
            <label>
                <span className="block text-gray-700 text-green-500 font-bold" style={{ fontSize: '16px' }}>Phone Number *</span>
                <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full p-2 border rounded"
                    style={{ fontSize: '16px' }}
                />
            </label>
        </div>
    );
};

export default UserInfoForm;
