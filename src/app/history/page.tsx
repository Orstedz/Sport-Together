import React, { useState } from 'react';
import Header from '../../components/header/header';
import BookingHistoryTable from './BookingHistoryTable';
import ConnectionHistoryTable from './ConnectionHistoryTable'; // Ensure this is imported
import { User, Booking, Connection } from './types';

const Page: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'bookings' | 'connections'>('bookings');

    const user: User = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '0123456789',
        profileImage: 'https://example.com/profile.jpg'
    };

    const initialBookings: Booking[] = [
        { id: '1', courtName: 'SÂN THÀNH THẮNG', bookingDate: '05/10/2023', status: 'UNPAID' },
        { id: '2', courtName: 'SÂN 302', bookingDate: '05/10/2023', status: 'COMPLETED' },
        { id: '3', courtName: 'SÂN ĐẠI NAM', bookingDate: '05/10/2023', status: 'COMPLETED' },
        { id: '4', courtName: 'SÂN VƯỜN LÀI', bookingDate: '05/10/2023', status: 'PAID' }
    ];

    const [bookings, setBookings] = useState<Booking[]>(initialBookings);

    const initialConnections: Connection[] = [
        { id: '1', fieldName: 'Sân Mười Thọ', time: '17h - 18h30', host: 'Trà Minh Trọng', status: 'COMPLETED' },
        { id: '2', fieldName: 'Sân Mười Thọ', time: '17h - 18h30', host: 'Trà Minh Trọng', status: 'WAITING' }
    ];

    const [connections, setConnections] = useState<Connection[]>(initialConnections);

    const handleDeleteBooking = (id: string) => {
        setBookings((prevBookings) => prevBookings.filter((booking) => booking.id !== id));
    };

    const handleDeleteConnection = (id: string) => {
        setConnections((prevConnections) => 
            prevConnections.filter(connection => connection.id !== id)
        );
    };

    return (
        <>
            <Header />
            <div className="max-w-5xl mx-auto p-4">
                <div className="grid grid-cols-2 gap-4 mb-6">
                    <button
                        onClick={() => setActiveTab('bookings')}
                        className={`py-3 text-lg font-medium transition-colors border border-gray-300
                          ${activeTab === 'bookings' 
                          ? 'bg-green-700 text-white' 
                          : 'bg-white text-green-700'}`}
                    >
                        COURT BOOKING HISTORY
                    </button>
                    <button
                        onClick={() => setActiveTab('connections')}
                        className={`py-3 text-lg font-medium transition-colors border border-gray-300
                          ${activeTab === 'connections' 
                          ? 'bg-green-700 text-white' 
                          : 'bg-white text-green-700'}`}
                    >
                        CONNECT BOOKING HISTORY
                    </button>
                </div>

                {activeTab === 'bookings' && (
                    <BookingHistoryTable 
                        bookings={bookings} 
                        onDelete={handleDeleteBooking} 
                    />
                )}

                {activeTab === 'connections' && (
                    <ConnectionHistoryTable 
                        connections={connections} 
                        onDelete={handleDeleteConnection} 
 />
                )}
            </div>
        </>
    );
};

export default Page;