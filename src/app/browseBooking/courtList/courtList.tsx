import React, { useState } from 'react';

/**
 * @todo refactor to Court
 * @todo improve interface to have feature information (nullable)
 * @assigned to Tra Minh Trong
 */
interface Court {
    id: string;
    name: string;
    address: string;
    rating: number;
    size: string;
    feature: string;
    price: string;
}

interface CourtListProps {
    courts: Court[];
    ratingFilter: number[];
    sizeFilter: string | null;
}

const CourtList: React.FC<CourtListProps> = ({ courts, ratingFilter, sizeFilter }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const CourtsPerPage = 3;

    const filteredCourts = courts.filter(court => {
        const matchesRating = ratingFilter.length === 0 || ratingFilter.includes(court.rating);
        const matchesSize = !sizeFilter || court.size === sizeFilter;

        return matchesRating && matchesSize;
    });

    const indexOfLastCourt = currentPage * CourtsPerPage;
    const indexOfFirstCourt = indexOfLastCourt - CourtsPerPage;
    const currentCourts = filteredCourts.slice(indexOfFirstCourt, indexOfLastCourt);

    const totalPages = Math.ceil(filteredCourts.length / CourtsPerPage);

    const nextPage = () => {
        if (indexOfLastCourt < filteredCourts.length) {
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
            {currentCourts.map(court => (
                <div
                    key={court.id}
                    className="bg-white shadow-md rounded-lg overflow-hidden flex w-full h-75"
                >
                    <div className="w-1/5 h-full">
                        <img
                            src={`../api/placeholder/500/400`}
                            alt={court.name}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="w-3/5 p-4 flex flex-col justify-between">
                        <div>
                            <h3 className="font-bold text-blue-600 whitespace-nowrap overflow-hidden text-ellipsis" style={{ fontSize: '28px' }}>
                                {court.name}
                            </h3>
                            <p className="text-lg text-gray-500 whitespace-nowrap overflow-hidden text-ellipsis">
                                {court.address}
                            </p>
                            <div className="flex items-center mt-2">
                                <div className="flex items-center space-x-1">
                                    {Array.from({ length: 5 }).map((_, index) => (
                                        <span key={index} className={`text-4xl ${index < court.rating ? 'text-yellow-500' : 'text-gray-300'}`}>
                                            ★
                                        </span>
                                    ))}
                                </div>
                                <span className="ml-2 text-lg text-gray-500">{court.rating}</span>
                            </div>
                        </div>
                        <p className="text-black-500 whitespace-nowrap overflow-hidden text-ellipsis" style={{ fontSize: '22px' }}>
                            <span className="font-bold">Feature: </span>{court.feature}
                        </p>
                        <div className="flex justify-between items-center mt-4">
                            <span className="text-black-500 whitespace-nowrap overflow-hidden text-ellipsis" style={{ fontSize: '22px' }}>
                                <span className="font-bold">Price: </span>{court.price}
                            </span>
                        </div>
                    </div>

                    <div className="w-1/5 flex flex-col justify-center items-center">
                        <p className="text-lg whitespace-nowrap overflow-hidden text-ellipsis mb-4">
                            {"Distance" /**@todo handle distance with map view */}
                        </p>
                        <button className="text-lg font-bold bg-green-500 hover:bg-green-600 text-white px-10 py-4 rounded-lg">
                            Book
                        </button>
                    </div>
                </div>
            ))
            }
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
                    disabled={indexOfLastCourt >= filteredCourts.length}
                    className="bg-green-300 hover:bg-green-400 text-white-800 font-bold py-2 px-4 rounded-r"
                >
                    &rarr;
                </button>
            </div>
        </div >
    );
};

export default CourtList;