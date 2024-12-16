import React, { useState } from "react";
import events from "../eventInterface";

interface EventFormProps {
  event: events;
}

const EventForm: React.FC<EventFormProps> = ({ event }) => {
  const [isJoined, setIsJoined] = useState(false);

  const handleJoinClick = () => {
    setIsJoined(!isJoined);
  };

  return (
    <div className="rounded-lg p-4 bg-green-100 shadow-lg">
      <h3 className="flex justify-center text-xl font-bold text-green-900 mb-2">
        {event.name}, {event.district}
      </h3>
      <p className="text-lg font-bold text-green-700 mb-1 mx-5">
        <i className="fas fa-calendar-alt text-green-800 mr-2"></i>
        {event.date}
      </p>
      <p className="text-lg text-gray-700 mb-1 mx-5">
        <i className="fas fa-user text-green-800 mr-2"></i>Host: {event.host}
      </p>
      <p className="text-lg text-gray-700 mb-1 mx-5">
        <i className="fas fa-users text-green-800 mr-2"></i>Players needed:{" "}
        {event.playersNeeded}
      </p>
      <p className="text-lg text-gray-700 mb-1 mx-5">
        <i className="fas fa-signal text-green-800 mr-2"></i>Level:{" "}
        {event.level}
      </p>
      <p className="text-lg text-gray-700 mb-1 mx-5">
        <i className="fas fa-money-bill-alt text-green-800 mr-2"></i>Price:{" "}
        {event.price}
      </p>
      <p className="text-lg text-gray-700 mb-4 mx-5">
        <i className="fas fa-comment-dots text-green-800 mr-2"></i>Description:{" "}
        {event.description || "No description."}
      </p>
      <div className="flex justify-center">
        <button
          className={`py-2 px-4 rounded-lg text-lg ${
            isJoined
              ? "bg-red-700 hover:bg-red-800"
              : "bg-green-700 hover:bg-green-800"
          } text-white`}
          onClick={handleJoinClick}
        >
          {isJoined ? "Cancel" : "Join now"}
        </button>
      </div>
    </div>
  );
};

export default EventForm;
