'use client';
import React from "react";
import Header from "../../components/header/header";
import { User, Booking, HistoryPageProps } from "./types";
import HistoryContent from "./HistoryContent";

const mockUser: User = {
    name: "Hiền Đỗ Phận Sợ Mệt",
    email: "heinz.doofenshmirtz@gsk.com.",
    phone: "0385624215",
    profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTchR3K5q6J6E7MX57AUshBAVvSWrN7r7t2wg&s"
};

const mockBookings: Booking[] = [
    { 
        courtName: "SÂN THÀNH THẮNG", 
        bookingDate: "Thurs, 05/10/2023", 
        status: "PENDING" 
    },
    { 
        courtName: "SÂN 302", 
        bookingDate: "Sun, 01/10/2023", 
        status: "PAID" 
    },
];

const HistoryPage: React.FC = () => {
    return (
        <>
            <Header />
            <HistoryContent 
                user={mockUser} 
                bookings={mockBookings} 
            />
        </>
    );
};

export default HistoryPage;