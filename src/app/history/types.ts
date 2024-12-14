export interface User {
    name: string;
    email: string;
    phone: string;
    profileImage: string;
}

export interface Booking {
    id: string;
    courtName: string;
    bookingDate: string;
    status: 'COMPLETED' | 'UNPAID' | 'PAID';
}

// ./history/types.ts
export interface Connection {
    id: string;
    fieldName: string;
    time: string;
    host: string;
    status: 'COMPLETED' | 'WAITING' | 'CANCELLED';
}

export interface HistoryPageProps {
    user: User;
    bookings: Booking[];
    connections: Connection[];
}