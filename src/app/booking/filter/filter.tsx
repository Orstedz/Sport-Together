import React, { useState } from 'react';
import FilterProp from '../../../interfaces/filterProp';

const Filter: React.FC<FilterProp> = ({ onRatingFilter, onSportFilter }) => {
    const [selectedRatings, setSelectedRatings] = useState<number[]>([]);
    const [sport, setSport] = useState<string | null>(null);
    const [isRatingFilterVisible, setIsRatingFilterVisible] = useState(false);
    const [isSportFilterVisible, setIsSportFilterVisible] = useState(false);

    const handleRatingClick = (selectedRating: number) => {
        const isSelected = selectedRatings.includes(selectedRating);
        const updatedRatings = isSelected
            ? selectedRatings.filter((rating) => rating !== selectedRating)
            : [...selectedRatings, selectedRating];

        setSelectedRatings(updatedRatings);
        onRatingFilter(updatedRatings);
    };

    const handleSportClick = (selectedSport: string) => {
        const newSport = selectedSport === sport ? null : selectedSport;
        setSport(newSport);
        onSportFilter(newSport);
    };

    return (
        <div className="bg-gray-100 p-4 rounded-lg">
            <div>
                <button onClick={() => setIsRatingFilterVisible(!isRatingFilterVisible)}>
                    Rating Filter
                </button>
                {isRatingFilterVisible && (
                    <div>
                        {[1, 2, 3, 4, 5].map((rating) => (
                            <button
                                key={rating}
                                onClick={() => handleRatingClick(rating)}
                                className={selectedRatings.includes(rating) ? 'selected' : ''}
                            >
                                {rating} Stars
                            </button>
                        ))}
                    </div>
                )}
            </div>
            <div>
                <button onClick={() => setIsSportFilterVisible(!isSportFilterVisible)}>
                    Sport Filter
                </button>
                {isSportFilterVisible && (
                    <div>
                        {['Badminton', 'Pickleball', 'Football', 'Basketball'].map((sport) => (
                            <button
                                key={sport}
                                onClick={() => handleSportClick(sport)}
                                className={sport === sport ? 'selected' : ''}
                            >
                                {sport}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Filter;