import React from "react";
import { HistoryPageProps } from "./types";

const getStatusColor = (status: string) => {
    switch(status) {
        case 'PENDING': return 'text-red-500';
        case 'PAID': return 'text-blue-500';
        case 'COMPLETED': return 'text-green-500';
        case 'CANCELLED': return 'text-gray-500';
        default: return 'text-gray-700';
    }
};

const HistoryContent: React.FC<HistoryPageProps> = ({ user, bookings }) => {
    return (
        <div className="h-[calc(100vh-64px)] max-w-7xl mx-auto bg-white shadow-md rounded-md">
            {/* Profile Section */}
            <div className="p-4 max-w-7xl mx-auto pl-8 flex items-center gap-4 text-left"> 
                <div className="h-[calc(0.3*(100vh))] aspect-square flex items-center justify-center rounded-full overflow-hidden shadow-lg"> 
                    <img
                        src={user.profileImage}
                        alt="Profile"
                        className="w-full h-full object-cover" 
                    />
                </div>
                <div className="flex flex-col"> 
                    <h2 className="text-3xl font-bold text-green-700 mb-2">{user.name}</h2>
                    <p className="text-gray-600 text-xl mb-1">
                        <span className="font-semibold">Email:</span> {user.email}
                    </p>
                    <p className="text-gray-600 text-xl">
                        <span className="font-semibold">Phone:</span> {user.phone}
                    </p>
                </div>
            </div>

            {/* History Section */}
            <h3 className="mt-4 text-3xl font-bold text-green-600 border-b pb-3 text-center">
                Court Booking History
            </h3>
            <div className="max-h-[calc(0.5*(100vh-64px))] overflow-y-auto">
                <table className="w-full text-2xl border-t border-b border-gray-300">
                    <thead>
                        <tr className="bg-gray-100 sticky top-0">
                            <th className="px-6 py-4 text-left text-gray-700 font-semibold">Court Name</th>
                            <th className="px-6 py-4 text-left text-gray-700 font-semibold">Date</th>
                            <th className="px-6 py-4 text-left text-gray-700 font-semibold">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map((booking, index) => (
                            <tr
                                key={index}
                                className={`border-b ${index % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-gray-100`}
                            >
                                <td className="px-6 py-4 text-blue-700 font-medium">{booking.courtName}</td>
                                <td className="px-6 py-4">{booking.bookingDate}</td>
                                <td
                                    className={`px-6 py-4 font-medium ${getStatusColor(booking.status)}`}
                                >
                                    {booking.status}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default HistoryContent;