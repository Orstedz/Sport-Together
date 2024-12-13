import React, { useState } from 'react';
import Header from '../../components/header/header';
import Filter from './filter/filter';
import CourtList from './courtList/courtList';
import './booking.css';

interface Court {
    id: string;
    name: string;
    address: string;
    rating: number;
    size: string;
    feature: string;
    price: string;
}

const browseBookingPage: React.FC = () => {
    const [ratingFilter, setRatingFilter] = useState<number[]>([]);
    const [sizeFilter, setSizeFilter] = useState<string | null>(null);

    const courts: Court[] = [
        {
            id: '1',
            name: 'Sân Thanh Thăng',
            address: '9 Đường số 19, phường Thanh Mỹ Lợi, TP Thủ Đức',
            rating: 4,
            size: '7playerscourt',
            feature: "Night lighting, Locker rooms",
            price: '180,000đ - 300,000đ/giờ'
        },
        {
            id: '2',
            name: 'Sân 312',
            address: '5 Trần Cao Vân, phường Vĩ Thị Sáu, quận 3, TP HCM',
            rating: 3,
            size: '5playerscourt',
            feature: "Indoor court, Parking",
            price: '150,000đ - 250,000đ/giờ'
        },
        {
            id: '3',
            name: 'Sân Mini Victory',
            address: '426 Bình Quới, phường 28, quận Bình Thạnh, TP.HCM',
            rating: 4,
            size: 'fustalcourt',
            feature: "Synthetic turf, Cafeteria",
            price: '230,000đ - 350,000đ/giờ'
        },
        {
            id: '4',
            name: 'Sân Thống Nhất',
            address: '1 Lê Duẩn, phường Bến Nghé, quận 1, TP.HCM',
            rating: 5,
            size: '11playerscourt',
            feature: "Professional-grade field, Scoreboard",
            price: '500,000đ - 700,000đ/giờ'
        },
        {
            id: '5',
            name: 'Sân Hoa Lư',
            address: '2 Đinh Tiên Hoàng, phường Đa Kao, quận 1, TP.HCM',
            rating: 4,
            size: '7playerscourt',
            feature: "Shaded areas, Shower facilities",
            price: '200,000đ - 350,000đ/giờ'
        },
        {
            id: '6',
            name: 'Sân Phú Thọ',
            address: '221 Lý Thường Kiệt, phường 15, quận 11, TP.HCM',
            rating: 3,
            size: '5playerscourt',
            feature: "Affordable rates, Water station",
            price: '150,000đ - 250,000đ/giờ'
        },
        {
            id: '7',
            name: 'Sân Kỳ Hòa',
            address: '796 Sư Vạn Hạnh, phường 12, quận 10, TP.HCM',
            rating: 4,
            size: 'fustalcourt',
            feature: "Restrooms, Nearby shops",
            price: '230,000đ - 350,000đ/giờ'
        },
        {
            id: '8',
            name: 'Sân Bình Thạnh',
            address: '123 Xô Viết Nghệ Tĩnh, phường 17, quận Bình Thạnh, TP.HCM',
            rating: 1,
            size: '7playerscourt',
            feature: "Basic amenities",
            price: '100,000đ - 200,000đ/giờ'
        },
        {
            id: '9',
            name: 'Sân Gò Vấp',
            address: '456 Phan Văn Trị, phường 5, quận Gò Vấp, TP.HCM',
            rating: 2,
            size: '11playerscourt',
            feature: "Large parking area",
            price: '180,000đ - 300,000đ/giờ'
        },
        {
            id: '10',
            name: 'Sân Tân Phú',
            address: '789 Âu Cơ, phường Tân Thành, quận Tân Phú, TP.HCM',
            rating: 3,
            size: '7playerscourt',
            feature: "Open-air court, Affordable snacks",
            price: '150,000đ - 270,000đ/giờ'
        },
        {
            id: '11',
            name: 'Sân Nhà Bè',
            address: '67 Huỳnh Tấn Phát, huyện Nhà Bè, TP.HCM',
            rating: 4,
            size: 'fustalcourt',
            feature: "Easy booking system, Clean environment",
            price: '200,000đ - 320,000đ/giờ'
        },
        {
            id: '12',
            name: 'Sân Bình Dương',
            address: '42 Nguyễn Du, TP Thủ Dầu Một, Bình Dương',
            rating: 5,
            size: '11playerscourt',
            feature: "Top-notch facilities, Professional turf",
            price: '450,000đ - 750,000đ/giờ'
        },
        {
            id: '13',
            name: 'Sân Quận 9',
            address: '21 Võ Văn Ngân, phường Linh Chiểu, TP Thủ Đức',
            rating: 3,
            size: '7playerscourt',
            feature: "Family-friendly, Drinking water provided",
            price: '180,000đ - 280,000đ/giờ'
        },
        {
            id: '14',
            name: 'Sân Long An',
            address: '55 Nguyễn Huệ, TP Tân An, Long An',
            rating: 4,
            size: '5playerscourt',
            feature: "Quiet area, Security on site",
            price: '120,000đ - 220,000đ/giờ'
        },
        {
            id: '15',
            name: 'Sân Tây Ninh',
            address: '34 Trưng Nữ Vương, TP Tây Ninh',
            rating: 5,
            size: 'fustalcourt',
            feature: "Newly renovated, Ample seating",
            price: '250,000đ - 400,000đ/giờ'
        },
        {
            id: '16',
            name: 'Sân Cần Thơ',
            address: '88 Cách Mạng Tháng 8, Ninh Kiều, TP Cần Thơ',
            rating: 3,
            size: '7playerscourt',
            feature: "Near restaurants, Good drainage",
            price: '200,000đ - 330,000đ/giờ'
        },
        {
            id: '17',
            name: 'Sân Đà Nẵng',
            address: '101 Hoàng Diệu, Hải Châu, TP Đà Nẵng',
            rating: 4,
            size: '11playerscourt',
            feature: "Ocean view, Well-maintained grass",
            price: '300,000đ - 500,000đ/giờ'
        }
    ];

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <Header />
            <div className="text-center mt-8">
                <h1 className="text-3xl font-bold text-green-600" style={{ fontSize: '38px' }}>BOOKING</h1>
            </div>
            <div className="container mx-auto py-4 px-2 grid grid-cols-8 gap-8 mt-8">
                <div className="col-start-2 col-span-2">
                    <Filter
                        onRatingFilter={setRatingFilter}
                        onSizeFilter={setSizeFilter}
                    />
                </div>
                <div className="col-start-4 col-span-4">
                    <CourtList
                        courts={courts}
                        ratingFilter={ratingFilter}
                        sizeFilter={sizeFilter}
                    />
                </div>
            </div>
        </div>
    );
};

export default browseBookingPage;