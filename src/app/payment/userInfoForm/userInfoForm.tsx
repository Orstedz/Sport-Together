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
        </div>
    );
};

export default UserInfoForm;
