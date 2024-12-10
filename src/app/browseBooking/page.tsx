import React, { useState } from 'react';
import Header from '../../components/header';
import Filter from './filter/filter';
import YardList from './yardList/yardList';

interface Yard {
    id: string;
    name: string;
    address: string;
    rating: number;
    size: string;
    price: string;
}

const App: React.FC = () => {
    const [ratingFilter, setRatingFilter] = useState<number | null>(null);
    const [sizeFilter, setSizeFilter] = useState<string | null>(null);

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
        </div>
    );
};

export default App;