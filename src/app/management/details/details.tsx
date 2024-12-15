import React from 'react';

const CourtDetails: React.FC = () => {
    return (
        <div className="container mx-auto px-4 mt-8">
            <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h2 className="text-2xl font-bold text-green-600 mb-4">Court Information</h2>
                        <div className="space-y-3">
                            <div>
                                <span className="font-semibold text-gray-700">Name:</span>
                                <span className="ml-2 text-gray-900">...</span>
                            </div>
                            <div>
                                <span className="font-semibold text-gray-700">Sport:</span>
                                <span className="ml-2 text-gray-900">...</span>
                            </div>
                            <div>
                                <span className="font-semibold text-gray-700">Number of Yards:</span>
                                <span className="ml-2 text-gray-900">5 yards</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-green-600 mb-4">Contact Details</h2>
                        <div className="space-y-3">
                            <div>
                                <span className="font-semibold text-gray-700">Address:</span>
                                <span className="ml-2 text-gray-900">Tai culi house</span>
                            </div>
                            <div>
                                <span className="font-semibold text-gray-700">Phone:</span>
                                <span className="ml-2 text-gray-900">1234567890</span>
                            </div>
                            <div>
                                <span className="font-semibold text-gray-700">Email:</span>
                                <span className="ml-2 text-gray-900">...</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourtDetails;