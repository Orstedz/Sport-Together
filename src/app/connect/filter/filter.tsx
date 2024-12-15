import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import FilterProp from "../../../interfaces/filterProp";

const Filter: React.FC<FilterProp> = ({ onRatingFilter, onSportFilter }) => {
  const [selectedRatings, setSelectedRatings] = useState<number[]>([]);
  const [selectedSports, setSelectedSports] = useState<string[]>([]);
  const [showRatingFilter, setShowRatingFilter] = useState<boolean>(false);
  const [showSportFilter, setShowSportFilter] = useState<boolean>(false);

  const handleRatingChange = (rating: number) => {
    const updatedRatings = selectedRatings.includes(rating)
      ? selectedRatings.filter((r) => r !== rating)
      : [...selectedRatings, rating];
    setSelectedRatings(updatedRatings);
    onRatingFilter(updatedRatings);
  };

  const handleSportChange = (sport: string) => {
    const updatedSports = selectedSports.includes(sport)
      ? selectedSports.filter((s) => s !== sport)
      : [...selectedSports, sport];
    setSelectedSports(updatedSports);
    onSportFilter(updatedSports);
  };

  return (
    <div>
      <div>
        <div className="mt-4">
          <div
            className="flex items-center cursor-pointer text-green-600"
            style={{ fontSize: "34px" }}
            onClick={() => setShowSportFilter(!showSportFilter)}
          >
            <span>Sports</span>
            <span className="ml-2">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {showSportFilter ? "▲" : "▼"}
            </span>
          </div>
          {showSportFilter && (
            <div className="flex flex-col mt-2">
              {["PickleBall", "Football", "Badminton", "Basketball"].map(
                (sport) => (
                  <label
                    key={sport}
                    className="flex items-center mb-2"
                    style={{ fontSize: "18px" }}
                  >
                    <input
                      type="checkbox"
                      checked={selectedSports.includes(sport)}
                      onChange={() => handleSportChange(sport)}
                      className="mr-2"
                    />
                    {sport}
                  </label>
                )
              )}
            </div>
          )}
        </div>
        <div className="mt-6">{/**@note empty div for spacing */}</div>
        <div
          className="flex items-center cursor-pointer text-green-600"
          style={{ fontSize: "34px" }}
          onClick={() => setShowRatingFilter(!showRatingFilter)}
        >
          <span>Rating</span>
          <span className="ml-2">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {showRatingFilter ? "▲" : "▼"}
          </span>
        </div>
        {showRatingFilter && (
          <div className="flex flex-col mt-2">
            {[5, 4, 3, 2, 1].map((rating) => (
              <label
                key={rating}
                className="flex items-center mb-2"
                style={{ fontSize: "18px" }}
              >
                <input
                  type="checkbox"
                  checked={selectedRatings.includes(rating)}
                  onChange={() => handleRatingChange(rating)}
                  className="mr-2"
                />
                {Array(rating).fill(<FaStar className="text-yellow-500" />)}
                {Array(5 - rating).fill(<FaStar className="text-gray-400" />)}
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Filter;
