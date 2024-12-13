import React, { useState } from 'react';
import Header from '../../components/header/header';
import Filter from './filter/filter';
import CourtList from './courtList/courtList';
import './booking.css';
import Court from '../../interfaces/court';

const browseBookingPage: React.FC = () => {
    const [ratingFilter, setRatingFilter] = useState<number[]>([]);
    const [sizeFilter, setSizeFilter] = useState<string[]>([]);

    const courts: Court[] = [
        {
            id: 1,
            name: "Làng thiếu niên Thủ Đức sân cầu lông",
            address: "Số 249, Đường Đặng Văn Bi, Phường Bình Thọ, Quận Thủ Đức, TP.HCM",
            rating: 4,
            feature: 'Indoor',
            timerange: '5:00 - 22:00',
            sport: 'Badminton',
            price: 50000,
            contact: '0123456789'
        },
        {
            id: 2,
            name: "Sân cầu lông Chương Dương Thủ Đức",
            address: "Số 26, Đường Chương Dương,Phường Linh Chiểu, Quận Thủ Đức, TP.HCM",
            rating: 3,
            feature: 'Indoor',
            timerange: '7:00 - 22:00',
            sport: 'Badminton',
            price: 60000,
            contact: '0123456789'
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
                        onSportFilter={setSizeFilter}
                    />
                </div>
                <div className="col-start-4 col-span-4">
                    <CourtList
                        courts={courts}
                        ratingFilter={ratingFilter}
                        sportFilter={sizeFilter}
                    />
                </div>
            </div>
        </div>
    );
};

export default browseBookingPage;