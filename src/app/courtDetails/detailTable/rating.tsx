import React, { useState } from "react";
import { Rating } from "../../../interfaces/court";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";

const Ratings: React.FC<{ ratings: Rating[] }> = ({ ratings }) => {
  const [ratingState, setRatingState] = useState(ratings);

  const handleLike = (index: number) => {
    const newRatings = [...ratingState];
    newRatings[index].like += 1;
    setRatingState(newRatings);
  };

  const handleDislike = (index: number) => {
    const newRatings = [...ratingState];
    newRatings[index].dislike += 1;
    setRatingState(newRatings);
  };

  return (
    <div className="overflow-y-auto max-h-[348px] text-xl">
      {ratingState.map((rating, index) => (
        <div key={index} className="mt-4 border rounded-md p-4 bg-white">
          <div className="flex items-center mb-2">
            {/* User Info */}
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-4">
              <span className="text-sm font-semibold">{rating.user[0]}</span>
            </div>
            <div>
              <p className="text-gray-800 font-bold">{rating.user}</p>
              <div className="flex items-center">
                <div className="flex items-center">
                  <span className="text-yellow-500 text-sm">
                    {"★".repeat(rating.rating)}
                  </span>
                  <span className="text-gray-400 text-sm">
                    {"☆".repeat(5 - rating.rating)}
                  </span>
                </div>
                <p className="text-gray-500 text-sm ml-16">{rating.comment}</p>
              </div>
            </div>
          </div>
          <div className="flex">
            <p className="text-gray-700 max-w-xl">{rating.comment}</p>
            <div className="flex items-center ml-auto mt-2 text-gray-600">
              <button className="flex items-center mr-4" onClick={() => handleLike(index)}>
                <AiOutlineLike className="w-7 h-7" />
                <span className="ml-2">{"like (" + rating.like + ")"}</span>
              </button>
              <button className="flex items-center" onClick={() => handleDislike(index)}>
                <AiOutlineDislike className="w-7 h-7" />
                <span className="ml-2">{"dislike (" + rating.dislike + ")"}</span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Ratings;