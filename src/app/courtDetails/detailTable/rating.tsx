import React, { useState } from "react";
import { Rating } from "../../../interfaces/court";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";

const Ratings: React.FC<{ ratings: Rating[] }> = ({ ratings }) => {
  const [ratingState, setRatingState] = useState(ratings);
  const [userFeedback, setUserFeedback] = useState<
    { like: boolean; dislike: boolean }[]
  >(ratings.map(() => ({ like: false, dislike: false })));

  const handleLike = (index: number) => {
    const newRatings = [...ratingState];
    const newFeedback = [...userFeedback];

    if (!newFeedback[index].like) {
      if (newFeedback[index].dislike) {
        newRatings[index].dislike -= 1;
        newFeedback[index].dislike = false;
      }
      newRatings[index].like += 1;
      newFeedback[index].like = true;
    } else {
      newRatings[index].like -= 1;
      newFeedback[index].like = false;
    }

    setRatingState(newRatings);
    setUserFeedback(newFeedback);
  };

  const handleDislike = (index: number) => {
    const newRatings = [...ratingState];
    const newFeedback = [...userFeedback];

    if (!newFeedback[index].dislike) {
      if (newFeedback[index].like) {
        newRatings[index].like -= 1;
        newFeedback[index].like = false;
      }
      newRatings[index].dislike += 1;
      newFeedback[index].dislike = true;
    } else {
      newRatings[index].dislike -= 1;
      newFeedback[index].dislike = false;
    }

    setRatingState(newRatings);
    setUserFeedback(newFeedback);
  };

  const totalComments = ratingState.length;
  const ratingCounts = [5, 4, 3, 2, 1].map((stars) => {
    return {
      stars,
      count: ratingState.filter((rating) => rating.rating === stars).length,
    };
  });

  return (
    <div className="overflow-y-auto max-h-[348px] text-xl">
      {/* Rating Summary */}
      <div className="border-b pb-4 mb-4">
        {ratingCounts.map((rating, index) => (
          <div key={index} className="flex items-center mb-2">
            <span className="text-yellow-500 text-3xl">
              {"★".repeat(rating.stars)}
            </span>
            <div className="flex-1 h-2 bg-gray-200 rounded-lg ml-20">
              <div
                className="h-2 bg-red-500 rounded-lg"
                style={{ width: `${(rating.count / totalComments) * 100}%` }}
              ></div>
            </div>
            <span className="text-gray-600 text-2xl mx-10">
              ({rating.count} ratings)
            </span>
          </div>
        ))}
        <p className="text-green-600 text-3xl font-bold mt-4">
          Comments ({totalComments})
        </p>
      </div>

      {/* Individual Ratings */}
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
              </div>
            </div>
          </div>
          <div className="flex">
            <p className="text-gray-700 max-w-xl">{rating.comment}</p>
            <div className="flex items-center ml-auto mt-2">
              <button
                className={`flex items-center mr-4 ${
                  userFeedback[index].like ? "text-green-500" : "text-gray-600"
                }`}
                onClick={() => handleLike(index)}
              >
                <AiOutlineLike className="w-7 h-7" />
                <span className="ml-2">{"like (" + rating.like + ")"}</span>
              </button>
              <button
                className={`flex items-center ${
                  userFeedback[index].dislike ? "text-red-500" : "text-gray-600"
                }`}
                onClick={() => handleDislike(index)}
              >
                <AiOutlineDislike className="w-7 h-7" />
                <span className="ml-2">
                  {"dislike (" + rating.dislike + ")"}
                </span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Ratings;
