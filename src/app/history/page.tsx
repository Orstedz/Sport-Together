'use client';
import React from "react";
import Header from "../../components/header/header";
import { User, Booking, HistoryPageProps } from "./types";
import HistoryContent from "./HistoryContent";
import "../../components/header/global.css"

const mockUser: User = {
    name: "Hiền Đỗ Phận Sợ Mệt",
    email: "heinz.doofenshmirtz@gsk.com.",
    phone: "0385624215",
    profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTchR3K5q6J6E7MX57AUshBAVvSWrN7r7t2wg&s"
};

const mockBookings: Booking[] = [
    { 
        id: "1", 
        courtName: "SÂN THÀNH THẮNG", 
        bookingDate: "Thurs, 05/10/2023", 
        status: "UNPAID"
    },
    { 
        id: "2", 
        courtName: "SÂN 302", 
        bookingDate: "Sun, 01/10/2023", 
        status: "PAID"
    },
    {
        id: "3", 
        courtName: "SÂN 303",
        bookingDate: "Mon, 02/10/2023",
        status: "COMPLETED"
    },
    {
        id: "4", 
        courtName: "SÂN 304",
        bookingDate: "Mon, 02/10/2023",
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