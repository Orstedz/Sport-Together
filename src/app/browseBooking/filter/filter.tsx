import React, { useState } from 'react';

interface FilterProps {
    onRatingFilter: (ratings: number[]) => void;
    onSizeFilter: (size: string | null) => void;
}

const Filter: React.FC<FilterProps> = ({ onRatingFilter, onSizeFilter }) => {
    const [selectedRatings, setSelectedRatings] = useState<number[]>([]);
    const [size, setSize] = useState<string | null>(null);
    const [isRatingFilterVisible, setIsRatingFilterVisible] = useState(false);
    const [isSizeFilterVisible, setIsSizeFilterVisible] = useState(false);

    const handleRatingClick = (selectedRating: number) => {
        const isSelected = selectedRatings.includes(selectedRating);
        const updatedRatings = isSelected
            ? selectedRatings.filter((rating) => rating !== selectedRating)
            : [...selectedRatings, selectedRating];

        setSelectedRatings(updatedRatings);
        onRatingFilter(updatedRatings);
    };

    const handleSizeClick = (selectedSize: string) => {
        const newSize = selectedSize === size ? null : selectedSize;
        setSize(newSize);
        onSizeFilter(newSize);
    };

    return (
        <div className="bg-gray-100 p-6 rounded-lg">
            {/* Size Filter */}
            <div className="mb-4">
                <div className="flex items-center justify-between">
                    <h2 className="block font-medium mb-2 text-green-500" style={{ fontSize: '34px' }}>Size</h2>
                    <button
                        onClick={() => setIsSizeFilterVisible(!isSizeFilterVisible)}
                        className="flex items-center justify-center p-4 text-green-500 rounded"
                        style={{ backgroundColor: 'transparent', fontSize: '35px' }}
                    >
                        {isSizeFilterVisible ? '▲' : '▼'}
                    </button>
                </div>
                {isSizeFilterVisible && (
                    <div className="flex flex-col space-y-2" style={{ fontSize: '32px' }}>
                        {[
                            { label: '7 players', value: '7playerscourt' },
                            { label: '5 players', value: '5playerscourt' },
                            { label: 'Futsal', value: 'fustalcourt' },
                        ].map((sizeOption) => (
                            <div
                                key={sizeOption.value}
                                className="flex items-center cursor-pointer"
                                onClick={() => handleSizeClick(sizeOption.value)}
                            >
                                <input
                                    type="checkbox"
                                    checked={size === sizeOption.value}
                                    readOnly
                                    className="mr-2 cursor-pointer"
                                    style={{ width: '20px', height: '20px' }}
                                />
                                <span className="text-gray-700">{sizeOption.label}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Rating Filter */}
            <div className="mb-4">
                <div className="flex items-center justify-between">
                    <h2 className="block font-medium mb-2 text-green-500" style={{ fontSize: '34px' }}>Rating</h2>
                    <button
                        onClick={() => setIsRatingFilterVisible(!isRatingFilterVisible)}
                        className="flex items-center justify-center p-4 text-green-500 rounded"
                        style={{ backgroundColor: 'transparent', fontSize: '35px' }}
                    >
                        {isRatingFilterVisible ? '▲' : '▼'}
                    </button>
                </div>
                {isRatingFilterVisible && (
                    <div className="flex flex-col space-y-2">
                        {[5, 4, 3, 2, 1].map((starCount) => (
                            <div
                                key={starCount}
                                className="flex items-center cursor-pointer"
                                onClick={() => handleRatingClick(starCount)}
                            >
                                <input
                                    type="checkbox"
                                    checked={selectedRatings.includes(starCount)}
                                    readOnly
                                    className="mr-2 cursor-pointer"
                                    style={{ width: '20px', height: '20px' }}
                                />
                                <span className="text-4xl">
                                    <span className="text-yellow-500">{'★'.repeat(starCount)}</span>
                                    <span className="text-gray-300">{'★'.repeat(5 - starCount)}</span>
                                </span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Filter;