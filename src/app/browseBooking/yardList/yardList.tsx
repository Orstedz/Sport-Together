import React, { useState } from 'react';

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
    const [currentPage, setCurrentPage] = useState(1);
    const yardsPerPage = 3;
    const filteredYards = yards.filter(yard => {
        if (ratingFilter !== null && yard.rating < ratingFilter) {
            return false;
        }
        if (sizeFilter !== null && yard.size !== sizeFilter) {
            return false;
        }
        return true;
    });

    const indexOfLastYard = currentPage * yardsPerPage;
    const indexOfFirstYard = indexOfLastYard - yardsPerPage;
    const currentYards = filteredYards.slice(indexOfFirstYard, indexOfLastYard);

    const totalPages = Math.ceil(filteredYards.length / yardsPerPage);

    const nextPage = () => {
        if (indexOfLastYard < filteredYards.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];
        if (totalPages <= 5) {
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        } else {
            if (currentPage <= 3) {
                pageNumbers.push(1, 2, 3, 4, '...', totalPages);
            } else if (currentPage > totalPages - 3) {
                pageNumbers.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
            } else {
                pageNumbers.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
            }
        }
        return pageNumbers;
    };

    return (
        <div className="grid grid-cols-1 gap-6">
            {currentYards.map(yard => (
                <div
                    key={yard.id}
                    className="bg-white shadow-md rounded-lg overflow-hidden flex w-full h-64"
                >
                    <div className="w-1/3 h-full">
                        <img
                            src={`../api/placeholder/500/400`}
                            alt={yard.name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="w-2/3 p-4 flex flex-col justify-between">
                        <div>
                            <h3 className="text-lg font-bold whitespace-nowrap overflow-hidden text-ellipsis">
                                {yard.name}
                            </h3>
                            <p className="text-gray-500 whitespace-nowrap overflow-hidden text-ellipsis">
                                {yard.address}
                            </p>
                            <div className="flex items-center mt-2">
                                <div className="flex items-center space-x-1 text-yellow-500">
                                    {Array.from({ length: Math.round(yard.rating) }).map((_, index) => (
                                        <span key={index} className="text-xl">★</span>
                                    ))}
                                </div>
                                <span className="ml-2 text-gray-500">{yard.rating}</span>
                            </div>
                        </div>
                        <div className="flex justify-between items-center mt-4">
                            <span className="text-green-500 font-bold whitespace-nowrap overflow-hidden text-ellipsis">
                                {yard.price}
                            </span>
                            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg">
                                Book
                            </button>
                        </div>
                    </div>
                </div>
            ))}
            <div className="flex justify-center items-center mt-4 space-x-2">
                <button
                    onClick={prevPage}
                    disabled={currentPage === 1}
                    className="bg-green-300 hover:bg-green-400 text-white-800 font-bold py-2 px-4 rounded-l"
                >
                    &larr;
                </button>
                {renderPageNumbers().map((number, index) => (
                    <button
                        key={index}
                        onClick={() => typeof number === 'number' && setCurrentPage(number)}
                        className={`px-4 py-2 ${currentPage === number ? 'bg-green-500 text-white' : 'bg-green-300 text-gray-800'} font-bold`}
                        disabled={typeof number !== 'number'}
                    >
                        {number}
                    </button>
                ))}
                <button
                    onClick={nextPage}
                    disabled={indexOfLastYard >= filteredYards.length}
                    className="bg-green-300 hover:bg-green-400 text-white-800 font-bold py-2 px-4 rounded-r"
                >
                    &rarr;
                </button>
            </div>
        </div>
    );
};

export default YardList;