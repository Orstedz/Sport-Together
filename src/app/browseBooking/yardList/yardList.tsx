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

const YardList: React.FC<YardListProps> = ({ yards, ratingFilter, sizeFilter }) => {
    const filteredYards = yards.filter(yard => {
        if (ratingFilter !== null && yard.rating < ratingFilter) {
            return false;
        }
        if (sizeFilter !== null && yard.size !== sizeFilter) {
            return false;
        }
        return true;
    });

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {filteredYards.map(yard => (
                <div key={yard.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                    <img
                        src={`/api/placeholder/400/320`}
                        alt={`${yard.name}`}
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                        <h3 className="text-lg font-bold">{yard.name}</h3>
                        <p className="text-gray-500">{yard.address}</p>
                        <div className="flex items-center mt-2">
                            <div className="flex items-center space-x-1 text-yellow-500">
                                {Array.from({ length: Math.round(yard.rating) }).map((_, index) => (
                                    <span key={index} className="text-xl">★</span>
                                ))}
                            </div>
                            <span className="ml-2 text-gray-500">{yard.rating}</span>
                        </div>
                        <div className="flex justify-between items-center mt-4">
                            <span className="text-green-500 font-bold">{yard.price}</span>
                            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg">
                                Book
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default YardList;
