import React, { useState } from 'react';
import Header from '../../components/header';
import Filter from './filter/filter';
import YardList from './yardList/yardList';
import './browseBookingPage.css';

interface Yard {
    id: string;
    name: string;
    address: string;
    rating: number;
    size: string;
    price: string;
}

const browseBookingPage: React.FC = () => {
    const [ratingFilter, setRatingFilter] = useState<number | null>(null);
    const [sizeFilter, setSizeFilter] = useState<string | null>(null);

    const yards: Yard[] = [
        {
            id: '1',
            name: 'Sân Thanh Thăng',
            address: '9 Đường số 19, phường Thanh Mỹ Lợi, TP Thủ Đức',
            rating: 4,
            size: '7playerscourt',
            price: '180,000đ - 300,000đ/giờ'
        },
        {
            id: '2',
            name: 'Sân 312',
            address: '5 Trần Cao Vân, phường Vĩ Thị Sáu, quận 3, TP HCM',
            rating: 3,
            size: '5playerscourt',
            price: '150,000đ - 250,000đ/giờ'
        },
        {
            id: '3',
            name: 'Sân Mini Victory',
            address: '426 Bình Quới, phường 28, quận Bình Thạnh, TP.HCM',
            rating: 4,
            size: 'fustalcourt',
            price: '230,000đ - 350,000đ/giờ'
        }
    ];

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <Header />
            <div className="flex-1 container mx-auto py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                <Filter onRatingFilter={setRatingFilter} onSizeFilter={setSizeFilter} />
                <div className="col-span-2">
                    <YardList yards={yards} ratingFilter={ratingFilter} sizeFilter={sizeFilter} />
                </div>
            </div>
        </div>
    );
};

export default browseBookingPage;