export interface User {
    name: string;
    email: string;
    phone: string;
    profileImage: string;
}

export interface Button {
    text: string;
    color: string;
}

export interface Booking {
    id: string;
    courtName: string;
    bookingDate: string;
    status: 'COMPLETED' | 'UNPAID' | 'PAID';
    
}

export interface HistoryPageProps {
    user: User;
    bookings: Booking[];
}