export interface User {
    name: string;
    email: string;
    phone: string;
    profileImage: string;
}

export interface Booking {
    courtName: string;
    bookingDate: string;
    status: 'COMPLETED' | 'PENDING' | 'PAID' | 'CANCELLED';
}

export interface HistoryPageProps {
    user: User;
    bookings: Booking[];
}