import React from "react";
import EventForm from "./eventForm";
import eventData from "../eventData";

const EventList: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Danh sách sự kiện
        </h2>
        {/* Grid layout for 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {eventData.map((event) => (
            <EventForm key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventList;
