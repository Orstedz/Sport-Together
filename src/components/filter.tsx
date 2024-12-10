import React, { useState } from 'react';

interface FilterProps {
    onRatingFilter: (rating: number | null) => void;
    onSizeFilter: (size: string | null) => void;
}

const Filter: React.FC<FilterProps> = ({ onRatingFilter, onSizeFilter }) => {
    const [rating, setRating] = useState<number | null>(null);
    const [size, setSize] = useState<string | null>(null);

    const handleRatingClick = (selectedRating: number) => {
        const newRating = selectedRating === rating ? null : selectedRating;
        setRating(newRating);
        onRatingFilter(newRating);
    };

    const handleSizeClick = (selectedSize: string) => {
        const newSize = selectedSize === size ? null : selectedSize;
        setSize(newSize);
        onSizeFilter(newSize);
    };

    return (
        <div className="bg-gray-100 p-6 rounded-lg">
            <h2 className="text-lg font-bold mb-4 text-green-500">Filters</h2>

            {/* Rating Filter */}
            <div className="mb-4">
                <h2 className="block font-medium mb-2 text-green-500">Rating</h2>
                <div className="flex flex-col space-y-2">
                    {[5, 4, 3, 2, 1].map((starCount) => (
                        <div
                            key={starCount}
                            className="flex items-center cursor-pointer"
                            onClick={() => handleRatingClick(starCount)}
                        >
                            <input
                                type="checkbox"
                                checked={rating === starCount}
                                readOnly
                                className="mr-2 cursor-pointer"
                            />
                            <div className="flex text-yellow-400">
                                {Array.from({ length: starCount }).map((_, index) => (
                                    <span key={index} className="text-xl">
                                        ★
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Size Filter */}
            <div>
                <h2 className="block font-medium mb-2 text-green-500">Size</h2>
                <div className="flex flex-col space-y-2">
                    {[
                        { label: '7 players', value: '7playerscourt' },
                        { label: '5 players', value: '5playercourt' },
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
                            />
                            <span className="text-gray-700">{sizeOption.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Filter;
