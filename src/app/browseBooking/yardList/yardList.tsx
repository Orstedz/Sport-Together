import React from 'react';

interface Yard {
    id: string;
    name: string;
    address: string;
    rating: number;
    size: string;
    price: string;
}

interface YardListProps {
    yards: Yard[];
    ratingFilter: number | null;
    sizeFilter: string | null;
}