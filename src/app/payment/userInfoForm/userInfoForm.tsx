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
                    <img src="https://stcd02206177151.cloud.edgevnpay.vn/assets/images/logo-icon/logo-primary.svg" alt="VNPAY" className="h-10" />
                    <img src="https://i.pinimg.com/736x/72/1e/b1/721eb1ec1b5bf1d229e74174affe469b.jpg" alt="MoMo" className="h-10" />
                    <img src="https://i.pinimg.com/736x/79/77/9f/79779f77d2a5aa5eca98d313c10c7f0e.jpg" alt="MasterCard" className="h-10" />
                </div>
            </div>
        </div>
    );
};

export default UserInfoForm;